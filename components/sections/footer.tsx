"use client";

import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
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
        <footer className="relative border-t bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <a href="#" className="inline-block mb-4">
                            <NextImage
                                src="/assests/Main Logo.png"
                                alt={personalInfo.name}
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                        <p className="text-muted-foreground mb-4">
                            {personalInfo.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
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
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-2 mb-4">
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
                <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
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
