'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-[#232326] py-8">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-1 text-center"
        >
          <p className="text-[#3B3B3F] text-sm">
            © 2026 Faizan Mushtaq
          </p>
          <p className="text-[#3B3B3F] text-xs font-mono">
            Built with Python &amp; AI.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
