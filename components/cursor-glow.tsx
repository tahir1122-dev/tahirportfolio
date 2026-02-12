"use client";

import React, { useEffect, useState } from "react";

export function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const hideGlow = () => setIsVisible(false);

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseleave", hideGlow);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseleave", hideGlow);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed w-96 h-96 rounded-full pointer-events-none z-50 blur-3xl opacity-20 transition-opacity duration-300"
            style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                left: position.x - 192,
                top: position.y - 192,
            }}
        />
    );
}
