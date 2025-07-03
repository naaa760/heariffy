# Heariffy Landing Page

A modern, animated landing page for Heariffy - an AI-powered audio analysis platform. Built with Next.js, featuring stunning visual effects, responsive design, and seamless user authentication.

## 🎯 Features

### Visual Effects & Animations

- **Video Background**: Immersive background video with snowfall overlay
- **Animated Frequency Bars**: Real-time audio visualizer-style bars that pulse and animate
- **Dual Snowfall Effects**: White snow on dark sections, black snow on light sections
- **Smooth Animations**: Intersection observers and CSS transitions for polished UX

### Landing Page Sections

- **Hero Section**: Video background with main headline, CTA buttons, and animated frequency bars
- **Showcase Section**: Interactive slideshow with GIF rotation and custom controls
- **Claims Section**: Two-column layout with compelling statistics and call-to-actions
- **Statistics Section**: Data-driven insights with visual hierarchy
- **CTA + Footer**: Contact information and navigation links

### Technical Features

---

- **Authentication**: Integrated with Clerk for sign-up/sign-in functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Smart component loading and mobile-specific optimizations
- **Custom Components**: Reusable UI components with TypeScript support

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd heariffy/cli
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file and add your Clerk authentication keys:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
cli/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main landing page
│   │   └── layout.tsx         # Root layout with fonts
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── FeatureMap.tsx     # Feature visualization
│   │   ├── ColorScale.tsx     # Color scale component
│   │   └── Waveform.tsx       # Audio waveform display
│   ├── lib/                   # Utility functions
│   └── styles/                # Global styles
├── public/
│   ├── vid.mp4               # Hero background video
│   ├── aud.png               # Heariffy logo
│   ├── ye.gif, ye1.gif       # Showcase slideshow images
│   ├── 1.png, 2.png, 3.png   # Claims section assets
│   ├── whi.jpg, cd.png       # Background images
│   └── dl.png                # Statistics section illustration
└── package.json
```

## 🎨 Design System

### Fonts

- **Dancing Script**: Used for headlines and cursive text elements
- **Domine**: Used for body text and statistics (serif font)

### Color Palette

- **Primary**: Amber/Yellow tones (#F59E0B, #FBBF24)
- **Text**: Amber-950 for headings, gray variants for body text
- **Backgrounds**: Warm whites (#FAF9F6, #F5F3EE)

### Animation Details

- **Frequency Bars**: 800ms refresh rate, responsive bar count based on screen size
- **Slideshow**: 4-second auto-advance with smooth transitions
- **Snowfall**: Randomized timing and positioning for natural effect

## 📱 Responsive Behavior

- **Desktop**: Full-width layouts with side-by-side content
- **Mobile**: Stacked layouts, optimized touch targets, reduced animation complexity
- **Performance**: Fewer frequency bars on mobile devices for better performance

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## 🌐 Deployment

The app can be deployed to any Next.js-compatible platform:

- **Vercel**: Automatic deployments from Git
- **Netlify**: Static site generation support
- **Docker**: Containerized deployment

## 📦 Key Dependencies

- **Next.js 15+**: React framework with App Router
- **Clerk**: Authentication and user management
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type safety and developer experience
- **Lucide React**: Icon components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🐛 Known Issues

- Video autoplay may not work on some mobile browsers (fallback image recommended)
- Heavy animations may impact performance on older devices
- Large GIF files may cause slower loading on slow connections

## 📞 Support

For questions or support, please contact the development team.
