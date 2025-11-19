import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyLanuwa from './components/WhyLanuwa'
import AboutDoctor from './components/AboutDoctor'
import Testimonials from './components/Testimonials'
import TrustSignals from './components/TrustSignals'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Structured data placeholders */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        'name': 'Lanuwa Aesthetik Klinik',
        'image': 'https://example.com/hero.jpg',
        'telephone': '+49 341 9627777',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rabensteinplatz 1',
          'addressLocality': 'Leipzig',
          'postalCode': '04103',
          'addressCountry': 'DE'
        }
      }) }} />

      <Header />
      <main>
        <Hero />
        <Services />
        <WhyLanuwa />
        <AboutDoctor />
        <Testimonials />
        <TrustSignals />
        <LocationContact />
      </main>
      <Footer />
    </div>
  )
}

export default App