# Ritesh Gupta - Developer Portfolio

A premium, modern developer portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Features a stunning glassmorphism design inspired by Apple's VisionOS aesthetic.

## 🎨 Design Features

- **Glassmorphism UI**: Frosted glass effect with backdrop blur, soft borders, and subtle shadows
- **Dark Mode**: Beautiful dark theme with gradient backgrounds and animated effects
- **Smooth Animations**: Framer Motion animations for scroll reveals and micro interactions
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Performance Optimized**: Lazy loading, optimized images, and efficient code splitting

## 🚀 Tech Stack

- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons
- **Vite** - Lightning-fast build tool

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.tsx       # Glass button with hover effects
│   ├── GlassCard.tsx    # Frosted glass card component
│   ├── Badge.tsx        # Skill/tag badge component
│   ├── SectionTitle.tsx # Section heading component
│   ├── FloatingOrb.tsx  # Animated background orb
│   └── index.ts         # Component exports
├── sections/            # Page sections
│   ├── HeroSection.tsx       # Hero with CTA buttons
│   ├── AboutSection.tsx      # About with stats
│   ├── ExperienceSection.tsx # Timeline experience
│   ├── SkillsSection.tsx     # Skills grid
│   ├── ProjectsSection.tsx   # Featured projects
│   ├── CertificationsSection.tsx # Certifications
│   ├── ContactSection.tsx    # Contact form
│   ├── FooterSection.tsx     # Footer
│   └── index.ts         # Section exports
├── data/                # Data files
│   └── portfolio.ts     # Portfolio content & Google Forms API
├── utils/               # Utility functions
│   └── animations.ts    # Framer Motion variants
├── App.tsx             # Main app component
├── main.tsx            # React entry point
├── index.css           # Global styles

```

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Configuration

### Update Portfolio Content

Edit `src/data/portfolio.ts` to update:
- Your name, title, and bio
- Experience entries
- Projects and achievements
- Skills by category
- Certifications
- Contact information

### Google Forms Integration

The contact form is pre-configured to submit to your Google Form. The API endpoints and field mappings are in `src/data/portfolio.ts`:

```typescript
contact: {
  formAction: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGrY5LEil8j2GtPS4d3WFt0LyvJnszIUlIzSbOUtkgS4fI2g/formResponse",
  fields: {
    name: "entry.362478081",
    email: "entry.1184204116",
    subject: "entry.1722462727",
    message: "entry.1787664102",
  },
}
```

These field IDs are mapped directly from your Google Form question IDs.

## 🎯 Components

### Button
Versatile glass button with three variants:
- `primary`: Solid glass with hover glow
- `secondary`: Outlined glass
- `dark`: Dark background glass

```tsx
<Button variant="primary" icon={<ArrowRight />}>
  View Work
</Button>
```

### GlassCard
Frosted glass card with optional hover effects:

```tsx
<GlassCard hover={true}>
  Content here
</GlassCard>
```

### Badge
Skill chips with multiple styles:

```tsx
<Badge variant="glow">React</Badge>
```

### FloatingOrb
Animated background elements:

```tsx
<FloatingOrb 
  color="from-blue-600/30 to-cyan-600/20" 
  size={300}
  duration={8}
/>
```

## 🎬 Animations

Pre-configured Framer Motion variants in `src/utils/animations.ts`:

- `fadeInUp`: Fade in with upward movement
- `scaleIn`: Scale animation
- `slideInLeft/Right`: Slide animations
- `containerVariants`: Stagger container for children
- `floatingAnimation`: Continuous floating motion
- `glowAnimation`: Continuous glow effect

## 🎨 Tailwind Configuration

Custom theme extensions in `tailwind.config.js`:
- Custom colors and gradients
- Animation keyframes
- Box shadow utilities
- Backdrop blur extensions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements

## 🔍 SEO

- Meta tags for social sharing
- Semantic HTML
- Open Graph tags
- Proper heading hierarchy

## ⚡ Performance

- Lazy loading with Framer Motion's `whileInView`
- Image optimization (using external CDN links)
- Code splitting at route level
- Minimal JavaScript bundle
- CSS-in-JS optimization

## 🌈 Color Scheme

- **Background**: Pure black (#000000) with gradient overlays
- **Glass**: White with 10-20% opacity
- **Text**: White with varying opacity for hierarchy
- **Accents**: Blue/Purple gradients
- **Borders**: White 20% opacity

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Other Platforms

```bash
npm run build
# Deploy the `dist` folder
```

### Environment Variables

No environment variables required for development. The Google Forms endpoint is public and uses CORS bypass via `mode: 'no-cors'`.

## 📊 Performance Targets

- Lighthouse Score: 90+
- Core Web Vitals: Excellent
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to use this template for your own portfolio. Customizations and improvements are welcome!

## 📞 Support

For questions or issues, please open an issue on GitHub or reach out through the contact form.

---

**Built with ❤️ by Ritesh Gupta**
    ...reactDom.configs.recommended.rules,
  },
})
```
