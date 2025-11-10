import { useState } from 'react'
import axios from 'axios'
import './App.css'
import PlayerProfile from './components/PlayerProfile'

function App() {
  const [uid, setUid] = useState('')
  const [playerData, setPlayerData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!uid || uid.length < 8) {
      setError('UID must be at least 8 digits')
      return
    }

    setLoading(true)
    setError('')
    setPlayerData(null)

    try {
      const response = await axios.get(`http://localhost:5000/api/player/${uid}`)
      // safe-set: the backend may return { data: <player> } or the player directly
      const data = response.data?.data ?? response.data
      console.log('Frontend received:', data)
      setPlayerData(data)
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to fetch player data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>FREE FIRE UID REVEAL</h1>
          <p className="subtitle">Discover real player statistics instantly</p>
        </div>
      </header>

      <main className="container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter Free Fire UID (8+ digits)"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            disabled={loading}
            aria-label="Free Fire UID"
          />
          <button type="submit" disabled={loading} className="primary">
            {loading ? 'REVEALING...' : 'REVEAL STATS'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {playerData && (
          <PlayerProfile player={playerData} uid={uid} />
        )}
      </main>
    </div>
  )
}

export default App