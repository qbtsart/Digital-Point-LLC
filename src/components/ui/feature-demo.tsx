'use client';
import React from 'react';
import { Bot, Zap, Users, Target, Briefcase, Clock, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'AI Agents',
		icon: Bot,
		description: 'Custom-trained agents for lead routing, sales follow-ups, and reporting working 24/7.',
	},
	{
		title: 'Workflow Automation',
		icon: Zap,
		description: 'Multi-step automation across CRM, email, and internal tools to reduce manual operations.',
	},
	{
		title: 'Remote Operators',
		icon: Users,
		description: 'Human operators assist AI to ensure accuracy, quality control, and exception handling.',
	},
	{
		title: 'Performance Marketing',
		icon: Target,
		description: 'Ad campaigns, growth experiments, and data-driven decisions for maximum ROI.',
	},
	{
		title: 'Systems & Reporting',
		icon: Briefcase,
		description: 'Real-time insights, dashboard creation, and data tracking for smart business decisions.',
	},
	{
		title: 'Process: Lead & Score',
		icon: Clock,
		description: 'Capture leads from multiple sources, run structured intakes, and have AI rank them based on priority.',
	},
	{
		title: 'Process: Route & Report',
		icon: Zap,
		description: 'Leads are assigned to the correct pipeline automatically with weekly insights and analytics.',
	},
];

export default function DemoOne() {
	return (
		<section id="services" className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-6 backdrop-blur-md">
						<Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
						Enterprise Solutions
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-white">
						Automate. Scale. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Dominate.</span>
					</h2>
					<p className="text-neutral-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						We provide cutting-edge AI and human resources combined in powerful workflows designed to propel your business forward.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.2}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
