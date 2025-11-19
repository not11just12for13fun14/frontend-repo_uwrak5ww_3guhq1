import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

const Footer = () => (
  <footer className="bg-slate-900 text-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="text-2xl font-serif tracking-wide">LANUWA</div>
        <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Aesthetik Klinik</div>
        <p className="text-slate-400 mt-4">Rabensteinplatz 1, 04103 Leipzig</p>
        <p className="text-slate-400">+49 341 9627777</p>
      </div>
      <div>
        <div className="font-semibold text-white mb-3">Schnellzugriff</div>
        <ul className="space-y-2 text-slate-300">
          <li><a href="#operations" className="hover:text-white">Operations</a></li>
          <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
          <li><a href="#our-clinic" className="hover:text-white">Über uns</a></li>
          <li><a href="#contact" className="hover:text-white">Kontakt</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-white mb-3">Rechtliches</div>
        <ul className="space-y-2 text-slate-300">
          <li><a href="#impressum" className="hover:text-white">Impressum</a></li>
          <li><a href="#datenschutz" className="hover:text-white">Datenschutz</a></li>
          <li><a href="#cookies" className="hover:text-white">Cookie-Einstellungen</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-white mb-3">Folgen Sie uns</div>
        <div className="flex items-center gap-3">
          <a href="#instagram" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="w-5 h-5" /></a>
          <a href="#facebook" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} LANUWA Aesthetik Klinik – Alle Rechte vorbehalten.
    </div>
  </footer>
)

export default Footer