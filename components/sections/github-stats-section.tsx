"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { GITHUB_USERNAME } from "@/lib/github";
import { GitHubCalendar } from 'react-github-calendar';
import 'react-github-calendar/tooltips.css';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function GitHubStatsSection() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with theme support */}
            <div className="absolute inset-0 bg-background/50">
                <div className="absolute inset-0 dark:opacity-100 opacity-30" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 100, 200, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 100, 200, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                } as React.CSSProperties} />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            {/* Subtle Glow Effects */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 dark:bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                <SectionWrapper>
                    {/* Title */}
                    <div className="text-center mb-12 sm:mb-14 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            Developer Activity
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
                            Open Source Contributions
                        </motion.p>
                    </div>

                    {/* GitHub Contribution Calendar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="group relative overflow-hidden rounded-2xl bg-card/50 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] backdrop-blur-xl border border-border dark:border-white/10 p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-cyan-400/20">
                            {/* Animated Bottom Border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                            <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-primary dark:text-cyan-400" />
                                Contribution Activity
                            </h3>

                            <div className="github-calendar-container">
                                {mounted && (
                                    <GitHubCalendar
                                        username={GITHUB_USERNAME}
                                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                                        blockSize={12}
                                        blockMargin={4}
                                        fontSize={14}
                                        theme={{
                                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
}
