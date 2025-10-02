# uPVC Solutions Chittoor - Premium uPVC Windows & Doors Website

A modern, responsive website for uPVC Solutions Chittoor, built with Next.js, React, and Node.js. This website showcases premium uPVC windows and doors with 25+ years of experience in Chittoor District, Andhra Pradesh.

## 🚀 Features

### Frontend (Next.js + React)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **25+ Pages**: Comprehensive website with all necessary pages
- **Modern UI**: Beautiful animations with Framer Motion
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant design

### Backend (Node.js + Express)
- **RESTful API**: Complete backend with Express.js
- **Email Integration**: Contact forms with Nodemailer
- **Database Ready**: MongoDB integration
- **Security**: Helmet.js for security headers
- **Validation**: Input validation and sanitization

### Key Pages
- Homepage with hero section and features
- Product pages (uPVC Windows, Doors, etc.)
- About Us with company story
- Contact page with form and map
- Gallery with project showcase
- Blog with articles and tips
- Services pages
- SEO-optimized individual product pages

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (optional, for full functionality)

### Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd pvc
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Configure environment variables**
```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Backend
PORT=5000
MONGODB_URI=mongodb://localhost:27017/upvc-solutions
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
```

5. **Start development servers**
```bash
# Start both frontend and backend
npm run dev:full

# Or start separately
npm run dev          # Frontend (Next.js)
npm run server       # Backend (Node.js)
```

6. **Open your browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
pvc/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── products/          # Product pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── gallery/          # Gallery page
│   └── blog/             # Blog pages
├── components/           # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   └── pages/            # Page-specific components
├── server/               # Node.js backend
│   ├── index.js          # Server entry point
│   └── routes/           # API routes
├── public/               # Static assets
│   └── images/           # Images and media
├── css/                  # Additional styles
├── js/                   # JavaScript files
└── package.json          # Dependencies
```

## 🎨 Design Features

### Color Scheme
- Primary: Blue (#3b82f6)
- Secondary: Gray (#6b7280)
- Accent: Green (#22c55e)
- Background: White/Gray (#f8f9fa)

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800

### Components
- Responsive navigation with dropdown menus
- Animated hero sections
- Feature cards with hover effects
- Product showcases
- Testimonial carousels
- Contact forms with validation
- WhatsApp integration

## 📞 Contact Information

**uPVC Solutions Chittoor**
- 📱 Phone: +91 9949360406
- 📧 Email: info@upvcsolutionschittoor.com
- 📍 Address: Desamma Nagar, Chittoor District, Andhra Pradesh
- 💬 WhatsApp: +91 9949360406

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start Next.js development server
npm run build        # Build for production
npm run start        # Start production server
npm run server       # Start Node.js backend
npm run dev:full     # Start both frontend and backend
npm run lint         # Run ESLint
```

### Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `MONGODB_URI`: MongoDB connection string
- `EMAIL_USER`: Email service username
- `EMAIL_PASS`: Email service password
- `PORT`: Backend server port

## 📈 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robot.txt configuration
- Canonical URLs
- Image optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 📱 Mobile Features

- Touch-friendly navigation
- Swipe gestures for galleries
- Optimized images for mobile
- Fast loading times
- Offline support (PWA ready)

## 🔒 Security

- Helmet.js for security headers
- Input validation and sanitization
- CORS configuration
- Rate limiting (recommended)
- HTTPS enforcement

## 📊 Performance

- Image optimization with Next.js
- Lazy loading for components
- Code splitting
- Compression middleware
- CDN ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@upvcsolutionschittoor.com
- Phone: +91 9949360406
- WhatsApp: +91 9949360406

---

**Built with ❤️ for uPVC Solutions Chittoor**
