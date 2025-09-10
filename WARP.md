# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for M S Deenu Ramenjes, featuring advanced animations and a modern design. The project showcases full-stack development skills with smooth scroll animations, orbital effects, and responsive design.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Testing Individual Components
Since this is a portfolio site without formal tests, test components by:
- Running `npm run dev` and navigating to specific sections using anchor links (#home, #projects, #contact)
- Check animations by scrolling through the page
- Test responsive behavior by resizing browser window or using dev tools

## Architecture & Structure

### Core Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for scroll-triggered reveals
- **Font System**: Inter (sans-serif) + Calistoga (serif) from Google Fonts
- **Asset Handling**: Custom SVG loader configuration via @svgr/webpack

### Key Design Patterns

#### Animation System
The site uses a layered animation approach:
1. **Loading Screen**: Initial page load with progress indicator
2. **Scroll Reveals**: `RevealOnScroll` component wraps sections for staggered animations
3. **Orbital Animations**: `HeroOrbit` component creates complex orbital motions in hero section
4. **Custom Keyframes**: Defined in `tailwind.config.ts` for ping-large, move-left, move-right

#### Component Architecture
```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with fonts and global styles
│   ├── page.tsx        # Main page composition
│   └── globals.css     # Global styles and custom utility classes
├── components/         # Reusable UI components
│   ├── RevealOnScroll.tsx    # Framer Motion scroll animations
│   ├── HeroOrbit.tsx         # Orbital animation container
│   ├── LoadingScreen.tsx     # Initial loading experience
│   └── [Other UI components]
├── sections/           # Page sections (Header, Hero, Projects, etc.)
└── assets/            # Static assets (images, icons)
```

#### Styling System
- **Custom Tailwind Classes**: Defined in `globals.css` (`.nav-item`, `.hero-ring`)
- **Dynamic Styling**: Uses `twMerge` for conditional class application
- **Custom Animations**: Extended Tailwind config with orbital and movement animations
- **Responsive Design**: Mobile-first approach with custom breakpoints (sm: 375px, md: 768px, lg: 1200px)

### Important Implementation Details

#### SVG Handling
The project uses a custom webpack configuration to handle SVGs as both components and URLs:
- Import as component: `import StarIcon from "@/assets/icons/star.svg"`
- Import as URL: `import starUrl from "@/assets/icons/star.svg?url"`

#### Animation Performance
- **Scroll Animations**: Use `whileInView` with `viewport={{ once: true, amount: 0.2 }}`
- **Orbital Animations**: CSS transforms with GPU acceleration
- **Loading States**: Managed with React state to prevent layout shifts

#### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Development Guidelines

### Component Development
- Wrap new sections with `RevealOnScroll` for consistency
- Use `twMerge` for conditional styling
- Follow the existing pattern of section-based architecture

### Animation Development
- Test animations at different scroll speeds and viewport sizes
- Ensure `once: true` is used for scroll triggers to prevent re-triggering
- Consider performance impact of complex orbital animations

### Styling Guidelines
- Use Tailwind utility classes primarily
- Custom CSS should go in `globals.css` with appropriate layer
- Maintain the existing color scheme (emerald/sky gradients, gray backgrounds)
- Follow mobile-first responsive design patterns

### Asset Management
- Icons go in `src/assets/icons/` as SVG files
- Images go in `src/assets/images/`
- Use Next.js `Image` component for optimized loading

### Portfolio Content Updates
Project data is stored in `src/sections/Projects.tsx` as a static array. To update:
1. Modify the `portfolioProjects` array
2. Ensure image assets are available
3. Update links and descriptions as needed

## Common Development Patterns

### Adding New Sections
1. Create component in `src/sections/`
2. Wrap with `RevealOnScroll`
3. Add to main page composition in `src/app/page.tsx`
4. Add navigation anchor if needed

### Creating Animated Components
```tsx
import RevealOnScroll from "@/components/RevealOnScroll";

export const MySection = () => (
  <RevealOnScroll direction="up" delay={0.2}>
    <section>
      {/* content */}
    </section>
  </RevealOnScroll>
);
```

### Performance Considerations
- The orbital animations in Hero section are performance-intensive
- Loading screen prevents flash of unstyled content
- Animations use `will-change` CSS property through Tailwind classes
- Consider reducing animation complexity on mobile devices
