"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { testimonials } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
            <div className="container mx-auto px-4 w-full max-w-full">
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

                    {/* Featured Testimonial */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 group w-full">
                    >
                        <Card className="glass dark:glass-dark border-2 relative overflow-hidden">
                            <CardContent className="p-8 md:p-12">
                                <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />

                                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                    "{testimonials[activeIndex].content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                        {testimonials[activeIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">
                                            {testimonials[activeIndex].name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonials[activeIndex].position} at {testimonials[activeIndex].company}
                                        </div>
                                        <div className="flex gap-1 mt-2">
                                            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            {/* Bottom border accent - purple to pink gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                        </Card>
                    </motion.div>

                    {/* Testimonial Navigation */}
                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                    ? "bg-primary w-8"
                                    : "bg-muted hover:bg-primary/50"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* All Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveIndex(index)}
                                className="cursor-pointer group"
                            >
                                <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex gap-1 mb-3">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                            "{testimonial.content}"
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    {testimonial.position}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Bottom border accent - purple to pink gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
