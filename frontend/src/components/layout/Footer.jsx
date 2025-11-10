import React from 'react'
import { Link } from 'react-router-dom'
import { FaFire, FaEnvelope, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <FaFire className="footer-icon" />
              <span>FF Stats Lookup</span>
            </div>
            <p className="footer-description">
              Your trusted source for Free Fire player statistics and information. 
              Fast, accurate, and always free.
            </p>
            <div className="social-links">
              <a href="#twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#discord" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
              <a href="#instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">UID Lookup</Link></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>
                <a href="mailto:contact@ffstatslookup.com">
                  <FaEnvelope /> contact@ffstatslookup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <p>
              This website is not affiliated with, endorsed, sponsored, or approved by Garena. 
              Free Fire and all associated properties are trademarks of Garena International.
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} FF Stats Lookup. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
