import React, { useState } from 'react'
import { FaEnvelope, FaClock, FaGlobe, FaQuestionCircle, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import './LegalPages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Contact Us</h1>
        <p className="subtitle-text">
          Have questions, feedback, or need support? We'd love to hear from you! Fill out the form below or reach out through any of our contact methods.
        </p>

        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email Us</h3>
                <p>For general inquiries:</p>
                <a href="mailto:contact@ffstatslookup.com">contact@ffstatslookup.com</a>
                <p>For support:</p>
                <a href="mailto:support@ffstatslookup.com">support@ffstatslookup.com</a>
                <p>For legal matters:</p>
                <a href="mailto:legal@ffstatslookup.com">legal@ffstatslookup.com</a>
              </div>
            </div>

            <div className="contact-method">
              <FaClock className="contact-icon" />
              <div>
                <h3>Response Time</h3>
                <p>We typically respond within 24-48 hours during business days. For urgent matters, please mark your email subject with "URGENT".</p>
              </div>
            </div>

            <div className="contact-method">
              <FaGlobe className="contact-icon" />
              <div>
                <h3>Follow Us</h3>
                <p>Stay updated with the latest features and news:</p>
                <div className="social-links">
                  <a href="#twitter">Twitter</a>
                  <a href="#discord">Discord</a>
                  <a href="#instagram">Instagram</a>
                </div>
              </div>
            </div>

            <div className="contact-method">
              <FaQuestionCircle className="contact-icon" />
              <div>
                <h3>FAQ</h3>
                <p>Before contacting us, check our <a href="#faq">Frequently Asked Questions</a> page for quick answers to common queries.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                <FaCheckCircle /> Thank you! Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="data">Data Issue</option>
                  <option value="business">Business/Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please provide as much detail as possible..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <section className="contact-faq">
          <h2>Common Questions</h2>
          <div className="faq-quick">
            <div className="faq-quick-item">
              <h3>How do I use the UID lookup?</h3>
              <p>Simply enter any Free Fire UID in the search box on our homepage and click "Reveal Stats" to see the player's profile information.</p>
            </div>
            <div className="faq-quick-item">
              <h3>Why can't I see some information?</h3>
              <p>Some players may have privacy settings enabled or limited public data. We can only display publicly available information.</p>
            </div>
            <div className="faq-quick-item">
              <h3>Is this service free?</h3>
              <p>Yes! FF Stats Lookup is completely free to use. We're supported by advertising to keep the service free for everyone.</p>
            </div>
            <div className="faq-quick-item">
              <h3>How often is data updated?</h3>
              <p>Player data is fetched in real-time whenever you perform a search, ensuring you get the most current information available.</p>
            </div>
          </div>
        </section>

        <section className="disclaimer-section">
          <h2>Important Disclaimer</h2>
          <p>
            FF Stats Lookup is an independent service and is not affiliated with, endorsed, sponsored, or approved by Garena International. Free Fire and all associated properties are trademarks or registered trademarks of Garena International Private Limited. All game data is sourced from publicly available information for informational purposes only.
          </p>
        </section>
      </div>
    </div>
  )
}
