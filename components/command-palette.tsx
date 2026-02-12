"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface CommandItem {
    label: string;
    action: () => void;
    category: string;
}

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const commands: CommandItem[] = [
        {
            label: "Go to About",
            action: () => window.location.hash = "#about",
            category: "Navigation"
        },
        {
            label: "Go to Skills",
            action: () => window.location.hash = "#skills",
            category: "Navigation"
        },
        {
            label: "Go to Projects",
            action: () => window.location.hash = "#projects",
            category: "Navigation"
        },
        {
            label: "Go to Experience",
            action: () => window.location.hash = "#experience",
            category: "Navigation"
        },
        {
            label: "Go to Services",
            action: () => window.location.hash = "#services",
            category: "Navigation"
        },
        {
            label: "Go to Contact",
            action: () => window.location.hash = "#contact",
            category: "Navigation"
        },
        {
            label: "Toggle Theme",
            action: () => {
                const theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
                document.documentElement.classList.toggle("dark");
            },
            category: "Actions"
        },
    ];

    const filteredCommands = commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleCommand = (action: () => void) => {
        action();
        setIsOpen(false);
        setSearch("");
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 glass dark:glass-dark p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                aria-label="Open command palette"
            >
                <Command className="h-5 w-5" />
            </button>

            {/* Command Palette Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Card className="w-full max-w-2xl">
                                    <div className="p-4">
                                        <Input
                                            placeholder="Type a command or search..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="mb-4"
                                            autoFocus
                                        />

                                        <div className="max-h-96 overflow-y-auto space-y-2">
                                            {filteredCommands.length > 0 ? (
                                                filteredCommands.map((cmd, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleCommand(cmd.action)}
                                                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                                                    >
                                                        <div className="font-medium">{cmd.label}</div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {cmd.category}
                                                        </div>
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="text-center py-8 text-muted-foreground">
                                                    No commands found
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4 pt-4 border-t text-xs text-muted-foreground flex items-center justify-between">
                                            <span>Press ESC to close</span>
                                            <span className="flex items-center gap-2">
                                                <kbd className="px-2 py-1 bg-muted rounded">⌘</kbd>
                                                <kbd className="px-2 py-1 bg-muted rounded">K</kbd>
                                                to open
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
