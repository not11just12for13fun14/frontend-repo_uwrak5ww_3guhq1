import React from 'react'
import Spline from '@splinetool/react-spline'
import { Instagram } from 'lucide-react'

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-serif text-slate-800">{value}</div>
    <div className="text-xs uppercase tracking-widest text-slate-500">{label}</div>
  </div>
)

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-white/40 to-white pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900">
                Schönheitsklinik Leipzig - Alles für Ihre Schönheit
              </h1>
              <p className="text-slate-700 text-lg leading-relaxed">
                Ihr Körper begleitet Sie ein Leben lang. Vertrauen Sie auf höchste medizinische Standards und erfahrene Fachärzte in Leipzig.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#consultation" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow hover:shadow-md">
                  Beratungstermin vereinbaren
                </a>
                <a href="#instagram" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 border border-amber-200 text-slate-700 hover:border-amber-400">
                  <Instagram className="w-5 h-5 text-amber-600" />
                  <span>Folgen Sie uns</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <Stat value="15+" label="Jahre Erfahrung" />
                <Stat value="10k+" label="Behandlungen" />
                <Stat value="4.9/5" label="Bewertungen" />
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero