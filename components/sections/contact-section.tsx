"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export function ContactSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate individual field
    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) {
                    return 'Name is required';
                }
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters';
                }
                if (value.trim().length > 50) {
                    return 'Name must be less than 50 characters';
                }
                return '';

            case 'email':
                if (!value.trim()) {
                    return 'Email is required';
                }
                if (!emailRegex.test(value.trim())) {
                    return 'Please enter a valid email address';
                }
                return '';

            case 'subject':
                if (!value.trim()) {
                    return 'Subject is required';
                }
                if (value.trim().length < 3) {
                    return 'Subject must be at least 3 characters';
                }
                if (value.trim().length > 50) {
                    return 'Subject must be less than 50 characters';
                }
                return '';

            case 'message':
                if (!value.trim()) {
                    return 'Message is required';
                }
                if (value.trim().length < 10) {
                    return 'Message must be at least 10 characters';
                }
                if (value.trim().length > 1000) {
                    return 'Message must be less than 1000 characters';
                }
                return '';

            default:
                return '';
        }
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate on change if field has been touched
        if (touched[name as keyof typeof touched]) {
            const error = validateField(name, value);
            setErrors({ ...errors, [name]: error });
        }
    };

    // Handle input blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    // Validate all fields
    const validateForm = (): boolean => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message)
        };

        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            subject: true,
            message: true
        });

        // Return true if no errors
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Message Sent! 🎉",
                    description: data.message,
                });
                // Reset form
                setFormData({ name: "", email: "", subject: "", message: "" });
                setErrors({ name: "", email: "", subject: "", message: "" });
                setTouched({ name: false, email: false, subject: false, message: false });
            } else {
                toast({
                    title: "Error",
                    description: data.error || "Failed to send message",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const contactInfo = [
        {
            icon: Mail,
            iconImage: "/assests/animated email .png",
            title: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`
        },
        {
            icon: Phone,
            iconImage: "/assests/social.png",
            title: "Phone",
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`
        },
        {
            icon: MapPin,
            iconImage: "/assests/Animated earth.png",
            title: "Location",
            value: personalInfo.location,
            href: "#"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 relative w-full max-w-full">
                <SectionWrapper>
                    <div className="text-center mb-12 sm:mb-14 md:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        >
                            Get In Touch
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
                            Have a project in mind? Let's work together to create something amazing
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-4 sm:space-y-6">
                            {contactInfo.map((info, index) => {
                                // Define gradient colors for each card
                                const gradients = [
                                    'from-blue-500 to-indigo-600', // Email
                                    'from-green-500 to-emerald-600', // Phone/WhatsApp
                                    'from-purple-500 to-violet-600' // Location
                                ];
                                const gradient = gradients[index];

                                return (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                        className="group relative"
                                    >
                                        <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    {/* 3D Icon Container */}
                                                    <motion.div
                                                        className="relative"
                                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {/* Animated background glow */}
                                                        <motion.div
                                                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-20 blur-md`}
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }}
                                                        />

                                                        {/* Icon Container - No Background */}
                                                        <div className="relative w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                                                            {/* Custom Image Icon - Static (no rotation) */}
                                                            <div className="relative z-10 w-full h-full p-2">
                                                                <Image
                                                                    src={info.iconImage}
                                                                    alt={info.title}
                                                                    width={64}
                                                                    height={64}
                                                                    className="object-contain drop-shadow-lg"
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    <div>
                                                        <div className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                                            {info.title}
                                                        </div>
                                                        <a
                                                            href={info.href}
                                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            {/* Bottom border accent line - matches icon gradient */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
                                        </Card>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="glass dark:glass-dark p-6 rounded-xl"
                            >
                                <h3 className="font-semibold mb-4">Let's Connect</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    I'm always interested in hearing about new projects and opportunities.
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm">Available for freelance</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <Card className="border-2">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">
                                                    Name *
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name ...."
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`focus:ring-2 transition-all ${errors.name && touched.name
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'focus:ring-primary'
                                                        }`}
                                                />
                                                {errors.name && touched.name && (
                                                    <p className="text-xs text-red-500">{errors.name}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="text"
                                                    placeholder="Your Email....."
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`focus:ring-2 transition-all ${errors.email && touched.email
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'focus:ring-primary'
                                                        }`}
                                                />
                                                {errors.email && touched.email && (
                                                    <p className="text-xs text-red-500">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">
                                                Subject *
                                            </label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="Project Discussion"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`focus:ring-2 transition-all ${errors.subject && touched.subject
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'focus:ring-primary'
                                                    }`}
                                            />
                                            {errors.subject && touched.subject && (
                                                <p className="text-xs text-red-500">{errors.subject}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">
                                                Message *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Tell me about your project..."
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`focus:ring-2 transition-all resize-none ${errors.message && touched.message
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'focus:ring-primary'
                                                    }`}
                                            />
                                            {errors.message && touched.message && (
                                                <p className="text-xs text-red-500">{errors.message}</p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full group"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
