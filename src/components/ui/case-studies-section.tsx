'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedContainer } from './pricing-section';

export function CaseStudiesSection() {
  const cases = [
    { title: 'TechNova Solutions', metric: '300%', metricText: 'Increase in lead response time with custom AI Agents.', tags: ['AI Agents', 'Automation'] },
    { title: 'Global Retail Co.', metric: '45%', metricText: 'Reduction in support costs using our Call Center Solution.', tags: ['Call Center', 'Support'] },
  ];

  return (
    <section id="case-studies" className="py-24 w-full relative z-10 border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-4">
        <AnimatedContainer className="mb-12 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Results</span></h2>
            <p className="text-neutral-400 mt-4 max-w-xl">See how we've helped businesses transform their operations.</p>
          </div>
          <button className="hidden md:inline-flex mt-6 md:mt-0 items-center text-sm font-medium text-emerald-400 hover:text-emerald-300">
            View all case studies <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </AnimatedContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <AnimatedContainer key={i} delay={0.2 + i * 0.1} className="group p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
              <h3 className="text-2xl font-bold text-white relative z-10">{c.title}</h3>
              <div className="my-6 relative z-10">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{c.metric}</span>
                <p className="text-neutral-300 mt-2 text-lg">{c.metricText}</p>
              </div>
              <div className="flex gap-2 relative z-10">
                {c.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-400 border border-white/10">{tag}</span>
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
