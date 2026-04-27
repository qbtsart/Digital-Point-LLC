'use client';
import React from 'react';
import { Check, Star, ArrowRight, Building, Mail, MapPin, Target } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  key?: string | number;
};

export function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PricingSection() {
  const plans = [
    {
      name: 'Starter', price: '$999', interval: '/mo',
      description: 'Perfect for small teams starting with AI automation.',
      features: ['1 Custom AI Agent', 'Basic Workflow Automation', 'Standard Support', '5 Team Members'],
    },
    {
      name: 'Pro', price: '$2,499', interval: '/mo',
      description: 'Ideal for scaling businesses requiring advanced operations.',
      features: ['5 Custom AI Agents', 'Advanced Workflow Automations', 'Priority 24/7 Support', 'Unlimited Team Members', 'Basic Call Center Solution'],
      popular: true,
    },
    {
      name: 'Enterprise', price: 'Custom', interval: '',
      description: 'Dedicated infrastructure for large-scale operations.',
      features: ['Unlimited AI Agents', 'Custom Call Center Integrations', 'Dedicated Account Manager', 'On-Premise Deployment', 'Remote Team Sourcing'],
    }
  ];

  return (
    <section id="pricing" className="py-24 w-full relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Pricing</span></h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Flexible plans designed to scale with your business operations.</p>
        </AnimatedContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <AnimatedContainer key={plan.name} delay={0.2 + i * 0.1} className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-emerald-500/50 bg-white/5' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-md`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-wider">Most Popular</div>
              )}
              <h3 className="text-xl font-medium text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline text-4xl text-white font-extrabold">
                {plan.price}<span className="ml-1 text-lg font-medium text-neutral-500">{plan.interval}</span>
              </div>
              <p className="mt-4 text-sm text-neutral-400">{plan.description}</p>
              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-xl text-sm font-semibold transition-all ${plan.popular ? 'bg-white text-black hover:bg-neutral-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Choose {plan.name}
              </button>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
