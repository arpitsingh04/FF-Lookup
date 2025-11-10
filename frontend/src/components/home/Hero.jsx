import React from 'react'
import { FaSearch, FaRocket, FaBolt, FaLock, FaCheckCircle } from 'react-icons/fa'
import './Hero.css'

export default function Hero({ uid, setUid, handleSubmit, loading }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-gradient">Free Fire</span> UID Lookup
          </h1>
          <p className="hero-subtitle">
            Discover player statistics, rank, level, clan info & more instantly
          </p>
          <p className="hero-description">
            The most advanced Free Fire UID checker tool. Get detailed insights into any player's 
            profile including their level, rank, equipped items, clan information, and badges.
          </p>

          <form onSubmit={handleSubmit} className="hero-search-form">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Enter Free Fire UID (8+ digits)"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                disabled={loading}
                className="search-input"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading} 
              className="search-button"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Searching...
                </>
              ) : (
                <>
                  <FaRocket />
                  Reveal Stats
                </>
              )}
            </button>
          </form>

          <div className="hero-features">
            <div className="hero-feature">
              <FaBolt className="feature-icon" />
              <span>Instant Results</span>
            </div>
            <div className="hero-feature">
              <FaLock className="feature-icon" />
              <span>100% Safe</span>
            </div>
            <div className="hero-feature">
              <FaCheckCircle className="feature-icon" />
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
