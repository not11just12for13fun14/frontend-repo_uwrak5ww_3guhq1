import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Sophie K.', text: 'Vom ersten Gespräch bis zur Nachsorge – absolute Professionalität und Herzlichkeit. Mein Ergebnis ist wunderschön und natürlich.', rating: 5 },
  { name: 'Laura M.', text: 'Ich habe mich jederzeit wohl und sicher gefühlt. Die Beratung war ehrlich und individuell.', rating: 5 },
  { name: 'Elena R.', text: 'Eine exzellente Klinik mit einem großartigen Team. Sehr zu empfehlen!', rating: 5 },
]

const Stars = ({ count }) => (
  <div className="flex gap-1 text-amber-500" aria-label={`${count} von 5 Sternen`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < count ? 'fill-amber-400' : 'opacity-30'}`} />
    ))}
  </div>
)

const Testimonials = () => (
  <section id="reviews" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900">Was unsere Patientinnen sagen</h2>
        <p className="text-slate-600 mt-2">Vertrauen entsteht durch Erfahrung</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
            <Stars count={t.rating} />
            <p className="text-slate-700 my-4">“{t.text}”</p>
            <div className="text-slate-900 font-medium">{t.name}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#more-reviews" className="text-amber-700 hover:underline">Mehr Bewertungen ansehen</a>
      </div>
    </div>
  </section>
)

export default Testimonials