import React, { useState } from 'react'
import axios from 'axios'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import FAQ from '../components/home/FAQ'
import About from '../components/home/About'
import PlayerProfile from '../components/PlayerProfile'
import PlayerStats from '../components/PlayerStats'
import './HomePage.css'

export default function HomePage() {
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
      const data = response.data?.data ?? response.data
      setPlayerData(data)
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Failed to fetch player data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="homepage">
      {/* Hero Section with Search */}
      <Hero 
        uid={uid}
        setUid={setUid}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* Results Section */}
      {error && (
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      )}

      {playerData && (
        <section className="results-section">
          <div className="container">
            <div className="results-grid">
              <div className="results-main">
                <PlayerProfile player={playerData} uid={uid} />
              </div>
              <div className="results-sidebar">
                <PlayerStats player={playerData} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ad Space */}
      <div className="ad-container">
        <div className="ad-space ad-banner">
          <div className="ad-placeholder">Advertisement</div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Ad Space */}
      <div className="ad-container">
        <div className="ad-space ad-banner">
          <div className="ad-placeholder">Advertisement</div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* About Section */}
      <About />

      {/* Ad Space */}
      <div className="ad-container">
        <div className="ad-space ad-banner">
          <div className="ad-placeholder">Advertisement</div>
        </div>
      </div>
    </div>
  )
}
