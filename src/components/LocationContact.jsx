import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const LocationContact = () => (
  <section id="contact" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Standort & Kontakt</h2>
        <div className="aspect-video w-full bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center text-slate-500 mb-6">
          Karte folgt
        </div>
        <div className="space-y-2 text-slate-700">
          <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-amber-700" /> Rabensteinplatz 1, 04103 Leipzig</div>
          <div className="flex items-center gap-2"><Phone className="w-5 h-5 text-amber-700" /> +49 341 9627777</div>
          <div className="flex items-center gap-2"><Mail className="w-5 h-5 text-amber-700" /> info@lanuwa.de</div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-serif text-slate-900 mb-4">Öffnungszeiten</h3>
        <ul className="text-slate-700 space-y-1 mb-6">
          <li>Mo–Fr: 09:00–18:00 Uhr</li>
          <li>Sa: nach Vereinbarung</li>
        </ul>
        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 mb-2">Anfrage senden</h4>
          <p className="text-sm text-slate-600 mb-4">Kurzes Formular – wir melden uns schnellstmöglich bei Ihnen.</p>
          <form className="grid grid-cols-1 gap-3">
            <input type="text" placeholder="Ihr Name" aria-label="Ihr Name" className="px-4 py-3 rounded-xl border border-amber-200 bg-white/80" />
            <input type="email" placeholder="Ihre E-Mail" aria-label="Ihre E-Mail" className="px-4 py-3 rounded-xl border border-amber-200 bg-white/80" />
            <input type="tel" placeholder="Ihre Telefonnummer" aria-label="Ihre Telefonnummer" className="px-4 py-3 rounded-xl border border-amber-200 bg-white/80" />
            <textarea placeholder="Ihre Nachricht" aria-label="Ihre Nachricht" className="px-4 py-3 rounded-xl border border-amber-200 bg-white/80 min-h-[100px]"></textarea>
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow hover:shadow-md">Absenden</button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default LocationContact