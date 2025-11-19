import React from 'react'
import { Phone, MessageCircle, MapPin, Star, Menu } from 'lucide-react'

function CrownLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M10 45l3-23 11 9 8-14 8 14 11-9 3 23H10z" stroke="#C9A227" strokeWidth="2" fill="#E7D7A7" fillOpacity="0.35"/>
      <path d="M10 45h44" stroke="#C9A227" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

const TopBar = () => (
  <div className="hidden md:block bg-gradient-to-r from-amber-50 to-rose-50 text-slate-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="tel:+493419627777" className="flex items-center gap-2 hover:text-amber-700 transition-colors">
          <Phone className="w-4 h-4 text-amber-600" />
          <span>+49 341 9627777</span>
        </a>
        <a href="#whatsapp" className="flex items-center gap-2 hover:text-amber-700 transition-colors">
          <MessageCircle className="w-4 h-4 text-amber-600" />
          <span>WhatsApp</span>
        </a>
        <div className="hidden lg:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-600" />
          <span>Rabensteinplatz 1, 04103 Leipzig</span>
        </div>
      </div>
      <a href="#reviews" className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/70 border border-amber-200 hover:border-amber-400 transition-colors">
        <Star className="w-4 h-4 text-amber-600" />
        <span className="font-medium">Jameda</span>
        <span className="text-xs text-slate-500">4.9/5</span>
      </a>
    </div>
  </div>
)

const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <CrownLogo className="w-8 h-8" />
            <div className="leading-4">
              <div className="text-2xl tracking-wide font-serif text-slate-800">LANUWA</div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-amber-700">Aesthetik Klinik</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-slate-700">
            {['Operations', 'Treatments', 'Blog', 'Videos', 'Our Clinic', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g,'-')}`} className="hover:text-amber-700 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#consultation" className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm hover:shadow-md transition-shadow">
              Book Consultation
            </a>
            <button className="lg:hidden p-2 rounded-md border border-amber-200 text-amber-700" aria-label="Open menu" onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-amber-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
              {['Operations', 'Treatments', 'Blog', 'Videos', 'Our Clinic', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g,'-')}`} className="py-2 text-slate-700 hover:text-amber-700">
                  {item}
                </a>
              ))}
              <a href="#consultation" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header