"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        type="button"
        aria-label="Открыть меню"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10 transition"
      >
        {/* Hamburger / Close */}
        {open ? (
          <svg viewBox="0 0 24 24" width="20" height="20" className="text-white"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" className="text-white"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-lg z-50">
          <nav className="py-2 text-sm">
            <Link href="/" className="block px-3 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>Главная</Link>
            <Link href="/about" className="block px-3 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>О нас</Link>
            <Link href="/contacts" className="block px-3 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>Контакты</Link>
          </nav>
        </div>
      )}
    </div>
  );
}


