"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import NextImage from "next/image";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
                : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <NextImage
                            src="/assests/Main Logo.png"
                            alt={personalInfo.name}
                            width={100}
                            height={36}
                            className="h-8 sm:h-10 w-auto object-contain"
                            priority
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <a href={item.href}>
                                    <Button
                                        variant="ghost"
                                        className={`transition-colors duration-300 text-sm lg:text-base px-2 lg:px-3 ${isScrolled
                                            ? "hover:bg-primary/10"
                                            : "text-white/90 hover:text-white hover:bg-white/15"
                                            }`}
                                        style={!isScrolled ? { textShadow: '0 1px 6px rgba(0,0,0,0.5)' } : undefined}
                                    >
                                        {item.label}
                                    </Button>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-2">
                        <div className={!isScrolled ? "[&_button]:text-white [&_button]:hover:bg-white/15" : ""}>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`md:hidden ${!isScrolled ? "text-white hover:bg-white/15" : ""}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`md:hidden overflow-hidden ${!isScrolled ? "bg-black/40 backdrop-blur-md rounded-lg mt-2" : "mt-2"}`}
                        >
                            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
                                {navItems.map((item) => (
                                    <a key={item.label} href={item.href}>
                                        <Button
                                            variant="ghost"
                                            className={`w-full justify-start text-sm sm:text-base ${!isScrolled ? "text-white hover:bg-white/15" : ""}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
