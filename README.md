# NEXTSSPARK - Company Website

A modern, professional company website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## 🚀 Features

✅ **10 Complete Pages:**
- Home (Landing page with hero, services, testimonials)
- About Us (Company story, mission, values, timeline)
- Services (Detailed service offerings with pricing)
- Portfolio (Project showcase and case studies)
- Team (Team members and departments)
- Blog (Articles and insights)
- Careers (Job openings and internship programs)
- Testimonials (Client reviews and success stories)
- Pricing (Service packages and training programs)
- Contact (Contact form and information)

✅ **Modern Design:**
- Responsive mobile-first design
- Smooth animations and transitions
- Brand color system (Navy #16133C & Cyan #0AF1F6)
- Professional UI components
- Optimized for performance

✅ **SEO Optimized:**
- Meta tags and Open Graph
- Sitemap and robots.txt
- Schema markup
- Mobile-friendly

✅ **Production Ready:**
- TypeScript support
- Clean code structure
- Reusable components
- Best practices

## 📋 Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or extract the project:**
```bash
cd nextsspark-website
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextsspark-website/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── team/
│   ├── blog/
│   ├── careers/
│   ├── testimonials/
│   ├── pricing/
│   └── contact/
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── package.json
└── README.md
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts` to update brand colors:

```typescript
colors: {
  navy: {
    800: '#16133C',  // Change this
  },
  cyan: {
    400: '#0AF1F6',  // Change this
  },
}
```

### Update Company Info

Edit `app/components/Footer.tsx` and `app/contact/page.tsx`:
- Company address
- Email
- Phone number
- Social media links

### Add Blog Articles

Create new files in `app/blog/[slug]/page.tsx` for individual blog posts.

### Update Team Members

Edit the `teamMembers` array in `app/team/page.tsx`.

### Modify Pricing

Update pricing data in `app/pricing/page.tsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
netlify deploy --prod --dir=.next
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

- ⚡ Lightning fast with Next.js 16
- 🖼️ Optimized images
- 📱 Mobile responsive
- ♿ Accessible design
- 🔍 SEO friendly

## 🔒 Security

- HTTPS ready
- Secure headers
- XSS protection
- CSRF protection

## 📞 Support & Maintenance

### Regular Updates

- Keep dependencies updated: `npm update`
- Check for security vulnerabilities: `npm audit`

### Monitoring

- Set up analytics (Google Analytics, Mixpanel)
- Monitor performance with Web Vitals
- Enable error tracking

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

This project is proprietary and belongs to NEXTSSPARK.

## 📧 Contact

- Email: nextsspark@gmail.com
- Phone: +92 (300) 123-4567
- Address: Lahore, Pakistan

---

**Built with ❤️ by NEXTSSPARK Team**
