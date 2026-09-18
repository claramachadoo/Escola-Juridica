import React, { useState } from 'react';
import { Shield, QrCode, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenKiosk, onStartCheckup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-navy-950 flex items-center justify-center text-white shadow-sm">
              <Shield className="w-5 h-5 text-brand-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-navy-950 tracking-tight">
                Escola<span className="text-brand-600"> Jurídica</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                Geedu Connect
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#diagnostico" className="hover:text-brand-600 transition-colors">Diagnóstico</a>
            <a href="#pilares" className="hover:text-brand-600 transition-colors">Como Funciona</a>
            <a href="#planos" className="hover:text-brand-600 transition-colors">Planos</a>
            <a href="#faq" className="hover:text-brand-600 transition-colors">Dúvidas</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenKiosk}
              title="Modo Stand / QR Code"
              className="p-2 rounded-lg text-slate-500 hover:text-navy-950 hover:bg-slate-100 transition-colors"
            >
              <QrCode className="w-4 h-4" />
            </button>

            <button
              onClick={onStartCheckup}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs text-white bg-navy-950 hover:bg-navy-800 transition-colors"
            >
              <span>Fazer Check-up</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-slate-100 flex flex-col gap-1 text-sm font-medium text-slate-700">
            <a href="#diagnostico" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-50 text-brand-600">Diagnóstico (2 min)</a>
            <a href="#pilares" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-50">Como Funciona</a>
            <a href="#planos" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-50">Planos</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-50">Dúvidas</a>
          </div>
        )}
      </div>
    </header>
  );
}
