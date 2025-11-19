import React from 'react'

const AboutDoctor = () => (
  <section id="our-clinic" className="py-16 md:py-24 bg-gradient-to-r from-amber-50/50 to-rose-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1659353888338-ce940a0f252f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEci4lMjBtZWQuJTIwTWFyd2FuJTIwTnV3YXloaWR8ZW58MHwwfHx8MTc2MzU3NDA0NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dr. med. Marwan Nuwayhid" className="w-full h-80 object-cover rounded-2xl border border-amber-100 shadow" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">Dr. med. Marwan Nuwayhid</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Als erfahrener Facharzt für Plastische und Ästhetische Chirurgie steht Dr. Nuwayhid für Präzision, Sicherheit und natürliche Ergebnisse. Sein Anspruch: medizinische Exzellenz gepaart mit persönlicher Betreuung.
        </p>
        <ul className="list-disc pl-5 text-slate-700 space-y-1 mb-6">
          <li>Facharzt für Plastische und Ästhetische Chirurgie</li>
          <li>Mitglied führender medizinischer Fachgesellschaften</li>
          <li>Schwerpunkte: Brustchirurgie, Gesicht, Körperkontur</li>
        </ul>
        <a href="#team" className="inline-flex items-center px-5 py-3 rounded-full bg-white border border-amber-300 text-amber-700 hover:bg-amber-50">Unser Team kennenlernen</a>
      </div>
    </div>
  </section>
)

export default AboutDoctor