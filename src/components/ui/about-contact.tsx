'use client';
import React from 'react';
import { Building, Mail, MapPin, Target } from 'lucide-react';
import { AnimatedContainer } from './pricing-section';

export function AboutSection() {
  return (
    <section id="about" className="py-24 w-full relative z-10 border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-4 flex flex-col md:flex-row gap-16 items-center">
        <AnimatedContainer className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-6">
            <Target className="w-4 h-4 text-emerald-400" />
            Our Mission
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            "If you’re still measuring agency value in hours billed, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">you’re already behind.</span>"
          </h2>
          <p className="text-neutral-300 mt-6 text-xl leading-relaxed font-medium">
             We measure it in operators you didn’t have to hire.
          </p>
          <p className="text-neutral-400 mt-4 text-lg leading-relaxed font-light">
            At Digital Point LLC, we believe traditional agencies are outdated. By blending AI automation with human operator oversight, we create a robust, scalable infrastructure for your business.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-3xl font-bold text-white">14.4K</h4>
              <p className="text-sm text-neutral-500 mt-1">Workflows Deployed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white">+89%</h4>
              <p className="text-sm text-neutral-500 mt-1">Qualified Pipeline Increase</p>
            </div>
             <div>
              <h4 className="text-3xl font-bold text-white">60%</h4>
              <p className="text-sm text-neutral-500 mt-1">Manual Work Automated</p>
            </div>
          </div>
        </AnimatedContainer>
        <AnimatedContainer delay={0.3} className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-black/40 to-black backdrop-blur-xl z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
             <div className="w-full max-w-sm p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
               <Building className="w-8 h-8 text-emerald-400 mb-4" />
               <h3 className="text-xl font-semibold text-white mb-2">Digital Point LLC</h3>
               <p className="text-neutral-400 text-sm">AI-powered automation agency replacing traditional headcount with scaleable systems.</p>
             </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}

export function ContactCTASection() {
  return (
    <section id="contact" className="py-24 w-full relative z-10 border-t border-white/5 mt-16">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/5 pointer-events-none" />
       <div className="mx-auto w-full max-w-4xl px-4 text-center relative z-10">
         <AnimatedContainer>
           <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
             Let’s map where AI could be running your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">repeatable work.</span>
           </h2>
           <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
             Book a 30-min audit call to identify automation opportunities and build an execution plan.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
               Tell me more
             </button>
             <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
               See case studies
             </button>
           </div>
           
           <div className="mt-16 flex justify-center gap-8 md:gap-16 text-neutral-500 flex-wrap">
             <div className="flex items-center gap-2">
               <Mail className="w-5 h-5" />
               <span className="text-sm">hello@digitalpoint.com</span>
             </div>
             <div className="flex items-center gap-2">
               <MapPin className="w-5 h-5" />
               <span className="text-sm">US, Europe, MENA</span>
             </div>
           </div>
         </AnimatedContainer>
       </div>
    </section>
  );
}
