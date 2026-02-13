# GitHub Stats Section - Setup Guide

## 🚀 Installation

Follow these steps to add the futuristic GitHub Stats section to your portfolio:

### 1. Install Required Package

```bash
npm install react-github-calendar
```

### 2. Update Your GitHub Username

Open `lib/github.ts` and replace `'YOUR_GITHUB_USERNAME'` with your actual GitHub username:

```typescript
const GITHUB_USERNAME = 'your-actual-username'; // e.g., 'octocat'
```

### 3. Files Created

The following files have been created:

- ✅ `components/sections/github-stats-section.tsx` - Main GitHub stats component
- ✅ `lib/github.ts` - GitHub API helper functions
- ✅ `app/globals.css` - Updated with GitHub calendar styles
- ✅ `app/page.tsx` - Updated to include the GitHub section

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your new GitHub Stats section!

## 🎨 Features Included

### ✨ Premium UI Components

1. **Stats Cards** - Glassmorphism cards showing:
   - Total Repositories
   - Total Stars
   - Total Forks
   - Followers Count

2. **GitHub Contribution Calendar** - Interactive heatmap:
   - Shows 1 year of activity
   - Color-coded contribution levels
   - Responsive and scrollable

3. **Top Languages Chart** - Animated progress bars:
   - Top 5 programming languages
   - Percentage visualization
   - Gradient animations

4. **Top Repositories** - Interactive cards:
   - Top 6 starred repositories
   - Stars and language info
   - Click to open on GitHub

### 🎯 Design Features

- **Cyberpunk Grid Background** - Animated grid pattern
- **Neon Glow Effects** - Pulsing cyan and purple glows
- **Glassmorphism Cards** - Frosted glass effect
- **Smooth Animations** - Framer Motion scroll reveals
- **Responsive Design** - Mobile-first approach
- **Dark Futuristic Theme** - Matches 2026 aesthetic

## 🔧 Customization

### Change Colors

Edit the gradient colors in `github-stats-section.tsx`:

```typescript
const statsCards = [
  {
    gradient: "from-cyan-500 to-blue-500",  // Change these
    glow: "cyan"
  }
]
```

### Adjust Card Count

Show more/fewer repositories:

```typescript
.slice(0, 6); // Change number here
```

### Modify Stats

Add custom stats in the `statsCards` array in `github-stats-section.tsx`.

## 📊 GitHub API Notes

### Current Implementation

- ✅ Uses GitHub REST API (no authentication required)
- ✅ Fetches public user data
- ✅ Gets repository information
- ✅ Calculates language statistics
- ✅ Shows contribution calendar

### Rate Limits

- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 5,000 requests/hour

### For Production (Optional)

To get more accurate contribution data and higher rate limits, you can:

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - Select `public_repo` scope
   - Copy the token

2. Add to `.env.local`:
   ```bash
   GITHUB_TOKEN=your_token_here
   ```

3. Update `lib/github.ts` to use the token:
   ```typescript
   headers: {
     'Accept': 'application/vnd.github.v3+json',
     'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
   }
   ```

## 🎬 Animation Timings

Adjust animation speeds in the component:

```typescript
// Card entrance delay
transition={{ delay: index * 0.1 }}

// Progress bar animation
transition={{ delay: index * 0.1, duration: 1 }}

// Glow pulse effect
transition={{ duration: 2, repeat: Infinity }}
```

## 📱 Mobile Optimization

The section is fully responsive with:
- Stacked cards on mobile
- Horizontal scrolling for calendar
- Optimized font sizes
- Touch-friendly interactions

## 🔍 SEO Benefits

- Uses semantic HTML
- Proper heading hierarchy
- Alt texts where needed
- Fast loading with Next.js optimization

## 🎨 Color Palette Used

```css
Background: #0D1117
Grid Lines: rgba(0, 245, 255, 0.03)
Primary Neon: #00F5FF (Cyan)
Secondary Neon: #7F00FF (Purple)
Accent: #39d353 (Green - for contributions)
```

## 🚨 Troubleshooting

### Calendar Not Showing

Make sure you:
1. Installed `react-github-calendar`
2. Updated your GitHub username
3. Have public contributions on GitHub

### API Rate Limit Error

If you hit the rate limit:
1. Add authentication token (see above)
2. Or increase cache time in `lib/github.ts`:
   ```typescript
   next: { revalidate: 7200 } // 2 hours
   ```

### Styling Issues

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 🎯 Performance

- **First Load**: ~2-3s (API fetch)
- **Cached**: Instant
- **Revalidation**: Every 1 hour
- **Bundle Size**: +15KB (react-github-calendar)

## 📝 Next Steps

1. Replace the GitHub username in `lib/github.ts`
2. Run `npm install react-github-calendar`
3. Test locally with `npm run dev`
4. Deploy to production!

## 🌟 Pro Tips

1. **Add Custom Stats**: Extend `statsCards` array with custom metrics
2. **Theme Variants**: Create light/dark mode variants
3. **More Charts**: Add Recharts for advanced visualizations
4. **Live Updates**: Use SWR or React Query for real-time updates
5. **Animations**: Customize Framer Motion variants for unique effects

## 📚 Resources

- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

Enjoy your new futuristic GitHub Stats section! 🚀
