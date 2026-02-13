"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { services } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { useState } from "react";

const gradients = [
    "from-blue-500 via-blue-600 to-indigo-600",
    "from-purple-500 via-violet-600 to-purple-600",
    "from-cyan-500 via-blue-500 to-indigo-600",
    "from-emerald-500 via-green-600 to-teal-600",
    "from-orange-500 via-red-600 to-pink-600",
    "from-indigo-500 via-purple-600 to-pink-600"
];

export function ServicesSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-950/20 dark:via-purple-950/10" />

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-4 relative w-full max-w-full">
                <SectionWrapper>
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block mb-3 sm:mb-4"
                        >
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold">
                                What I Offer
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            Services
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6 rounded-full"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
                        >
                            Comprehensive solutions tailored to your needs
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Star;
                            const gradient = gradients[index % gradients.length];

                            return (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    Icon={Icon}
                                    gradient={gradient}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}

function ServiceCard({ service, Icon, gradient, index }: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative"
        >
            {/* Rotating Border Gradient - Moving Line Effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(var(--angle), transparent 30%, rgba(59, 130, 246, 0.5) 50%, transparent 70%)`,
                    backgroundSize: '200% 200%',
                }}
                animate={isHovered ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <Card className="relative h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                    transition={{ duration: 0.8 }}
                />

                <CardContent className="p-6 lg:p-8 relative z-10">
                    {/* Icon - Static and Sleek */}
                    <div className="mb-6">
                        <Icon
                            className={`h-12 w-12 lg:h-14 lg:w-14 ${gradient.includes('blue-500') ? 'text-blue-500' :
                                gradient.includes('purple-500') ? 'text-purple-500' :
                                    gradient.includes('cyan-500') ? 'text-cyan-500' :
                                        gradient.includes('emerald-500') ? 'text-emerald-500' :
                                            gradient.includes('orange-500') ? 'text-orange-500' :
                                                'text-indigo-500'
                                }`}
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Title */}
                    <motion.h3
                        className="text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500"
                        animate={isHovered ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                        {service.features.map((feature: string, i: number) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                                className="flex items-start gap-3 text-sm group/item"
                            >
                                <motion.span
                                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.span>
                                <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                                    {feature}
                                </span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>

                {/* Bottom border accent line - matches icon gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
            </Card>
        </motion.div >
    );
}
