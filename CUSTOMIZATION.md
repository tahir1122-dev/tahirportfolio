# 🎨 Advanced Customization Guide

This guide covers advanced customization options for your portfolio.

## Table of Contents

1. [Theme Customization](#theme-customization)
2. [Adding New Sections](#adding-new-sections)
3. [Custom Animations](#custom-animations)
4. [SEO Optimization](#seo-optimization)
5. [Adding Blog](#adding-blog)
6. [Form Integration](#form-integration)

---

## Theme Customization

### Custom Color Schemes

Edit `app/globals.css` to create custom color schemes:

```css
:root {
  /* Your custom light theme */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262.1 83.3% 57.8%;      /* Purple */
  --primary-foreground: 210 40% 98%;
  /* ... add more colors */
}

.dark {
  /* Your custom dark theme */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 263.4 70% 50.4%;        /* Darker purple */
  /* ... add more colors */
}
```

### Gradient Customization

Customize gradients in your components:

```typescript
// Example: Change hero gradient
className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
```

### Typography

Change fonts in `app/layout.tsx`:

```typescript
import { Poppins, Roboto } from "next/font/google";

const heading = Poppins({ 
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading"
});

const body = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body"
});
```

Then use in `tailwind.config.ts`:

```typescript
extend: {
  fontFamily: {
    heading: ["var(--font-heading)"],
    body: ["var(--font-body)"],
  }
}
```

---

## Adding New Sections

### Create a New Section Component

1. Create file `components/sections/your-section.tsx`:

```typescript
"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";

export function YourSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionWrapper>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            Your Section Title
          </motion.h2>
          
          {/* Your content here */}
        </SectionWrapper>
      </div>
    </section>
  );
}
```

2. Add to `app/page.tsx`:

```typescript
import { YourSection } from "@/components/sections/your-section";

export default function Home() {
  return (
    <>
      {/* ... other sections */}
      <div id="your-section">
        <YourSection />
      </div>
    </>
  );
}
```

3. Add to navigation in `components/header.tsx`:

```typescript
const navItems = [
  // ... existing items
  { label: "Your Section", href: "#your-section" },
];
```

---

## Custom Animations

### Scroll-triggered Animations

Use `framer-motion` with `useInView`:

```typescript
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimatedComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

### Stagger Animations

Animate lists with stagger effect:

```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects

Add physics-based hover effects:

```typescript
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotate: 2,
    transition: { type: "spring", stiffness: 300 }
  }}
  whileTap={{ scale: 0.95 }}
>
  Interactive element
</motion.div>
```

---

## SEO Optimization

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full-Stack Developer",
  description: "Your custom description here",
  keywords: "Your, Keywords, Here",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your description",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Your description",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};
```

### Add Structured Data

Create `app/schema.json`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full-Stack Developer",
  "url": "https://yourwebsite.com",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
```

### robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourwebsite.com/sitemap.xml
```

---

## Adding Blog

### 1. Create Blog Structure

```
app/
  blog/
    page.tsx              # Blog listing
    [slug]/
      page.tsx            # Individual post
```

### 2. Blog Listing Page

```typescript
// app/blog/page.tsx
export default function BlogPage() {
  const posts = [/* your posts */];
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
```

### 3. Use MDX for Blog Posts

Install dependencies:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Configure in `next.config.mjs`:
```javascript
import createMDX from '@next/mdx'

const withMDX = createMDX()

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
```

---

## Form Integration

### EmailJS Integration

1. Install:
```bash
npm install @emailjs/browser
```

2. Update `components/sections/contact-section.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message');
  }
};
```

### Web3Forms Integration

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: "YOUR_ACCESS_KEY",
      ...formData,
    }),
  });
  
  if (response.ok) {
    alert("Message sent successfully!");
  }
};
```

---

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  priority={false}
  loading="lazy"
/>
```

### Code Splitting

Use dynamic imports:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  loading: () => <p>Loading...</p>,
});
```

### Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

Update `next.config.mjs`:
```javascript
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
```

Run analysis:
```bash
ANALYZE=true npm run build
```

---

## Custom Components

### Create Reusable Components

Example - Animated Counter:

```typescript
// components/animated-counter.tsx
"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}
```

---

## Analytics Integration

### Google Analytics

1. Install:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## Tips & Best Practices

1. **Keep components small** - Single responsibility principle
2. **Use TypeScript** - Leverage type safety
3. **Optimize images** - Use WebP format, proper sizing
4. **Test on devices** - Mobile-first approach
5. **Monitor performance** - Use Lighthouse
6. **Accessibility** - ARIA labels, keyboard navigation
7. **Version control** - Commit regularly with clear messages

---

Need more help? Check the official documentation or create an issue!
