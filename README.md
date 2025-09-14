# Girija Swain - Portfolio Website

A professional portfolio website built with Jekyll, showcasing experience as a Lead Engineer and Digital Transformation Specialist.

## 🚀 Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Multi-page Structure**: Home, About, Case Studies, Blog, Contact
- **Blog System**: Jekyll blog with pagination and tagging
- **Case Studies**: Detailed project case studies with custom layout
- **SEO Optimized**: SEO tags, sitemap, and structured data
- **Google Analytics**: Integrated analytics tracking
- **Social Integration**: Social media links and sharing buttons
- **Performance Optimized**: Fast loading with optimized assets

## 📁 Project Structure

```
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── index.html               # Homepage
├── about.md                 # About page
├── case-studies.md          # Case studies index
├── blog.html                # Blog index
├── contact.md               # Contact page
├── _layouts/                # Page layouts
│   ├── default.html         # Base layout
│   ├── page.html            # Page layout
│   ├── post.html            # Blog post layout
├── _posts/                  # Blog posts
│   ├── 2025-01-15-microservices-architecture-patterns.md
│   ├── 2025-01-08-cloud-migration-zero-downtime.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── styles.scss        # Main stylesheet
│   └── js/
│       └── main.js          # JavaScript functionality
└── README.md
```

## 🛠 Setup & Installation

### Prerequisites

- Ruby 2.7 or higher
- Jekyll 4.3+
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**
   ```
   http://localhost:4000
   ```

### GitHub Pages Deployment

1. **Update _config.yml**
   ```yaml
   url: "https://yourusername.github.io"
   baseurl: "/your-repo-name"  # if not using custom domain
   ```

2. **Configure Google Analytics**
   ```yaml
   google_analytics: G-XXXXXXXXXX  # Replace with your GA ID
   ```

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source: Deploy from a branch
   - Branch: main / (root)
   - Save

## 📝 Content Management

### Adding Blog Posts

Create new markdown files in `_posts/` following the naming convention:
```
YYYY-MM-DD-title-of-post.md
```

Example post structure:
```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-15
tags: [tag1, tag2, tag3]
excerpt: "Brief description of your post content..."
---

Your post content here...
```

### Customizing Content

1. **Personal Information**: Update `_config.yml` with your details
2. **Social Links**: Update social media usernames in `_config.yml`
3. **Navigation**: Modify navigation items in `_config.yml`
4. **Colors & Styling**: Update CSS variables in `assets/css/main.scss`
5. **Images**: Add your profile image to `assets/images/`

### Modifying Navigation

Update the navigation section in `_config.yml`:
```yaml
navigation:
  - title: Home
    url: /
  - title: About
    url: /about/
  # Add more navigation items as needed
```

## 📊 Google Analytics Setup

1. **Create Google Analytics Account**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website

2. **Get Tracking ID**
   - Copy your Google Analytics 4 Measurement ID (G-XXXXXXXXXX)

3. **Update Configuration**
   ```yaml
   google_analytics: G-XXXXXXXXXX  # Replace with your actual ID
   ```

## 🔧 Advanced Configuration

### Custom Domain Setup

1. **Add CNAME file**
   ```
   echo "yourdomain.com" > CNAME
   ```

2. **Update _config.yml**
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

3. **Configure DNS**
   - Add CNAME record pointing to `yourusername.github.io`

### SEO Optimization

The site includes several SEO features:
- SEO plugin with meta tags
- Sitemap generation
- Structured data markup
- Open Graph tags for social sharing

### Performance Optimization

- Minified CSS and JavaScript
- Optimized images (add your own optimized images)
- Fast loading fonts and icons from CDN

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment Options

### GitHub Pages (Free)
- Automatic deployment on push
- Custom domain support
- SSL certificate included

## 🔍 SEO Best Practices Included

- Semantic HTML structure
- Meta descriptions and titles
- Schema.org structured data
- Fast loading times
- Mobile-first design
- XML sitemap
- Social media meta tags

### Local Development Tips

- Use `bundle exec jekyll serve --watch` for auto-reloading
- Check `_site/` folder for generated output
- Use browser developer tools for debugging
- Test on multiple devices and screen sizes

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio website.

## 🤝 Contributing

If you find issues or have improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about setup or customization:
- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review [GitHub Pages documentation](https://pages.github.com/)
- Open an issue in the repository

---

**Built with ❤️ using Jekyll • Deployed on GitHub Pages**