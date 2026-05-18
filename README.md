# Exclusive Airport Transfer

A premium luxury chauffeur and airport transfer website for the Isle of Man, built with modern web technologies.

## 🚗 About

Exclusive Airport Transfer is a sophisticated, high-end website showcasing premium chauffeur services across the Isle of Man. The site features a dark luxury design aesthetic with black, white, and gold branding, creating an executive and exclusive feel.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Premium UI Components**: Reusable components with glassmorphism effects and gold accents
- **SEO Optimized**: Comprehensive metadata and semantic HTML structure
- **Sections Include**:
  - Hero section with cinematic design
  - Services showcase (Airport Transfers, Executive Travel, Island-Wide Service, Corporate Accounts)
  - Luxury fleet display
  - About section with company stats
  - Client testimonials
  - FAQ with smooth accordion interactions
  - Contact/booking form
  - Professional footer

## 🎨 Design Features

- Dark luxury aesthetic (black background with gold accents)
- Glassmorphism effects for modern UI depth
- Gold gradient text and hover glows
- Smooth scroll behavior
- Transparent navbar that becomes solid on scroll
- Premium card layouts with hover effects
- Framer Motion animations throughout

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Fleet.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── public/                 # Static assets

```

## 🎯 Key Components

- **Navbar**: Sticky navigation with scroll-triggered background
- **Hero**: Full-screen hero with gradient text and animations
- **Services**: Grid layout showcasing four main service types
- **Fleet**: Luxury vehicle showcase with specifications
- **Testimonials**: Client reviews with 5-star ratings
- **FAQ**: Accordion-style frequently asked questions
- **Contact**: Booking form with contact information

## 🌟 Customization

To customize the brand colors, edit the CSS variables in `app/globals.css`:

```css
:root {
  --gold: #D4AF37;
  --gold-light: #F4E4B0;
  --gold-dark: #B8941F;
}
```

## 📝 Notes

- Replace placeholder vehicle images with actual luxury car photos
- Update contact information (phone, email, address)
- Configure form submission endpoint in Contact component
- Add social media links in Footer component
- Consider adding actual vehicle images to enhance visual appeal

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

Deploy to Vercel, Netlify, or your preferred hosting platform.

## 📄 License

This project is created for Exclusive Airport Transfer, Isle of Man.
