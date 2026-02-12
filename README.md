# 🚀 Premium Portfolio Website

A modern, visually stunning, production-ready personal portfolio website built with the latest web technologies. This portfolio features a futuristic AI-inspired design with smooth animations, glassmorphism effects, and a premium SaaS aesthetic.

## ✨ Features

### Design & UX
- 🎨 **AI-inspired futuristic aesthetic** with glassmorphism and soft gradients
- 🌓 **Dark/Light mode** with smooth transitions
- ✨ **Smooth animations** powered by Framer Motion
- 🎯 **Fully responsive** design for all devices
- ♿ **Accessible** (ARIA compliant)
- 🎭 **Cursor glow effect** for enhanced interactivity
- 📊 **Scroll progress indicator**

### Sections
- 🏠 **Hero Section** - Animated headline with rotating roles
- 👤 **About Section** - Professional summary and highlights
- 💻 **Tech Stack Section** - Categorized skills with animated progress bars
- 🎯 **Projects Section** - Interactive project cards with modal previews
- 📈 **Experience Timeline** - Animated vertical timeline
- 🛠️ **Services Section** - Beautiful service cards with hover effects
- 💬 **Testimonials Section** - Sliding carousel with ratings
- 📧 **Contact Section** - Beautiful form with validation
- 🔗 **Footer** - Elegant with social links and quick navigation

### Technical Features
- ⚡ **Optimized performance** - Lazy loading and code splitting
- 🔍 **SEO optimized** - Meta tags and semantic HTML
- ⌨️ **Command Palette** - VS Code-style command menu (Cmd/Ctrl + K)
- 🎬 **Smooth scrolling** and section animations
- 🔄 **Page transitions** and micro-interactions
- 📦 **Component-based architecture** for scalability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **Form Handling**: React Hook Form + Zod

## 📁 Project Structure

```
tahir-pf/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Main homepage
├── components/
│   ├── sections/             # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── services-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   ├── ui/                   # Reusable UI components (ShadCN)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── badge.tsx
│   ├── header.tsx            # Navigation header
│   ├── theme-toggle.tsx      # Dark/Light mode toggle
│   ├── scroll-progress.tsx   # Scroll progress bar
│   ├── cursor-glow.tsx       # Cursor glow effect
│   ├── loading-screen.tsx    # Initial loading animation
│   ├── section-wrapper.tsx   # Scroll reveal animations
│   └── command-palette.tsx   # Command menu
├── data/
│   └── portfolio.ts          # All portfolio data (customizable!)
├── types/
│   └── index.ts              # TypeScript type definitions
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to the project directory**
   ```bash
   cd "c:\Users\M Tahir\OneDrive\Desktop\tahir-pf"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information

Edit `data/portfolio.ts` to update:
- Personal details (name, title, bio)
- Social media links
- Contact information

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... more fields
};
```

### 2. Skills

Update the `skillCategories` array in `data/portfolio.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      // Add your skills
    ]
  },
  // Add more categories
];
```

### 3. Projects

Modify the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description",
    // ... more fields
  },
];
```

### 4. Experience

Update the `experiences` array with your work history.

### 5. Services

Customize the `services` array with your offerings.

### 6. Testimonials

Add client testimonials to the `testimonials` array.

### 7. Theme Colors

Modify colors in `app/globals.css` and `tailwind.config.ts`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* Customize colors */
}
```

## 📦 Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Any Node.js hosting

## ⌨️ Keyboard Shortcuts

- `Cmd/Ctrl + K` - Open command palette
- `ESC` - Close modals/command palette

## 🎯 Performance Optimizations

- ⚡ Next.js automatic code splitting
- 🖼️ Image optimization with Next.js Image
- 📦 Component lazy loading
- 🔄 Efficient re-rendering with React best practices
- 💨 Optimized animations with Framer Motion
- 📊 Minimal bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Acknowledgments

- ShadCN UI for beautiful components
- Framer Motion for smooth animations
- Next.js team for an amazing framework
- Tailwind CSS for utility-first styling

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

Built with ❤️ and lots of coffee ☕

**Happy Coding! 🚀**
