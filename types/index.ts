export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar?: string;
    rating: number;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface Skill {
    name: string;
    level: number;
    icon?: string;
}

export interface SkillCategory {
    category: string;
    description?: string;
    skills: Skill[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
        email: string;
        upwork: string;
    };
}
