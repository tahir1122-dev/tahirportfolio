# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all necessary packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN UI components
- And more...

## Step 2: Customize Your Data

Open `data/portfolio.ts` and update with your information:

### Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",                    // ✏️ Change this
  title: "Your Professional Title",      // ✏️ Change this
  tagline: "Your tagline",               // ✏️ Change this
  bio: "Your bio...",                    // ✏️ Change this
  email: "your@email.com",               // ✏️ Change this
  // ... update social links
};
```

### Skills
Update the skills in each category (Frontend, Backend, DevOps, AI):
```typescript
{
  category: "Frontend",
  skills: [
    { name: "React", level: 95 },        // ✏️ Update levels
    { name: "TypeScript", level: 90 },   // ✏️ Add/remove skills
  ]
}
```

### Projects
Replace with your own projects:
```typescript
{
  id: "1",
  title: "Your Project Name",            // ✏️ Change this
  description: "Project description",    // ✏️ Change this
  tags: ["React", "Next.js"],           // ✏️ Update tags
  githubUrl: "https://github.com/...",  // ✏️ Add your links
  liveUrl: "https://...",
  featured: true
}
```

### Experience
Add your work experience:
```typescript
{
  company: "Company Name",               // ✏️ Change this
  position: "Your Position",             // ✏️ Change this
  duration: "2023 - Present",           // ✏️ Update dates
  description: ["Achievement 1", "..."], // ✏️ List achievements
  technologies: ["React", "Node.js"]     // ✏️ Tech used
}
```

### Services
Customize the services you offer or delete this section if not needed.

### Testimonials
Add client testimonials or remove this section if not applicable.

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Customize Theme (Optional)

### Colors
Edit `app/globals.css` to change theme colors:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Blue - change this */
  --secondary: 210 40% 96.1%;    /* Change colors */
  /* ... */
}
```

### Fonts
Edit `app/layout.tsx` to change fonts:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

## Step 5: Add Your Images (Optional)

Replace placeholder images in `data/portfolio.ts`:

```typescript
image: "https://your-image-url.com/image.jpg"
// or use local images:
image: "/images/project-1.jpg"  // Place in public/images/
```

## Step 6: Test Everything

1. ✅ Click through all sections
2. ✅ Test forms and interactions
3. ✅ Try the command palette (Cmd/Ctrl + K)
4. ✅ Toggle dark/light mode
5. ✅ Test on mobile (responsive design)

## Step 7: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Step 8: Deploy

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! 🚀

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Deploy! 🚀

## 🎨 Customization Tips

### Remove Sections You Don't Need

Edit `app/page.tsx` and comment out sections:

```typescript
{/* <TestimonialsSection /> */}  // Hide testimonials
{/* <ServicesSection /> */}       // Hide services
```

### Change Animation Speed

Edit animation durations in section components:

```typescript
transition={{ duration: 0.6 }}  // Make faster (0.3) or slower (1.0)
```

### Modify Layout

All sections are in `components/sections/` - edit individual files to customize.

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001  # Use port 3001
```

### Styles not updating?
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Build errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist Before Going Live

- [ ] Updated all personal information
- [ ] Added real projects
- [ ] Tested all links
- [ ] Optimized images
- [ ] Updated meta tags for SEO
- [ ] Tested on mobile devices
- [ ] Checked accessibility
- [ ] Set up analytics (optional)
- [ ] Added custom domain (optional)

## 🎯 Next Steps

1. **SEO**: Update metadata in `app/layout.tsx`
2. **Analytics**: Add Google Analytics or Plausible
3. **Contact Form**: Integrate with email service (EmailJS, SendGrid)
4. **Blog**: Add a blog section (optional)
5. **CMS**: Connect to a headless CMS for easier updates

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [ShadCN UI](https://ui.shadcn.com/)

---

**Need help?** Check the main README.md or open an issue!

Happy building! 🎉
