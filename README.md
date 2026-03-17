# LUMINO Static Website

A fully static, self-contained landing page for LUMINO solar energy company. This website requires no build process, package managers, or server-side dependencies.

## 📁 File Structure

```
lumino-static/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # Vanilla JavaScript for interactivity
├── assets/             # Empty (all assets use external URLs)
└── README.md           # This file
```

## ✨ Features

### Implemented Functionality
- ✅ **Package Comparison**: Switch between Standard and Premium packages
- ✅ **Smooth Navigation**: Scroll to different sections via header links
- ✅ **FAQ Accordion**: Expand/collapse frequently asked questions
- ✅ **Lead Form**: Contact form with success message (no backend)
- ✅ **Back to Top Button**: Appears on scroll, smooth scroll to top
- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized
- ✅ **Hero Video**: Autoplay with fallback poster image

### Sections
1. **Hero** - Video background with package selection
2. **Package Comparison** - Dynamic Standard/Premium package display
3. **Stats** - Key statistics (500+ installations, 15+ years, etc.)
4. **Benefits** - 4 benefit cards with icons
5. **Gallery** - 3 images with overlay titles
6. **Testimonials** - 3 customer reviews with 5-star ratings
7. **FAQ** - 4 questions with accordion functionality
8. **Contact Form** - Lead generation form (UI only)
9. **CTA Section** - Call-to-action with contact cards
10. **Footer** - Company info and links

## 🚀 How to Use

### Option 1: Open Directly in Browser
Simply double-click `index.html` to open it in your default web browser.

### Option 2: Local Server (Recommended)
For best results, use a local HTTP server:

#### Using Python (recommended):
```bash
cd lumino-static
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

#### Using Node.js (if installed):
```bash
npx serve lumino-static
```

#### Using PHP (if installed):
```bash
cd lumino-static
php -S localhost:8000
```

### Option 3: GitHub Pages Deployment
1. Create a new GitHub repository
2. Push these files to the repository
3. Go to Settings → Pages
4. Select branch (usually `main`) and root folder `/`
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 4: Netlify/Vercel Deployment
Simply drag and drop the `lumino-static` folder to:
- **Netlify**: https://app.netlify.com/drop
- **Vercel**: https://vercel.com/new

## 🎨 Customization

### Update Content
All content is in Serbian and can be edited directly in `index.html`. Look for:
- Package data in `script.js` (lines 7-66)
- Static content in the HTML file

### Update Styles
Edit `style.css` to change:
- Colors (brand colors: `#48139A` purple, `#2D8FE9` blue, `#1AA9B7` teal)
- Typography (currently uses Inter font from Google Fonts)
- Layout and spacing

### Update Assets
Currently all images and videos use external URLs. To use local assets:
1. Place files in the `assets/` folder
2. Update URLs in `index.html` from `https://customer-assets...` to `assets/filename.jpg`

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### No Dependencies
- **No Node.js** required
- **No npm/yarn** required
- **No build process** needed
- **No framework** (vanilla HTML/CSS/JS)

### Assets
All images and video are hosted externally on:
- `https://customer-assets.emergentagent.com/...`

If you need local assets, download them and place in the `assets/` folder, then update paths in `index.html`.

### JavaScript Features
- ES6+ syntax (modern browsers)
- Vanilla JavaScript (no jQuery or frameworks)
- Smooth scrolling
- Dynamic content rendering
- Event handling for all interactions

## 📊 Performance

- **Lightweight**: ~77KB total (HTML + CSS + JS)
- **Fast Loading**: No external dependencies
- **SEO Ready**: Semantic HTML structure
- **Responsive Images**: Optimized for all screen sizes

## 🐛 Known Limitations

- **Form Submission**: Contact form shows success message but doesn't actually send data (backend needed for real submission)
- **Video Autoplay**: May be blocked by some browsers' autoplay policies (poster image shown as fallback)

## 📧 Support

For questions or issues, contact:
- **Email**: contact@lumino.rs
- **Phone**: +381 64 39 013 48
- **Location**: Ibarska 121, Kraljevo 36000

---

**Built with ❤️ as a static conversion from React application**
**All content in Serbian | Sav sadržaj na srpskom**
