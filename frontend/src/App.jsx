import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'
import Disclaimer from './pages/Disclaimer'
import './App.css'



export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Layout>
  )
}
