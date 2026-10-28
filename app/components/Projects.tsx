'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ArrowUpRight, ExternalLink, GitFork } from 'lucide-react';

interface Project {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  href: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'FitScore AI — Resume Analyzer',
    badge: 'Live App',
    description:
      'Full-stack ML platform that scores resume-to-job description alignment using TF-IDF vectorization & cosine similarity blended with skill-bank matching, paired with an 11-point rule-based ATS audit engine.',
    tags: ['Python', 'Flask', 'scikit-learn', 'NLP', 'Docker', 'Render'],
    href: 'https://fitscore-ai-resume-analyzer.onrender.com/',
    liveUrl: 'https://fitscore-ai-resume-analyzer.onrender.com/',
    githubUrl: 'https://github.com/faizaan0619/FitScore-AI',
  },
  {
    title: 'Visual Shelf Scanner',
    badge: 'Computer Vision',
    description:
      'Autonomous retail inventory system using YOLOv8 & OpenCV to detect shelf stock levels and empty gaps in real-time, compute 5-day sales depletion velocity, and draft purchase orders for one-tap replenishment.',
    tags: ['FastAPI', 'YOLOv8', 'OpenCV', 'PyTorch', 'PostgreSQL'],
    href: 'https://github.com/faizaan0619',
    githubUrl: 'https://github.com/faizaan0619',
  },
  {
    title: 'Road Damage Detection',
    badge: 'Deep Learning',
    description:
      'Computer vision deep learning model for automatic road distress inspection and multi-class surface damage classification under diverse real-world lighting and driving conditions.',
    tags: ['YOLO', 'OpenCV', 'PyTorch', 'Python'],
    href: 'https://github.com/faizaan0619',
    githubUrl: 'https://github.com/faizaan0619',
  },
  {
    title: 'Customer Churn Prediction',
    badge: 'ML Pipeline',
    description:
      'End-to-end machine learning pipeline predicting customer churn using behavioral analytics, categorical encoding, and ensemble gradient boosting (XGBoost) evaluated with ROC-AUC & F1-score.',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'SQL'],
    href: 'https://github.com/faizaan0619',
    githubUrl: 'https://github.com/faizaan0619',
  },
  {
    title: 'AI Document Assistant',
    badge: 'Generative AI',
    description:
      'RAG-powered conversational assistant for querying unstructured enterprise documents using dense vector embeddings, semantic retrieval with FAISS, and contextual conversation memory.',
    tags: ['LangChain', 'FAISS', 'OpenAI', 'Python'],
    href: 'https://github.com/faizaan0619',
    githubUrl: 'https://github.com/faizaan0619',
  },
  {
    title: 'Retail Sales Analytics',
    badge: 'Data Science',
    description:
      'Relational database architecture and SQL analytics workflow analyzing retail transaction data, calculating revenue trends, identifying top-performing categories, and profiling customer segments.',
    tags: ['SQL', 'MySQL', 'Pandas', 'Seaborn'],
    href: 'https://github.com/faizaan0619',
    githubUrl: 'https://github.com/faizaan0619',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#232326] rounded-2xl overflow-hidden border border-[#232326]"
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
  badge,
  description,
  tags,
  href,
  liveUrl,
  githubUrl,
}: Project) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col justify-between p-7 bg-[#111113] hover:bg-[#131316] transition-colors duration-300"
      whileHover={{ y: -4 }}
    >
      <div>
        {/* Header: badge + arrow link */}
        <div className="flex items-center justify-between mb-4">
          {badge ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full">
              {badge === 'Live App' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              )}
              {badge}
            </span>
          ) : (
            <span />
          )}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="text-[#3B3B3F] group-hover:text-[#3B82F6] transition-colors duration-300 hover:scale-110"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-[#FAFAFA] font-semibold text-lg leading-snug mb-3 group-hover:text-white transition-colors">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3B82F6] transition-colors"
          >
            {title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-[#71717A] text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono tracking-wide text-[#3B82F6] bg-[#3B82F6]/8 border border-[#3B82F6]/15 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#1C1C1F]">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#60A5FA] font-medium transition-colors"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            >
              <GitFork size={13} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
