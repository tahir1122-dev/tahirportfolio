"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { experiences } from "@/data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

export function ExperienceSection() {
    /* Scroll-tracking for the rolling dot */
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });
    const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Experience
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline */}
                        <div className="relative" ref={timelineRef}>
                            {/* Timeline line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                            {/* Single rolling dot — tracks scroll position */}
                            <motion.div
                                className="absolute left-0 md:left-1/2 -translate-x-[7px] md:-translate-x-2 z-20 pointer-events-none"
                                style={{ top: dotTop }}
                            >
                                <div className="relative">
                                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30" />
                                    <div className="absolute inset-0 w-4 h-4 bg-primary/40 rounded-full animate-ping" />
                                </div>
                            </motion.div>

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative flex items-center mb-12 group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content card */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                        }`}>
                                        <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                                                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                                        <Briefcase className="h-4 w-4" />
                                                        {exp.company}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {exp.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {exp.location}
                                                </div>
                                            </div>

                                            <ul className="space-y-2 mb-4">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Bottom border accent - matches timeline gradient */}
                                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
