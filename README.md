# 📸 InstaSavvy - Instagram Content Downloader

**InstaSavvy** is a complete, production-ready Instagram content downloader website. Download Instagram videos, photos, reels, stories, IGTV, profile pictures, and highlights — all for free, without watermark, and without registration.

## ✨ Features

- **8 Download Tools**: Video, Photo, Reels, Story, IGTV, Profile Picture, Highlights, Bulk Downloader
- **HD/4K Quality**: Multiple quality options up to 4K resolution
- **No Watermark**: Clean, original quality downloads
- **No Registration**: Just paste the URL and download
- **20+ Languages**: Full internationalization support
- **Dark Mode**: Light/dark theme toggle
- **PWA Support**: Install as an app on mobile and desktop
- **Responsive Design**: Works on all devices and screen sizes
- **SEO Optimized**: Meta tags, schema, sitemap, blog content
- **Privacy First**: No data stored, no tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
cd instagram-downloader

# Install dependencies
npm install

# Start the server
npm start
```

The site will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=*
MAX_DOWNLOADS_PER_IP=50
```

## 📁 Project Structure

```
instagram-downloader/
├── frontend/              # Frontend static files
│   ├── public/            # Public assets
│   │   ├── locales/       # Translation files (20 languages)
│   │   ├── manifest.json  # PWA manifest
│   │   ├── sw.js          # Service worker
│   │   ├── sitemap.xml    # XML sitemap
│   │   ├── robots.txt     # Robots configuration
│   │   └── favicon.svg    # SVG favicon
│   ├── src/
│   │   ├── css/           # Stylesheets
│   │   │   └── style.css  # Main styles (light/dark, responsive)
│   │   └── js/            # JavaScript files
│   │       ├── main.js    # SPA router, download logic
│   │       └── i18n.js    # Internationalization engine
│   └── index.html         # Main HTML (all pages as SPA)
├── backend/               # Node.js/Express backend
│   ├── routes/            # API routes
│   │   ├── download.js    # Download endpoints
│   │   ├── api.js         # General API endpoints
│   │   └── contact.js     # Contact form endpoint
│   ├── middleware/         # Middleware
│   │   ├── rateLimit.js   # Rate limiting
│   │   └── cors.js        # CORS configuration
│   ├── services/          # Business logic
│   │   └── scraper.js     # Instagram scraper service
│   ├── controllers/       # Controllers
│   │   └── instagramScraper.js
│   └── server.js          # Express server entry point
├── .env                   # Environment variables
├── package.json           # Dependencies
└── README.md              # This file
```

## 🔧 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla SPA)
- **Backend**: Node.js, Express.js
- **Database**: None (privacy-first, no data stored)
- **Caching**: node-cache (in-memory)
- **PWA**: Service Worker, Web App Manifest

## 🌐 Multi-Language Support

20 languages supported: English, Spanish, French, German, Portuguese, Arabic, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Romanian, Russian, Thai, Turkish, Ukrainian, Vietnamese, Chinese Simplified, Chinese Traditional.

Language auto-detection based on browser locale, with manual switcher in header and footer.

## 📄 Pages

| Page | URL |
|------|-----|
| Home | `/` |
| Video Downloader | `/instagram-video-downloader` |
| Photo Downloader | `/instagram-photo-downloader` |
| Reels Downloader | `/instagram-reels-downloader` |
| Story Downloader | `/instagram-story-downloader` |
| IGTV Downloader | `/instagram-igtv-downloader` |
| Profile Picture Downloader | `/instagram-profile-picture-downloader` |
| Highlights Downloader | `/instagram-highlights-downloader` |
| Bulk Downloader | `/instagram-bulk-downloader` |
| Blog | `/blog` |
| FAQ | `/faq` |
| About | `/about` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms of Service | `/terms-of-service` |

## 🔒 Privacy & Security

- No user registration or login required
- No personal data collection or storage
- Download history auto-expires
- Rate limiting to prevent abuse
- HTTPS/SSL recommended for production
- Privacy-first design

## 📱 PWA Support

- Add to Home Screen on Android and iOS
- Offline fallback page
- Service worker caching for fast loads
- App-like experience

## 🚀 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
Connect your GitHub repository to Netlify and set:
- Build command: (none - static site)
- Publish directory: `frontend`
- Functions directory: `backend`

### Deploy to VPS
```bash
npm install -g pm2
pm2 start backend/server.js --name instasavvy
```

## 📝 License

MIT License - See LICENSE file for details.

## ⚠️ Disclaimer

This tool is for personal use only. Respect copyright laws and content creators' rights. Only download content from public Instagram accounts. Do not redistribute downloaded content without permission.
