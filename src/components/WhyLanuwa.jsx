import React from 'react'
import { Stethoscope, Microscope, UserCheck } from 'lucide-react'

const items = [
  { icon: Stethoscope, title: 'Erfahrene Spezialisten', desc: 'Angeführt von Dr. med. Marwan Nuwayhid – präzise, sicher und empathisch.' },
  { icon: Microscope, title: 'Moderne Techniken', desc: 'State-of-the-Art Methoden, schonende Verfahren und höchste Qualitätsstandards.' },
  { icon: UserCheck, title: 'Individuelle Beratung', desc: 'Zeit für Ihre Wünsche und Fragen – maßgeschneiderte Behandlungskonzepte.' },
]

const WhyLanuwa = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900">Warum LANUWA?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100">
            <div className="w-12 h-12 rounded-full bg-white border border-amber-200 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyLanuwa