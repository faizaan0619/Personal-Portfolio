'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Prediction',
    description:
      'End-to-end ML pipeline predicting customer churn using behavioral analytics and feature engineering at scale.',
    tags: ['Python', 'XGBoost', 'SQL'],
    href: 'https://github.com/faizaan0619',
  },
  {
    title: 'AI Document Assistant',
    description:
      'RAG-powered assistant for querying documents using LLMs, with semantic search and contextual memory.',
    tags: ['LangChain', 'FAISS', 'OpenAI'],
    href: 'https://github.com/faizaan0619',
  },
  {
    title: 'Road Damage Detection',
    description:
      'Computer vision model for automatic road inspection and damage classification in real-time scenarios.',
    tags: ['YOLO', 'OpenCV', 'PyTorch'],
    href: 'https://github.com/faizaan0619',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-28 border-t border-[#232326]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="flex items-center gap-2 mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          <span className="text-xs font-mono tracking-[0.15em] text-[#A1A1AA] uppercase">
            Selected Work
          </span>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#232326] rounded-2xl overflow-hidden border border-[#232326]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  href,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className="group relative flex flex-col p-7 bg-[#111113] hover:bg-[#131316] transition-colors duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
    >
      {/* Arrow icon */}
      <div className="absolute top-6 right-6 text-[#3B3B3F] group-hover:text-[#3B82F6] transition-colors duration-300">
        <ArrowUpRight size={18} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-[#FAFAFA] font-semibold text-lg leading-snug pr-8 group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-[#71717A] text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono tracking-wide text-[#3B82F6] bg-[#3B82F6]/8 border border-[#3B82F6]/15 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
