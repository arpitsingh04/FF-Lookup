import React from 'react'
import './player-stats.css'

const Stat = ({ title, value, icon }) => (
  <div className="stat">
    {icon && <div className="stat-icon">{icon}</div>}
    <div className="stat-title">{title}</div>
    <div className="stat-value">{value}</div>
  </div>
)

const hasValue = (v) => v !== undefined && v !== null && v !== '' && v !== 0

export default function PlayerStats({ player }) {
  console.log('Stats Player Data:', player)
  
  const basic = player.basicInfo || player.BasicInfo || {}

  // Create stat sections dynamically based on available data
  const rankingStats = [
    { icon: "🏅", title: "Current Rank", value: basic.rank, show: hasValue(basic.rank) },
    { icon: "⬆️", title: "Max Rank", value: basic.maxRank, show: hasValue(basic.maxRank) },
    { icon: "📊", title: "BR Points", value: basic.rankingPoints?.toLocaleString(), show: hasValue(basic.rankingPoints) },
    { icon: "🎯", title: "CS Rank", value: basic.csRank, show: hasValue(basic.csRank) },
    { icon: "⭐", title: "Level", value: basic.level, show: hasValue(basic.level) },
    { icon: "✨", title: "EXP", value: basic.exp?.toLocaleString(), show: hasValue(basic.exp) }
  ].filter(stat => stat.show)

  return (
    <div className="stats-panel">
      {rankingStats.length > 0 && (
        <>
          <h3 className="section-title">🏆 Player Rankings & Progress</h3>
          <div className="grid">
            {rankingStats.map((stat, idx) => (
              <Stat key={idx} icon={stat.icon} title={stat.title} value={stat.value} />
            ))}
          </div>
        </>
      )}

      {/* Show a message if no detailed stats available */}
      {rankingStats.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px', 
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '15px'
        }}>
          <div style={{ 
            fontSize: '64px', 
            marginBottom: '20px',
            filter: 'drop-shadow(0 0 20px rgba(0, 245, 255, 0.3))'
          }}>📊</div>
          <p style={{ 
            fontSize: '18px', 
            fontWeight: '700',
            color: '#fff',
            marginBottom: '12px',
            textShadow: '0 0 10px rgba(0, 245, 255, 0.3)'
          }}>Limited statistics available for this player.</p>
          <p style={{ 
            fontSize: '14px', 
            marginTop: '8px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            The player may have privacy settings enabled or be new to the game.
          </p>
        </div>
      )}
    </div>
  )
}
