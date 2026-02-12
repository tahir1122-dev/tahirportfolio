# 📂 Project Structure

Complete overview of the portfolio project structure and file organization.

## Directory Tree

```
tahir-pf/
│
├── 📁 app/                          # Next.js App Router
│   ├── globals.css                  # Global styles, Tailwind directives
│   ├── layout.tsx                   # Root layout with providers
│   ├── page.tsx                     # Homepage with all sections
│   └── favicon.ico                  # Site favicon
│
├── 📁 components/                   # React components
│   │
│   ├── 📁 sections/                 # Main page sections
│   │   ├── hero-section.tsx         # Hero with animated text
│   │   ├── about-section.tsx        # About me section
│   │   ├── tech-stack-section.tsx   # Skills with progress bars
│   │   ├── projects-section.tsx     # Projects grid with modal
│   │   ├── experience-section.tsx   # Timeline of experience
│   │   ├── services-section.tsx     # Services offered
│   │   ├── testimonials-section.tsx # Client testimonials
│   │   ├── contact-section.tsx      # Contact form
│   │   └── footer.tsx               # Site footer
│   │
│   ├── 📁 ui/                       # Reusable UI components (ShadCN)
│   │   ├── button.tsx               # Button component
│   │   ├── card.tsx                 # Card components
│   │   ├── input.tsx                # Input component
│   │   ├── textarea.tsx             # Textarea component
│   │   └── badge.tsx                # Badge component
│   │
│   ├── header.tsx                   # Navigation header
│   ├── theme-toggle.tsx             # Dark/Light mode switcher
│   ├── scroll-progress.tsx          # Scroll progress indicator
│   ├── cursor-glow.tsx              # Custom cursor glow effect
│   ├── loading-screen.tsx           # Initial loading animation
│   ├── section-wrapper.tsx          # Scroll reveal wrapper
│   └── command-palette.tsx          # VS Code style command menu
│
├── 📁 data/                         # Data and content
│   └── portfolio.ts                 # All portfolio data
│       ├── personalInfo             # Personal details
│       ├── skillCategories          # Skills by category
│       ├── projects                 # Project portfolio
│       ├── experiences              # Work history
│       ├── testimonials             # Client reviews
│       └── services                 # Services offered
│
├── 📁 types/                        # TypeScript types
│   └── index.ts                     # Type definitions
│       ├── Project                  # Project type
│       ├── Experience               # Experience type
│       ├── Testimonial              # Testimonial type
│       ├── Service                  # Service type
│       ├── Skill                    # Skill type
│       └── SkillCategory            # Skill category type
│
├── 📁 lib/                          # Utility functions
│   └── utils.ts                     # Helper functions (cn, etc.)
│
├── 📁 public/                       # Static assets
│   ├── images/                      # Images (add your own)
│   ├── favicon.ico                  # Site icon
│   └── robots.txt                   # SEO robots file
│
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 components.json               # ShadCN configuration
├── 📄 package.json                  # Dependencies and scripts
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 .env.example                  # Environment variables template
│
├── 📄 README.md                     # Main documentation
├── 📄 QUICKSTART.md                 # Quick start guide
├── 📄 CUSTOMIZATION.md              # Customization guide
└── 📄 STRUCTURE.md                  # This file
```

---

## Component Architecture

### Page Structure Flow

```
app/page.tsx (Main Page)
  ↓
  ├── LoadingScreen          (Initial loading animation)
  ├── ScrollProgress         (Top progress bar)
  ├── CursorGlow             (Cursor effect)
  ├── CommandPalette         (Cmd+K menu)
  │
  ├── Header                 (Navigation)
  │
  ├── Main Content
  │   ├── HeroSection
  │   ├── AboutSection
  │   ├── TechStackSection
  │   ├── ProjectsSection
  │   ├── ExperienceSection
  │   ├── ServicesSection
  │   ├── TestimonialsSection
  │   └── ContactSection
  │
  └── Footer
```

### Component Hierarchy

```
RootLayout (app/layout.tsx)
  └── ThemeProvider
      └── Page Component (app/page.tsx)
          ├── Global Effects (Loading, Scroll, Cursor, Command)
          ├── Header (Fixed navigation)
          ├── Main Sections (All page sections)
          └── Footer
```

---

## Data Flow

```
data/portfolio.ts
  ↓ (exported data)
  ↓
Section Components
  ↓ (rendered with)
  ↓
UI Components
  └── Styled with Tailwind CSS
      └── Animated with Framer Motion
```

---

## Key Files Explained

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind theme and plugins |
| `next.config.mjs` | Next.js build configuration |
| `components.json` | ShadCN UI configuration |

### Core Application Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, providers |
| `app/page.tsx` | Main homepage |
| `app/globals.css` | Global styles and CSS variables |

### Data Files

| File | Purpose |
|------|---------|
| `data/portfolio.ts` | All customizable content |
| `types/index.ts` | TypeScript type definitions |

---

## Styling System

### CSS Organization

```
app/globals.css
  ├── Tailwind Directives (@tailwind)
  ├── CSS Variables (:root, .dark)
  ├── Base Styles (@layer base)
  ├── Utility Classes (@layer utilities)
  └── Custom Animations (@keyframes)
```

### Theme Variables

Located in `app/globals.css`:

```css
:root {
  --background: ...        /* Background color */
  --foreground: ...        /* Text color */
  --primary: ...           /* Primary brand color */
  --secondary: ...         /* Secondary color */
  --muted: ...             /* Muted/subtle color */
  --accent: ...            /* Accent color */
  --border: ...            /* Border color */
  --radius: ...            /* Border radius */
}
```

---

## Component Patterns

### Section Component Pattern

Every section follows this pattern:

```typescript
"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";

export function YourSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionWrapper>
          {/* Section Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Section Title
          </motion.h2>
          
          {/* Section Content */}
          <div className="grid ...">
            {/* Content here */}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
```

### UI Component Pattern

UI components in `components/ui/`:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ComponentProps 
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(/* classes */, className)}
        {...props}
      />
    );
  }
);

Component.displayName = "Component";

export { Component };
```

---

## Animation System

### Framer Motion Variants

Common animation patterns:

```typescript
// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale on hover
const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};
```

---

## Responsive Design

### Breakpoints (Tailwind)

```css
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large */
2xl: 1536px  /* 2X large */
```

### Usage Pattern

```typescript
<div className="
  grid 
  grid-cols-1      /* Mobile: 1 column */
  md:grid-cols-2   /* Tablet: 2 columns */
  lg:grid-cols-3   /* Desktop: 3 columns */
  gap-6
">
```

---

## Build & Development

### Development Mode

```bash
npm run dev
# Runs on http://localhost:3000
# Hot reload enabled
# Fast Refresh for instant updates
```

### Production Build

```bash
npm run build
# - Optimizes and minifies code
# - Generates static pages
# - Creates .next/ directory
```

### Production Server

```bash
npm start
# Serves production build
# Runs on http://localhost:3000
```

---

## Dependencies Overview

### Core Dependencies

- **next**: React framework
- **react**: UI library
- **typescript**: Type safety
- **tailwindcss**: Utility-first CSS

### UI & Styling

- **framer-motion**: Animations
- **lucide-react**: Icons
- **tailwind-merge**: Class merging
- **class-variance-authority**: Component variants

### Utilities

- **next-themes**: Theme switching
- **react-intersection-observer**: Scroll detection
- **react-hook-form**: Form handling
- **zod**: Schema validation

---

## File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- **Types**: `PascalCase` (e.g., `Project`, `Experience`)
- **Functions**: `camelCase` (e.g., `handleSubmit`)
- **Constants**: `UPPER_SNAKE_CASE` or `camelCase`
- **CSS Classes**: `kebab-case` (e.g., `section-wrapper`)

---

## Best Practices

1. **Keep components focused** - One responsibility per component
2. **Use TypeScript types** - Leverage type safety
3. **Follow naming conventions** - Consistent naming
4. **Comment complex logic** - Make code self-documenting
5. **Use semantic HTML** - Accessibility first
6. **Optimize images** - Use Next.js Image component
7. **Lazy load** - Dynamic imports for heavy components

---

## Adding New Features

### Checklist for New Sections

- [ ] Create component in `components/sections/`
- [ ] Add data type to `types/index.ts`
- [ ] Add data to `data/portfolio.ts`
- [ ] Import in `app/page.tsx`
- [ ] Add navigation link to `components/header.tsx`
- [ ] Add to command palette (optional)
- [ ] Test responsiveness
- [ ] Test animations
- [ ] Document changes

---

This structure ensures **scalability**, **maintainability**, and **developer experience**.

For more details, see:
- [README.md](README.md) - General overview
- [QUICKSTART.md](QUICKSTART.md) - Getting started
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Advanced customization
