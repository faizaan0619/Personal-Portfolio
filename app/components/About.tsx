'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'C / C++', 'JavaScript'],
  },
  {
    category: 'Machine Learning & CV',
    items: ['Scikit-learn', 'PyTorch', 'YOLOv8', 'OpenCV', 'NLP (TF-IDF)'],
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Feature Engineering'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['FastAPI', 'Flask', 'Docker', 'PostgreSQL', 'MySQL', 'Git'],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 border-t border-[#232326]" ref={ref}>
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
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: Heading + description */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="text-[clamp(30px,4vw,44px)] font-bold text-[#FAFAFA] leading-tight mb-6"
            >
              Minimal.<br />
              Practical.<br />
              <span className="text-[#3B82F6]">Data-driven.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
              className="text-[#71717A] text-base leading-relaxed max-w-[480px]"
            >
              I specialize in machine learning, computer vision, and applied NLP systems.
              My focus is building intelligent software that solves real-world operational problems —
              from autonomous retail shelf monitoring and resume ATS parsing to predictive ML pipelines that scale.
            </motion.p>

            {/* Subtle divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="mt-8 h-px bg-gradient-to-r from-[#3B82F6]/30 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
                <span className="text-[#A1A1AA]">MCA (Masters of Computer Applications) - Cluster University Srinagar</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
                <span className="text-[#A1A1AA]">Focused on AI/ML Engineering &amp; Computer Vision</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/60" />
                <span className="text-[#A1A1AA]">Based in Srinagar, Jammu &amp; Kashmir, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-px bg-[#232326] rounded-xl overflow-hidden border border-[#232326]"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="bg-[#111113] p-5 hover:bg-[#131316] transition-colors duration-300"
              >
                <p className="text-[11px] font-mono tracking-[0.12em] text-[#3B82F6] uppercase mb-3">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[#A1A1AA]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
