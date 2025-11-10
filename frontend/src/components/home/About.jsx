import React from 'react'
import { FaInfoCircle, FaHeart, FaGlobe } from 'react-icons/fa'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <FaInfoCircle className="about-icon" />
          <h2 className="section-title">About FF Stats Lookup</h2>
        </div>

        <div className="about-content">
          <p>
            FF Stats Lookup is a comprehensive Free Fire player statistics lookup tool designed to 
            help players, clans, and content creators access detailed player information quickly and easily. 
            Our platform provides real-time access to player profiles, statistics, equipped items, and much more.
          </p>
          <p>
            Whether you're looking to check your own stats, scout potential clan members, or simply curious 
            about other players' achievements, our tool makes it easy to find the information you need. 
            We're committed to providing accurate, fast, and reliable Free Fire player data.
          </p>

          <div className="about-features">
            <div className="about-feature-item">
              <FaHeart className="feature-item-icon" />
              <div>
                <h3>Community Driven</h3>
                <p>Created by Free Fire players, for Free Fire players. We understand the community's needs.</p>
              </div>
            </div>
            <div className="about-feature-item">
              <FaGlobe className="feature-item-icon" />
              <div>
                <h3>Always Free</h3>
                <p>Our service is completely free to use and will always remain free for everyone.</p>
              </div>
            </div>
          </div>

          <div className="about-disclaimer">
            <p>
              <strong>Disclaimer:</strong> This service is not affiliated with, endorsed, sponsored, or approved 
              by Garena. Free Fire and all associated properties are trademarks of Garena International. 
              All data is sourced from publicly available information and we respect player privacy at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
