"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import Image from "next/image";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code"
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "Efficient workflows and agile development practices"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Strong communication and teamwork skills"
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "Always learning and adopting cutting-edge technologies"
    }
];

export function AboutSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
            <div className="container mx-auto px-4 w-full max-w-full">
                <SectionWrapper>
                    <div className="text-center mb-12 sm:mb-14 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4"
                        >
                            Passionate developer crafting digital experiences
                        </motion.p>

                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Profile + Bio row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass dark:glass-dark p-6 sm:p-8 md:p-10 rounded-2xl mb-8 sm:mb-10 md:mb-12"
                        >
                            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center md:items-start">
                                {/* Profile Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative">
                                        {/* Decorative ring */}
                                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-60 blur-sm" />
                                        <div className="relative w-48 h-56 sm:w-52 sm:h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden border-2 border-white/10">
                                            <Image
                                                src="/assests/me3.jpeg"
                                                alt={personalInfo.name}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                        {/* Accent dot */}
                                        <div className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-3 sm:border-4 border-background" />
                                    </div>
                                </motion.div>

                                {/* Bio content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{personalInfo.name}</h3>
                                    <p className="text-xs sm:text-sm text-primary font-medium mb-3 sm:mb-4 tracking-wide">{personalInfo.title}</p>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                        {personalInfo.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm justify-center md:justify-start">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span>{personalInfo.availability}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span>{personalInfo.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                    className="group relative p-5 sm:p-6 rounded-xl border bg-card overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30"
                                >
                                    {/* Gradient glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Animated corner accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />

                                    <div className="relative flex items-start gap-3 sm:gap-4">
                                        <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            <highlight.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">{highlight.title}</h3>
                                            <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom border accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
