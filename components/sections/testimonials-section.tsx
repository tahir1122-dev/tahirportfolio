"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { testimonials } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

/* ------------------------------------------------------------------ */
/*  Testimonial Card Component                                         */
/* ------------------------------------------------------------------ */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="group/card w-[280px] sm:w-[320px] flex-shrink-0 h-[260px] bg-card/50 backdrop-blur-sm border-border/50 mx-4 flex flex-col justify-between hover:bg-card/80 transition-colors duration-300 relative overflow-hidden">
            <CardContent className="p-6 flex flex-col h-full relative z-10">
                <div className="mb-4">
                    <Quote className="h-6 w-6 text-primary/60 mb-2" />
                    <p className="text-sm text-foreground/90 line-clamp-5 leading-relaxed italic">
                        "{testimonial.content}"
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/30 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm truncate">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                            {testimonial.position} at {testimonial.company}
                        </div>
                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>

            {/* Bottom Gradient Border on Hover - Animated */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out origin-left z-20" />
        </Card>
    );
}

/* ------------------------------------------------------------------ */
/*  Infinite Marquee Component                                         */
/* ------------------------------------------------------------------ */
function InfiniteMarquee({
    items,
    direction = "left",
    speed = 50,
}: {
    items: Testimonial[];
    direction?: "left" | "right";
    speed?: number;
}) {
    const tripled = [...items, ...items, ...items];

    return (
        <div className="relative overflow-hidden py-4 group/marquee">
            {/* Fade gradients at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <style>
                {`
                    @keyframes marquee-left {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-33.333%); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(-33.333%); }
                        100% { transform: translateX(0%); }
                    }
                `}
            </style>

            <div
                className="flex w-max group-hover/marquee:[animation-play-state:paused!important]"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`
                }}
            >
                {tripled.map((item, i) => (
                    <TestimonialCard key={`${item.id}-${i}`} testimonial={item} />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */
export function TestimonialsSection() {
    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <SectionWrapper>
                    <div className="text-center mb-12 sm:mb-14 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            Testimonials
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
                            What clients and colleagues say about working with me
                        </motion.p>
                    </div>

                    <div className="space-y-8">
                        <InfiniteMarquee items={firstRow} direction="left" speed={60} />
                        <InfiniteMarquee items={secondRow} direction="right" speed={60} />
                    </div>

                </SectionWrapper>
            </div>
        </section>
    );
}
