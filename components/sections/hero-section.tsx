"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowDown, Minus } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";

const roles = [
    "Full-Stack Developer",
    "React Specialist",
    "AI Automation Expert",
    "Next.js Developer",
    "MERN Stack Developer"
];

export function HeroSection() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-20"
            >
                <source src="/assests/portfolio.mp4" type="video/mp4" />
            </video>

            {/* Background Overlays */}
            <div className="absolute inset-0 -z-10">


                {/* Floating orbs — subtle */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Greeting badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-wide"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for work
                        </span>
                    </motion.div>

                    {/* Name — split intentionally for visual hierarchy */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-5"
                    >
                        <h1
                            className="font-black text-white leading-[0.95] tracking-tight"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 30px rgba(0,0,0,0.7), 0 8px 60px rgba(0,0,0,0.5)' }}
                        >
                            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-normal">
                                Muhammad
                            </span>
                            <span className="block text-7xl md:text-[8rem] lg:text-[10rem] text-white leading-none"
                                style={{ letterSpacing: '-0.04em' }}
                            >
                                Tahir
                            </span>
                        </h1>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
                    </motion.div>

                    {/* Rotating Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mb-5 h-10 flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={currentRole}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35 }}
                                className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white"
                                style={{ textShadow: '0 1px 4px rgba(0,0,0,1), 0 2px 15px rgba(0,0,0,0.9), 0 4px 30px rgba(0,0,0,0.7)' }}
                            >
                                {roles[currentRole]}
                            </motion.h2>
                        </AnimatePresence>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-base md:text-lg text-white font-normal mb-12 max-w-lg mx-auto leading-relaxed"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,1), 0 2px 15px rgba(0,0,0,0.9), 0 4px 30px rgba(0,0,0,0.7)' }}
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center mb-14"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-semibold group bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                        >
                            View My Work
                            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium border-white/40 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 hover:border-white/60 border transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-2 justify-center"
                    >
                        {[
                            { icon: Github, label: "GitHub", url: personalInfo.social.github },
                            { icon: Linkedin, label: "LinkedIn", url: personalInfo.social.linkedin },
                            { icon: Twitter, label: "Twitter", url: personalInfo.social.twitter },
                            { icon: Mail, label: "Email", url: personalInfo.social.email },
                        ].map(({ icon: Icon, label, url }) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="inline-flex items-center justify-center h-10 w-10 text-white hover:text-white bg-black/30 hover:bg-black/50 transition-all duration-300 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                            >
                                <Icon className="h-[18px] w-[18px]" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-0.5 h-1.5 bg-white/60 rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
