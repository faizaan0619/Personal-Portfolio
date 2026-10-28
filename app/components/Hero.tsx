'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitFork, ExternalLink, Mail, FileText, Database } from 'lucide-react';
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-[800px] mx-auto px-6 w-full py-20">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
            <span className="text-[#A1A1AA] text-sm font-mono tracking-wide">Available for opportunities</span>
          </motion.div>

          <div className="flex flex-col gap-1">
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#A1A1AA] text-lg font-light"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[clamp(52px,8vw,88px)] font-extrabold leading-[0.95] tracking-tight text-[#FAFAFA]"
            >
              Faizan<br />
              <span className="text-[#3B82F6]">Mushtaq</span>
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl font-medium text-[#A1A1AA] leading-relaxed"
          >
            Data Scientist &<br />
            Machine Learning Engineer
          </motion.p>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#71717A] text-base leading-relaxed max-w-[420px]"
          >
            Building intelligent systems that transform<br />
            data into real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3 mt-2"
          >
            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-200"
              whileHover={{ scale: 1.02, backgroundColor: '#2563EB' }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowUpRight size={14} />
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/13201CgnXlmY1C_s3kVAFWaiTYOK0bxhV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent border border-[#232326] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3B82F6] text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={14} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 mt-1"
          >
            <SocialLink href="https://github.com/faizaan0619" icon={<GitFork size={16} />} label="GitHub" />
            <span className="w-px h-4 bg-[#232326]" />
            <SocialLink href="https://linkedin.com/in/faizaan-shah" icon={<ExternalLink size={16} />} label="LinkedIn" />
            <span className="w-px h-4 bg-[#232326]" />
            <SocialLink href="https://kaggle.com/faizanmushtaq06" icon={<Database size={16} />} label="Kaggle" />
            <span className="w-px h-4 bg-[#232326]" />
            <SocialLink href="mailto:hii.faizaan@gmail.com" icon={<Mail size={16} />} label="Email" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[#A1A1AA] hover:text-[#FAFAFA] text-sm transition-colors duration-200 group"
      whileHover={{ y: -1 }}
    >
      {icon}
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
      </span>
    </motion.a>
  );
}
