import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFire, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <FaFire className="brand-icon" />
          <span className="brand-text">FF Stats Lookup</span>
        </Link>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>UID Lookup</Link>
          </li>
          <li>
            <a href="/#features" onClick={closeMobileMenu}>Features</a>
          </li>
          <li>
            <a href="/#faq" onClick={closeMobileMenu}>FAQ</a>
          </li>
          <li>
            <a href="/#about" onClick={closeMobileMenu}>About</a>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
