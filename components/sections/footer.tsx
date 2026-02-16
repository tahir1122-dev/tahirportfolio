"use client";

import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { UpworkIcon } from "@/components/icons/upwork-icon";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: personalInfo.social.github, label: "GitHub" },
        { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
        { icon: UpworkIcon, href: personalInfo.social.upwork, label: "Upwork" },
        { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
        { icon: Mail, href: personalInfo.social.email, label: "Email" },
    ];

    const footerLinks = [
        { title: "About", href: "#about" },
        { title: "Projects", href: "#projects" },
        { title: "Experience", href: "#experience" },
        { title: "Services", href: "#services" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative border-t bg-gradient-to-b from-background to-muted/20 overflow-hidden w-full max-w-full">
            <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 w-full max-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <a href="#" className="inline-block mb-3 sm:mb-4">
                            <NextImage
                                src="/assests/Main Logo.png"
                                alt={personalInfo.name}
                                width={100}
                                height={36}
                                className="h-8 sm:h-10 w-auto object-contain"
                            />
                        </a>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                            {personalInfo.title}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
                        <div className="flex gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:scale-110 transition-transform"
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </Button>
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {personalInfo.email}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 text-center">
                        © {currentYear} {personalInfo.name}
                    </p>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="hover:scale-110 transition-transform"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
