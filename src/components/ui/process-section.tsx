'use client';
import React from 'react';
import { Filter, GitMerge, BarChart3, Target } from 'lucide-react';
import { AnimatedContainer } from './pricing-section';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Lead',
      icon: Filter,
      description: 'Capture from multiple sources and run a structured intake.',
    },
    {
      number: '02',
      title: 'Scored',
      icon: Target,
      description: 'AI ranks and scores inbound leads strictly based on priority.',
    },
    {
      number: '03',
      title: 'Routed',
      icon: GitMerge,
      description: 'Automatically assigned to the correct pipeline or team member.',
    },
    {
      number: '04',
      title: 'Reported',
      icon: BarChart3,
      description: 'Generate weekly insights and a real-time analytics dashboard.',
    },
  ];

  return (
    <section className="py-24 w-full relative z-10 border-t border-white/5 bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] to-transparent pointer-events-none" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContainer className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Lead in, report out — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">instrumented end to end.</span>
          </h2>
        </AnimatedContainer>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-white/10" />

          {steps.map((step, i) => (
            <AnimatedContainer key={step.number} delay={0.2 + i * 0.1} className="relative z-10 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center group">
              <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center relative mb-6 shadow-xl shadow-black group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <step.icon className="w-10 h-10 text-emerald-400 relative z-10" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center border-4 border-black">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
