/* ============================================
   InstaSavvy - Backend Server
   Express.js with Instagram download API
   ============================================ */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('./middleware/rateLimit');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Middleware =====
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// ===== Rate Limiting =====
app.use('/api/', rateLimit.apiLimiter);

// ===== Static Files (serve frontend) =====
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ===== API Routes =====
const downloadRoutes = require('./routes/download');
const proxyRoutes = require('./routes/proxy');
const apiRoutes = require('./routes/api');
const contactRoutes = require('./routes/contact');

app.use('/api/download', downloadRoutes);
app.use('/api/proxy-download', proxyRoutes);
app.use('/api', apiRoutes);
app.use('/api/contact', contactRoutes);

// ===== Health Check =====
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

// ===== SPA Fallback (all other routes serve index.html) =====
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(err.status || 500).json({ success: false, error: err.message || 'Internal server error' });
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`\n  🚀 InstaSavvy Server running on http://localhost:${PORT}`);
  console.log(`  📂 Serving frontend from: ${path.join(__dirname, '..', 'frontend')}`);
  console.log(`  ⚡ API: POST /api/download — Fetch Instagram media`);
  console.log(`  ⚡ API: GET  /api/proxy-download — Stream media files`);
  console.log(`  ⚡ Environment: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
