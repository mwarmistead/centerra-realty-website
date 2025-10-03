# Centerra Realty Website

A professional commercial real estate website built with Next.js, TypeScript, and Tailwind CSS. This comprehensive platform showcases Centerra Realty's services across property investment, government advisory, and specialized consulting sectors.

## 🏢 Project Overview

Centerra Realty is a full-service commercial real estate company specializing in:
- **Property Investment**: 6 dedicated property types with specialized expertise
- **Government Services**: 6 comprehensive municipal and development services
- **Advisory Services**: 6 strategic consulting and management solutions

## ✨ Features

### **Complete Service Portfolio**
- **Property Types**: Industrial, Office, Retail/Restaurant, Multifamily, Self-Storage, RV Parks & Land
- **Government Services**: Municipal Advisory, Public-Private Partnerships, Economic Development, Asset Management, Compliance & Regulatory, Feasibility Studies
- **Advisory Services**: Transaction Advisory, Market Analysis, Asset Optimization, Investment Strategy, Due Diligence, Portfolio Management

### **Technical Excellence**
- ⚡ **Next.js 15** with App Router and TypeScript
- 🎨 **Tailwind CSS** for responsive, modern styling
- 🧩 **shadcn/ui** components for consistent design system
- 📱 **Fully Responsive** design optimized for all devices
- 🎯 **Interactive UI** with hover effects and smooth animations
- 🚀 **Optimized Performance** with modern web standards

### **Professional Design**
- Clean, professional aesthetics suitable for commercial real estate
- Intuitive navigation with dedicated service pages
- Interactive cards with hover effects
- Consistent branding and visual hierarchy
- Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- **Bun** (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mwarmistead/centerra-realty-website.git
   cd centerra-realty-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── (property-types)/         # Property investment pages
│   │   ├── industrial/
│   │   ├── office/
│   │   ├── retail-restaurant/
│   │   ├── multifamily/
│   │   ├── self-storage/
│   │   └── rv-parks-land/
│   ├── (government-services)/    # Government advisory pages
│   │   ├── municipal-advisory/
│   │   ├── public-private-partnerships/
│   │   ├── economic-development/
│   │   ├── asset-management/
│   │   ├── compliance-regulatory/
│   │   └── feasibility-studies/
│   ├── (advisory-services)/      # Strategic consulting pages
│   │   ├── transaction-advisory/
│   │   ├── market-analysis/
│   │   ├── asset-optimization/
│   │   ├── investment-strategy/
│   │   ├── due-diligence/
│   │   └── portfolio-management/
│   ├── about/                    # Company information
│   ├── contact/                  # Contact and location details
│   ├── insights/                 # Market insights and resources
│   └── globals.css              # Global styles
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Homepage hero section
│   ├── Footer.tsx               # Site footer
│   └── [service-components]/    # Service-specific components
└── lib/
    └── utils.ts                 # Utility functions
```

## 🛠️ Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build production application
- `bun start` - Start production server
- `bun lint` - Run TypeScript and ESLint checks
- `bun format` - Format code with Biome

## 🔧 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: Bun
- **Linting**: ESLint + Biome
- **Icons**: Lucide React

## 📄 Pages Overview

### Core Pages
- **Homepage** (`/`) - Company overview and service highlights
- **About** (`/about`) - Company history, mission, and team
- **Contact** (`/contact`) - Contact information and office locations
- **Insights** (`/insights`) - Market analysis and industry resources

### Property Investment (6 Pages)
Each property type includes market analysis, investment strategies, and portfolio examples:
- Industrial Properties
- Office Buildings
- Retail & Restaurant
- Multifamily Residential
- Self-Storage Facilities
- RV Parks & Land Development

### Government Services (6 Pages)
Comprehensive municipal and development consulting:
- Municipal Advisory Services
- Public-Private Partnerships
- Economic Development Planning
- Asset Management Solutions
- Compliance & Regulatory Support
- Feasibility Studies

### Advisory Services (6 Pages)
Strategic consulting and investment management:
- Transaction Advisory
- Market Analysis & Research
- Asset Optimization
- Investment Strategy Development
- Due Diligence Services
- Portfolio Management

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `bun run build`
   - **Node.js Version**: 18.x
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
bun run build
bun run start
```

## 📝 License

This project is proprietary software developed for Centerra Realty.

## 🤝 Contributing

This is a private project for Centerra Realty. For internal development inquiries, please contact the development team.

---

**Centerra Realty** - Professional Commercial Real Estate Services