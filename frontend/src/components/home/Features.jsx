import React from 'react'
import { FaChartLine, FaUsers, FaTshirt, FaTrophy, FaBolt, FaShieldAlt } from 'react-icons/fa'
import './Features.css'

const featuresData = [
  {
    icon: FaChartLine,
    title: 'Real-Time Stats',
    description: 'Get instant access to player statistics including level, rank, and battle royale points.'
  },
  {
    icon: FaUsers,
    title: 'Clan Information',
    description: 'View detailed clan information including clan name, level, and member count.'
  },
  {
    icon: FaTshirt,
    title: 'Equipped Items',
    description: 'See what outfits, clothes, and items the player currently has equipped.'
  },
  {
    icon: FaTrophy,
    title: 'Badges & Achievements',
    description: 'Discover player badges, titles, and special achievements earned in-game.'
  },
  {
    icon: FaBolt,
    title: 'Fast & Accurate',
    description: 'Lightning-fast lookups with accurate data directly from official sources.'
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Secure',
    description: '100% safe to use. We only access publicly available player information.'
  }
]

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Everything you need to analyze Free Fire players
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
