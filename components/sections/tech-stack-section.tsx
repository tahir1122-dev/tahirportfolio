"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { skillCategories } from "@/data/portfolio";
import { motion, useScroll, useTransform } from "framer-motion";
import { Skill } from "@/types";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Category config                                                    */
/* ------------------------------------------------------------------ */
const categoryMeta: Record<string, { icon: typeof Code2; gradient: string }> = {
    Frontend: { icon: Code2, gradient: "from-blue-500 to-cyan-500" },
    Backend: { icon: Server, gradient: "from-emerald-500 to-green-500" },
    "DevOps & Tools": { icon: Wrench, gradient: "from-orange-500 to-amber-500" },
    "AI & Automation": { icon: Sparkles, gradient: "from-violet-500 to-fuchsia-500" },
};

/* ------------------------------------------------------------------ */
/*  Skill chip in marquee                                              */
/* ------------------------------------------------------------------ */
function SkillChip({ skill }: { skill: Skill }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex-shrink-0 flex flex-col items-center justify-center w-[100px] cursor-default"
        >
            <div
                className={`
                    relative w-16 h-16 rounded-2xl flex items-center justify-center
                    border border-border/50 bg-card/70 backdrop-blur-sm
                    transition-all duration-300 ease-out
                    ${hovered ? "border-primary/50 shadow-lg shadow-primary/15 -translate-y-1 scale-110" : "shadow-sm"}
                `}
            >
                <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
                        }`}
                />
                {skill.icon && (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-9 h-9 object-contain relative z-10 transition-transform duration-300 ${hovered ? "scale-110 drop-shadow-lg" : "drop-shadow-sm"}`}
                        loading="lazy"
                    />
                )}
            </div>
            <span
                className={`mt-2 text-xs font-medium text-center leading-tight transition-colors duration-300 ${hovered ? "text-primary" : "text-muted-foreground"
                    }`}
            >
                {skill.name}
            </span>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Infinite marquee                                                   */
/* ------------------------------------------------------------------ */
function InfiniteMarquee({
    skills,
    direction = "left",
    speed = 30,
}: {
    skills: Skill[];
    direction?: "left" | "right";
    speed?: number;
}) {
    const tripled = [...skills, ...skills, ...skills];

    return (
        <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <motion.div
                className="flex gap-8 w-max"
                animate={{
                    x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
                }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            >
                {tripled.map((skill, i) => (
                    <SkillChip key={`${skill.name}-${i}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export function TechStackSection() {
    const allSkills = skillCategories.flatMap((c) => c.skills);
    const firstHalf = allSkills.slice(0, Math.ceil(allSkills.length / 2));
    const secondHalf = allSkills.slice(Math.ceil(allSkills.length / 2));

    /* Scroll-tracking for the rolling dot */
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });
    const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
            {/* Ambient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
            <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative w-full max-w-full">
                <SectionWrapper>
                    {/* Header */}
                    <div className="text-center mb-10 sm:mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            Tech Stack
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
                            Technologies and tools I use to bring ideas to life
                        </motion.p>
                    </div>

                    {/* Infinite carousel */}
                    <div className="mb-12 sm:mb-14 md:mb-16">
                        <InfiniteMarquee skills={firstHalf} direction="left" speed={28} />
                        <InfiniteMarquee skills={secondHalf} direction="right" speed={32} />
                    </div>

                    {/* Timeline layout */}
                    <div className="max-w-4xl mx-auto">
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

                            {skillCategories.map((cat, index) => {
                                const meta = categoryMeta[cat.category] || categoryMeta.Frontend;
                                const Icon = meta.icon;

                                return (
                                    <motion.div
                                        key={cat.category}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >



                                        {/* Content card */}
                                        <div
                                            className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                                }`}
                                        >
                                            <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-1">{cat.category}</h3>
                                                        <div className="flex items-center gap-2 text-primary font-semibold">
                                                            <Icon className="h-4 w-4" />
                                                            <span className="text-sm">{cat.skills.length} Technologies</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                {cat.description && (
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                        {cat.description}
                                                    </p>
                                                )}

                                                {/* Tech badges — text only, no logos */}
                                                <div className="flex flex-wrap gap-2">
                                                    {cat.skills.map((skill) => (
                                                        <Badge
                                                            key={skill.name}
                                                            variant="secondary"
                                                            className="text-xs py-1 px-2.5 hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                                                        >
                                                            {skill.name}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                {/* Bottom border accent - category-specific gradient */}
                                                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${meta.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
