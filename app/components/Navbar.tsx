'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090B]/80 backdrop-blur-xl border-b border-[#232326]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-[#FAFAFA] font-bold text-lg tracking-tight select-none"
            whileHover={{ opacity: 0.75 }}
            transition={{ duration: 0.15 }}
          >
            FM<span className="text-[#3B82F6]">.</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} onClick={handleNav} />
            ))}
            <a
              href="https://drive.google.com/file/d/13201CgnXlmY1C_s3kVAFWaiTYOK0bxhV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-mono tracking-wide text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#232326] hover:border-[#3B82F6] rounded-md transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#09090B]/95 backdrop-blur-xl border-b border-[#232326] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-base py-1"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/13201CgnXlmY1C_s3kVAFWaiTYOK0bxhV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-[#3B82F6] hover:text-[#60A5FA] transition-colors text-base py-1 font-mono text-sm"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick: (href: string) => void }) {
  return (
    <button
      onClick={() => onClick(href)}
      className="relative text-[#A1A1AA] hover:text-[#FAFAFA] text-sm transition-colors duration-200 group"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
    </button>
  );
}
