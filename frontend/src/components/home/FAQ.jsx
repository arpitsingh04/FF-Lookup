import React, { useState } from 'react'
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './FAQ.css'

const faqData = [
  {
    question: 'What is a Free Fire UID?',
    answer: 'A UID (User ID) is a unique identification number assigned to every Free Fire player. It\'s used to identify and look up player profiles. You can find your UID on your profile page in the Free Fire game.'
  },
  {
    question: 'Is this tool safe to use?',
    answer: 'Yes, our tool is 100% safe. We only access publicly available information that anyone can see in the game. We never ask for your password or any sensitive information.'
  },
  {
    question: 'Why can\'t I see some information?',
    answer: 'Some players may have privacy settings enabled or limited public data. We can only display information that is publicly available through the Free Fire API.'
  },
  {
    question: 'How often is the data updated?',
    answer: 'Player data is fetched in real-time whenever you perform a search. The information you see is the most current data available from the Free Fire servers.'
  },
  {
    question: 'Can I check my own stats?',
    answer: 'Absolutely! You can use this tool to check your own Free Fire statistics by entering your UID. It\'s a great way to track your progress and see your profile from another perspective.'
  },
  {
    question: 'Do I need to log in?',
    answer: 'No login required! Our tool is completely free and doesn\'t require any registration. Just enter a UID and get instant results.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaQuestionCircle className="title-icon" />
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our service
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
