"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Project } from "@/types";
import Image from "next/image";

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

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
                            Featured Projects
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
                            Showcasing innovative solutions and creative implementations
                        </motion.p>

                        {/* Filter Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2 justify-center px-4"
                        >
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={filter === category ? "default" : "outline"}
                                    onClick={() => setFilter(category)}
                                    className="rounded-full text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-10"
                                >
                                    {category}
                                </Button>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full hover:shadow-2xl hover:shadow-primary/10">
                                    <div
                                        className="relative overflow-hidden aspect-video"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <Button variant="secondary" size="sm">
                                                View Details
                                            </Button>
                                        </div>
                                    </div>

                                    <CardContent className="p-4 sm:p-5 md:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <Badge variant="secondary" className="text-xs">
                                                    +{project.tags.length - 3}
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex gap-2">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <Button size="sm" variant="outline" className="w-full">
                                                        <Github className="h-4 w-4 mr-2" />
                                                        Code
                                                    </Button>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                                    <Button size="sm" variant="outline" className="w-full">
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                        Live
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </CardContent>

                                    {/* Bottom border accent - matches section gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-2 border-blue-500/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Blue Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 p-6 flex justify-between items-start">
                            <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSelectedProject(null)}
                                className="text-white hover:bg-white/20 hover:text-white"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        {/* White Body */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)] bg-white dark:bg-gray-800">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {selectedProject.longDescription || selectedProject.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-3 text-lg text-gray-900 dark:text-white">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {selectedProject.githubUrl && (
                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                                            <Github className="h-4 w-4 mr-2" />
                                            View on GitHub
                                        </Button>
                                    </a>
                                )}
                                {selectedProject.liveUrl && (
                                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Visit Live Site
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
