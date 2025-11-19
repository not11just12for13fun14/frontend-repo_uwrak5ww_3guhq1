import React from 'react'
import { Heart, Sparkles, FaceIcon as Face, CircleDot } from 'lucide-react'

const services = [
  {
    title: 'Breast surgery',
    desc: 'Ästhetische Brustoperationen mit höchster Präzision und Natürlichkeit.',
    icon: Heart,
  },
  {
    title: 'Intimate surgery',
    desc: 'Diskrete und vertrauensvolle Beratung sowie präzise Eingriffe.',
    icon: CircleDot,
  },
  {
    title: 'Facial treatments',
    desc: 'Minimal-invasive Behandlungen für ein frisches, jugendliches Aussehen.',
    icon: Sparkles,
  },
  {
    title: 'Body contouring',
    desc: 'Sanfte Konturierung und Formgebung für eine harmonische Silhouette.',
    icon: CircleDot,
  },
]

const Services = () => {
  return (
    <section id="treatments" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900">Behandlungsübersicht</h2>
          <p className="text-slate-600 mt-2">Ein Auszug unserer beliebtesten Bereiche</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 border border-amber-100 hover:border-amber-300 transition-colors shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 mb-4">{desc}</p>
              <a href="#" className="text-amber-700 font-medium hover:underline">Mehr erfahren</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services