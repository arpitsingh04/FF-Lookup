import React from 'react'
import './LegalPages.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: December 2024</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to FF Stats Lookup ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Free Fire UID Lookup service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <p>When you use our service, we may collect:</p>
          <ul>
            <li>Free Fire User IDs (UIDs) that you search for</li>
            <li>Search queries and interaction data</li>
            <li>Feedback or contact information if you choose to provide it</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>We automatically collect certain information when you visit our website:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring/exit pages</li>
            <li>Operating system and device identifiers</li>
          </ul>

          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Free Fire UID lookup service</li>
            <li>To improve and optimize our website functionality</li>
            <li>To analyze usage patterns and trends</li>
            <li>To detect and prevent fraud or abuse</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To send you updates and notifications (only if you opt-in)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Advertising</h2>
          <p>
            We use Google AdSense and other third-party advertising networks to display advertisements on our website. These companies may use cookies and similar technologies to collect information about your visits to this and other websites to provide relevant advertisements.
          </p>
          <p>
            <strong>Google AdSense:</strong> Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          </p>
        </section>

        <section>
          <h2>5. Data Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share data with third-party service providers who assist in operating our website and providing services.</li>
            <li><strong>Analytics Partners:</strong> We use analytics services like Google Analytics to understand how visitors use our site.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
          </ul>
          <p><strong>We do not sell your personal information to third parties.</strong></p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Search queries and usage data may be retained for analytical purposes.
          </p>
        </section>

        <section>
          <h2>8. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-Out:</strong> Opt-out of marketing communications or data collection</li>
            <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on servers located outside of your country, where data protection laws may differ. By using our service, you consent to the transfer of your information to these locations.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> privacy@ffstatslookup.com</p>
            <p><strong>Website:</strong> https://yourwebsite.com/contact</p>
          </div>
        </section>

        <section>
          <h2>13. Disclaimer</h2>
          <p>
            FF Stats Lookup is not affiliated with, endorsed, sponsored, or approved by Garena International. Free Fire and all associated properties are trademarks or registered trademarks of Garena International Private Limited. All game data is sourced from publicly available information.
          </p>
        </section>
      </div>
    </div>
  )
}
