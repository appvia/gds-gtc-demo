# Get Tech Certified - GOV.UK Eleventy Version

[![Deploy to GitHub Pages](https://github.com/appvia/gds-gtc-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/appvia/gds-gtc-demo/actions/workflows/deploy.yml)

A clean, modern implementation of the Get Tech Certified site using the GOV.UK Eleventy plugin.

## Benefits over WordPress HTML Export

✅ **No tracking scripts** - Clean, secure implementation  
✅ **No phishing warnings** - Fresh codebase without suspicious elements  
✅ **GOV.UK compliant** - Automatic design system compliance  
✅ **Easy to maintain** - Markdown content instead of HTML  
✅ **Better accessibility** - Built-in GOV.UK standards  
✅ **Clean URLs** - No `.html` extensions needed  

## Quick Start

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Serve locally at http://localhost:8080
npm run serve
```

## Project Structure

```
app/
├── index.md           # Homepage
├── posts/            # Certification area pages
│   ├── cloud-platform.md
│   ├── cyber-security.md
│   ├── data.md
│   ├── finops.md
│   ├── machine-learning-ai.md
│   ├── quantum-computing.md
│   ├── software-engineering.md
│   └── faqs.md
└── _data/            # Site configuration

_site/               # Built static site (for deployment)
```

## Adding Content

1. Create Markdown files in `app/posts/`
2. Use frontmatter for metadata:
   ```yaml
   ---
   title: Page Title
   description: Page description
   date: 2025-10-01
   ---
   ```
3. Write content in Markdown
4. Tables are supported for vendor certifications

## Deployment

The `_site` folder contains the built static site ready for GitHub Pages deployment.

## Migration Status

- ✅ Homepage
- ✅ Cloud & Platform Technologies  
- ✅ FAQs
- ✅ Cyber Security
- ✅ Data
- ✅ FinOps
- ✅ Machine Learning & AI
- ✅ Quantum Computing
- ✅ Software Engineering

## Next Steps

1. Deploy to GitHub Pages or preferred hosting platform
2. Set up GitHub Actions for automatic deployment
3. Configure custom domain if needed
4. Test all vendor links are working correctly