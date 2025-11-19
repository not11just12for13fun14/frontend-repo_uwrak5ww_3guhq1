import React from 'react'

const TrustSignals = () => (
  <section className="py-12 bg-gradient-to-r from-white to-amber-50/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="text-center md:text-left">
          <div className="text-slate-500 uppercase tracking-widest text-xs mb-2">Zertifizierungen</div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-80">
            <img src="https://dummyimage.com/120x40/ede9fe/475569&text=DGPRAEC" alt="DGPRAEC Zertifizierung" className="h-8" />
            <img src="https://dummyimage.com/120x40/eef2ff/334155&text=VDÄPC" alt="VDÄPC Mitglied" className="h-8" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-slate-500 uppercase tracking-widest text-xs mb-2">Bekannt aus</div>
          <div className="flex flex-wrap gap-4 justify-center opacity-80">
            <img src="https://dummyimage.com/120x40/fef9c3/854d0e&text=Focus" alt="Focus" className="h-8" />
            <img src="https://dummyimage.com/120x40/ede9fe/334155&text=Vogue" alt="Vogue" className="h-8" />
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="text-slate-500 uppercase tracking-widest text-xs mb-2">Versicherungen</div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end opacity-80">
            <img src="https://dummyimage.com/120x40/e2e8f0/0f172a&text=TK" alt="Techniker Krankenkasse" className="h-8" />
            <img src="https://dummyimage.com/120x40/f1f5f9/111827&text=AOK" alt="AOK" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrustSignals