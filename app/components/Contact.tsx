'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitFork, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';

const contacts = [
  {
    icon: <GitFork size={18} />,
    label: 'GitHub',
    value: 'faizaan0619',
    href: 'https://github.com/faizaan0619',
  },
  {
    icon: <ExternalLink size={18} />,
    label: 'LinkedIn',
    value: 'faizaan-shah',
    href: 'https://linkedin.com/in/faizaan-shah',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hii.faizaan@gmail.com',
    href: 'mailto:hii.faizaan@gmail.com',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-28 border-t border-[#232326]" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span className="text-xs font-mono tracking-[0.15em] text-[#A1A1AA] uppercase">
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="text-[clamp(26px,3.5vw,40px)] font-bold text-[#FAFAFA] leading-tight mb-5"
            >
              Let&apos;s build something<br />
              <span className="text-[#3B82F6]">meaningful.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#71717A] text-base leading-relaxed max-w-[420px]"
            >
              I&apos;m always interested in discussing AI, machine learning,
              and interesting projects. Open to entry-level roles in AI/ML
              Engineering and Data Science.
            </motion.p>
          </div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col gap-3"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="group flex items-center justify-between p-4 bg-[#111113] border border-[#232326] rounded-xl hover:border-[#3B82F6]/30 hover:bg-[#111318] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#3B82F6]">{c.icon}</span>
                  <div>
                    <p className="text-[11px] font-mono text-[#3B82F6]/70 tracking-wide uppercase mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-[#A1A1AA] text-sm group-hover:text-[#FAFAFA] transition-colors">
                      {c.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#3B3B3F] group-hover:text-[#3B82F6] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform transition-transform"
                />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
