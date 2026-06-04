'use client';

import dynamic from 'next/dynamic';

const NeuralCanvas = dynamic(() => import('./NeuralCanvas'), { ssr: false });

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-30">
      <NeuralCanvas />
    </div>
  );
}
