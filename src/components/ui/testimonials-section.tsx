'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { AnimatedContainer } from './pricing-section';

export function TestimonialsSection() {
  const reviews = [
    { text: "Digital Point completely revolutionized our customer service operations. The AI implementation was seamless.", author: "Sarah Jenkins", role: "COO, Apex Enterprises" },
    { text: "We were able to scale our remote operations twice as fast because of their workflow automations.", author: "Michael Chen", role: "Founder, ScaleUp Tech" },
    { text: "The automated call center solutions replaced huge overhead costs. The ROI was evident in month one.", author: "David Torres", role: "VP Operations, OmniFlow" }
  ];

  return (
    <section className="py-24 w-full relative z-10 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl px-4 relative">
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Testimonials</span></h2>
        </AnimatedContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <AnimatedContainer key={i} delay={0.2 + i * 0.1} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-emerald-400 fill-emerald-400" />)}
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">"{rev.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{rev.author}</h4>
                  <p className="text-neutral-500 text-xs">{rev.role}</p>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
