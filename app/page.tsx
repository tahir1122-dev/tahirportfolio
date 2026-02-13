"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GitHubStatsSection } from "@/components/sections/github-stats-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <ScrollProgress />
            <CursorGlow />
            <CommandPalette />

            <div className="relative min-h-screen overflow-x-hidden w-full max-w-full">
                <Header />

                <main className="relative overflow-x-hidden w-full">
                    <HeroSection />

                    <div id="about">
                        <AboutSection />
                    </div>

                    <div id="skills">
                        <TechStackSection />
                    </div>

                    <div id="projects">
                        <ProjectsSection />
                    </div>

                    <div id="experience">
                        <ExperienceSection />
                    </div>

                    <div id="services">
                        <ServicesSection />
                    </div>

                    <TestimonialsSection />

                    <div id="github">
                        <GitHubStatsSection />
                    </div>

                    <div id="contact">
                        <ContactSection />
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
