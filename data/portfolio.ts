import { Project, Experience, Testimonial, Service, SkillCategory, PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Muhammad Tahir",
    title: "Full-Stack Developer & AI Automation Specialist",
    tagline: "Building the future with React, Next.js, and AI",
    bio: "Passionate Full-Stack Developer with expertise in modern web technologies and AI workflow automation. I specialize in building scalable, secure, and high-performance applications using the MERN stack, Next.js, and TypeScript. I focus on clean code architecture, performance optimization, and intuitive user experiences. I also work with AI-driven solutions like automation workflows, RAG-based systems, and intelligent integrations to create smart, future-ready digital products. Always learning, experimenting, and pushing the boundaries of modern web and AI development.",
    email: "tm0038763@gmail.com",
    phone: "03075530466",
    location: "Lahore, Johar Town",
    availability: "Available for freelance projects",
    social: {
        github: "https://github.com/tahir1122-dev",
        linkedin: "https://www.linkedin.com/in/tahir-full-stack/",
        twitter: "https://twitter.com/tahir4404",
        email: "mailto:Tm0038763@gmail.com"
    }
};


export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        description: "Crafting pixel-perfect, responsive interfaces with modern frameworks. I build fast, accessible UIs that users love to interact with.",
        skills: [
            { name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Tailwind CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Redux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
            { name: "Framer Motion", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
        ]
    },
    {
        category: "Backend",
        description: "Building robust, scalable server-side architectures and APIs. From RESTful services to GraphQL endpoints, I design systems that perform under pressure.",
        skills: [
            { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "NestJS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
            { name: "Express", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "MongoDB", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "GraphQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
        ]
    },
    {
        category: "DevOps & Tools",
        description: "Streamlining development workflows with containerization, cloud infrastructure, and CI/CD pipelines for seamless deployment and delivery.",
        skills: [
            { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Docker", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "AWS", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "CI/CD", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
            { name: "Vercel", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
            { name: "Linux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        ]
    },
    {
        category: "AI & Automation",
        description: "Leveraging cutting-edge AI models and automation frameworks to build intelligent, self-operating systems that solve real-world problems.",
        skills: [
            { name: "OpenAI API", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openal/openal-original.svg" },
            { name: "LangChain", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Python", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "AI Workflows", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
            { name: "Automation", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
            { name: "RAG Systems", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        ]
    }
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Tahir Temps Weather App",
        description: "Intelligent financial companion with AI-driven insights, voice message processing, and automated PDF generation. Features real-time data analysis and multi-platform authentication.",
        longDescription: "Intelligent financial companion with AI-driven insights, voice message processing, and automated PDF generation. Features real-time data analysis and multi-platform authentication. Built with a robust backend stack including Express, MongoDB, and OpenAI API integration.",
        image: "/assests/weatherapp.png",
        tags: ["Express", "MongoDB", "OpenAI API", "AWS SES", "AWS S3", "Node Mailer", "Puppeteer", "EC2"],
        category: "AI & Weather",
        githubUrl: "https://github.com/tahir1122-dev/financial-app",
        liveUrl: "https://weatherbytahir.netlify.app/",
        featured: true
    },
    {
        id: "2",
        title: "Streaming App WanoFlix",
        description: "Full-stack streaming platform with real-time chat, user authentication, and video playback features. Built with a microservices architecture for scalability.",
        longDescription: "Full-stack streaming platform with real-time chat, user authentication, and video playback features. Built with a microservices architecture for scalability. Leverages NextJS, NestJS, and MySQL for a robust full-stack experience.",
        image: "/assests/wanoflix.png",
        tags: ["NextJS", "Tailwind CSS", "NestJS", "TypeScript", "MySQL", "AWS S3", "Google Maps"],
        category: "Web Application",
        githubUrl: undefined,
        liveUrl: "https://wano-flix.netlify.app/",
        featured: true
    },
    {
        id: "3",
        title: "LMS - Learning Management System",
        description: "Comprehensive learning management system with course creation, user management, and progress tracking. Built for educational institutions.",
        longDescription: "Comprehensive learning management system with course creation, user management, and progress tracking. Built for educational institutions. Features include course materials, interactive calendars, and rich text editing.",
        image: "/assests/aqkhan.png",
        tags: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
        category: "Learning Management",
        githubUrl: "https://github.com/tahir1122-dev/newsroom-management",
        liveUrl: "https://aqkha4444.netlify.app/",
        featured: true
    },
    {
        id: "4",
        title: "SmartSolo - AI Task Automation",
        description: "An AI-powered tool that automates your daily tasks using intelligent workflows. Built with Node.js backend and Next.js frontend, powered by OpenAI LLMs.",
        longDescription: "SmartSolo is an AI-powered automation platform that streamlines your daily tasks through intelligent workflows. It leverages OpenAI's large language models to understand, plan, and execute complex tasks automatically. Built with a robust Node.js backend and a sleek Next.js frontend for a seamless user experience.",
        image: "/assests/SmartSolo.png",
        tags: ["Next.js", "Node.js", "OpenAI API", "TypeScript", "AI Automation", "LLM"],
        category: "AI & Automation",
        githubUrl: undefined,
        liveUrl: "https://www.smartsolo.ai/",
        featured: true
    },
    {
        id: "5",
        title: "LexProbe - Competitive Intelligence",
        description: "A competitive intelligence platform that investigates and compares companies — analyzing their pricing, strategies, and overall market positioning.",
        longDescription: "LexProbe is a competitive intelligence platform designed to investigate and compare companies side-by-side. It provides deep analysis of pricing structures, business strategies, market positioning, and overall company performance, helping businesses make data-driven decisions against their competitors.",
        image: "/assests/lexprobw.png",
        tags: ["Next.js", "Node.js", "TypeScript", "Data Analysis", "Web Scraping"],
        category: "Web Application",
        githubUrl: undefined,
        liveUrl: "https://www.lexprobe.com/",
        featured: true
    },
    {
        id: "6",
        title: "SmartPenTest AI - Penetration Testing",
        description: "AI-powered penetration testing platform that identifies vulnerabilities before hackers do. Simulates real-world attacks to test and strengthen your website defenses.",
        longDescription: "SmartPenTest AI is a cybersecurity platform focused on ethical hacking and penetration testing. It identifies vulnerabilities in websites and applications by simulating real-world attacks, helping organizations test and strengthen their defenses. The platform provides comprehensive security assessments, privacy audits, and actionable remediation reports.",
        image: "/assests/smartPenAi.png",
        tags: ["Next.js", "AI", "Cybersecurity", "Penetration Testing", "Node.js", "TypeScript"],
        category: "AI & Cybersecurity",
        githubUrl: undefined,
        liveUrl: "https://smartpentrestai.netlify.app/",
        featured: true
    }
];


export const experiences: Experience[] = [
    {
        id: "1",
        company: "Wanological Solutions",
        position: "Full Stack Developer",
        duration: "April 2023 - Present",
        location: "Lahore, Johar Town",
        description: [
            "Working as a Full Stack Developer using the MERN Stack to build scalable web applications",
            "Contributing to multiple projects including exciting game and platform development with Wano Game Studio",
            "Designing full-stack solutions with modern JavaScript/TypeScript frameworks",
            "Collaborating on game development and UI/UX enhancements for Wano Game Studio",
            "Building reusable components and optimizing performance across platforms"
        ],
        technologies: ["React.js", "Node.js", "Next.js", "NestJS", "MongoDB", "MySQL", "PostgreSQL", "TypeScript", "Tailwind CSS", "Bootstrap", "Figma"]
    },
    {
        id: "2",
        company: "Wano Game Studio",
        position: "Back End Developer",
        duration: "July 2025 - Present",
        location: "Lahore, Johar Town, Pakistan",
        description: [
            "Working on backend development for game and platform projects using the MERN Stack",
            "Designing full-stack solutions with modern JavaScript/TypeScript frameworks",
            "Collaborating on game development and UI/UX enhancements",
            "Building reusable components and optimizing performance across platforms",
            "Contributing to scalable web applications and game infrastructure"
        ],
        technologies: ["React.js", "Node.js", "Next.js", "NestJS", "MongoDB", "MySQL", "PostgreSQL", "TypeScript", "Tailwind CSS", "Bootstrap"]
    }
];

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        position: "CTO",
        company: "Tech Innovations Inc",
        content: "Tahir's expertise in modern web technologies and AI automation has been instrumental in our product's success. His ability to architect scalable solutions while maintaining clean code is exceptional.",
        rating: 5
    },
    {
        id: "2",
        name: "Michael Chen",
        position: "Product Manager",
        company: "Digital Solutions Co",
        content: "Working with Tahir was a game-changer for our project. He delivered high-quality code on time and was always proactive in suggesting improvements. Highly recommended!",
        rating: 5
    },
    {
        id: "3",
        name: "Emily Rodriguez",
        position: "Founder",
        company: "StartUp Labs",
        content: "Tahir brings both technical excellence and great communication skills. He transformed our ideas into beautiful, functional applications that exceeded our expectations.",
        rating: 5
    }
];

export const services: Service[] = [
    {
        id: "1",
        title: "Full-Stack Web Development",
        description: "End-to-end web applications built with modern MERN stack and Next.js for optimal performance",
        icon: "Code2",
        features: [
            "React & Next.js development",
            "Node.js & Express backend",
            "MongoDB & PostgreSQL databases",
            "Responsive UI with Tailwind CSS"
        ]
    },
    {
        id: "2",
        title: "AI Integration & Automation",
        description: "Integrate cutting-edge AI capabilities and automate complex business workflows",
        icon: "Sparkles",
        features: [
            "OpenAI & GPT integration",
            "Custom AI chatbots",
            "LangChain & RAG systems",
            "Intelligent process automation"
        ]
    },
    {
        id: "3",
        title: "RESTful & GraphQL APIs",
        description: "Scalable backend solutions with robust API architecture and security",
        icon: "Database",
        features: [
            "RESTful API design & development",
            "GraphQL implementation",
            "Database optimization",
            "JWT & OAuth authentication"
        ]
    },
    {
        id: "4",
        title: "Cloud Deployment & DevOps",
        description: "Deploy and manage applications on AWS with CI/CD pipelines and containerization",
        icon: "Cloud",
        features: [
            "AWS EC2, S3 & Lambda setup",
            "Docker containerization",
            "CI/CD with GitHub Actions",
            "Performance monitoring"
        ]
    },
    {
        id: "5",
        title: "E-Commerce Solutions",
        description: "Complete online store development with payment integration and inventory management",
        icon: "ShoppingCart",
        features: [
            "Product catalog & cart systems",
            "Stripe & PayPal integration",
            "Admin dashboards",
            "Order & inventory tracking"
        ]
    },
    {
        id: "6",
        title: "Technical Consulting & Code Review",
        description: "Expert guidance on architecture, best practices, and performance optimization",
        icon: "Lightbulb",
        features: [
            "Architecture & tech stack review",
            "Code quality audit",
            "Performance optimization strategies",
            "Team training & mentoring"
        ]
    }
];
