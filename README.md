# Right to Life Mississauga Brampton (RTLMB) Website

A beautiful, powerful, and visually moving static homepage for Right to Life Mississauga Brampton, designed to protect life from fertilization to natural death and promote a culture of life in Mississauga and Brampton.

## 🌟 Features

### 🎨 Design & User Experience
- **Modern, Clean Design**: Beautiful gradient animations and smooth transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading with optimized assets and minimal dependencies

### 📱 Key Sections
- **Hero Section**: Powerful animated headline with clear call-to-action buttons
- **About Section**: Mission statement with visual mission points
- **Donation Section**: Three-tier membership system with CanadaHelps.org integration
- **Newsletter Signup**: Clean form with validation and success modal
- **Newsletter Archive**: Past newsletters with PDF viewing/download options
- **Footer**: Complete contact information and social links

### 💳 Donation Integration
- **CanadaHelps.org Integration**: Secure donation processing
- **Automatic Membership**: $25/year individual, $30/year family
- **Tax Receipts**: Automatic generation through CanadaHelps.org
- **Multiple Options**: Individual, Family, and Custom amount donations

### 📬 Newsletter System
- **Free Newsletter**: Available to all subscribers
- **Member Newsletter**: Exclusive content for donors
- **Archive Access**: Past newsletters with PDF viewing
- **CRM Ready**: Prepared for Mailchimp, ConvertKit, or other CRM integration

## 🚀 Quick Start

### Prerequisites
- A web server (Apache, Nginx, or any static file server)
- Modern web browser
- Text editor for customization

### Installation
1. **Download/Clone** the project files
2. **Upload** to your web server
3. **Open** `index.html` in a web browser
4. **Customize** the content and links as needed

### Local Development
For local development, you can use any of these methods:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## ⚙️ Customization

### 🔗 Important Links to Update

#### 1. Donation Links
Update the donation URLs in `script.js` (lines 150-154):

```javascript
const donationUrls = {
    individual: 'YOUR_CANADAHELPS_INDIVIDUAL_URL',
    family: 'YOUR_CANADAHELPS_FAMILY_URL', 
    custom: 'YOUR_CANADAHELPS_CUSTOM_URL'
};
```

#### 2. Contact Information
Update contact details in `index.html`:
- Email: `info@rtlmb.ca`
- Phone: `1-800-395-HELP`
- Social media links

#### 3. Newsletter Integration
The newsletter form is ready for CRM integration. Update the `sendToCRM()` function in `script.js` with your preferred service:

```javascript
// Example Mailchimp integration
function sendToCRM(data) {
    fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}
```

### 🎨 Branding Customization

#### Colors
The color scheme is defined in CSS variables (`styles.css`):
```css
:root {
    --primary-red: #9b1c31;    /* Deep red */
    --off-white: #f8f5f1;      /* Off-white background */
    --navy-blue: #1c2c4c;      /* Navy blue */
}
```

#### Fonts
- **Headings**: Playfair Display (Google Fonts)
- **Body Text**: Open Sans (Google Fonts)

#### Images
Replace placeholder images:
- Hero background (currently gradient)
- About section image (currently placeholder)
- Newsletter PDFs (currently placeholder links)

### 📄 Content Updates

#### Mission Statement
Update the mission text in the About section to match your organization's specific goals and messaging.

#### Newsletter Archive
Replace placeholder newsletter items with actual PDF links:
```html
<div class="newsletter-item">
    <div class="newsletter-preview">
        <i class="fas fa-file-pdf"></i>
        <h3>December 2023</h3>
        <p>Year in Review & Holiday Message</p>
    </div>
    <div class="newsletter-actions">
        <a href="path/to/actual/newsletter.pdf" class="btn btn-secondary">View PDF</a>
        <a href="path/to/actual/newsletter.pdf" class="btn btn-outline" download>Download</a>
    </div>
</div>
```

## 🔧 Technical Details

### File Structure
```
RTLMB/
├── index.html          # Main homepage
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

### Dependencies
- **Google Fonts**: Playfair Display, Open Sans
- **Font Awesome**: Icons (CDN)
- **No other external dependencies**

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📧 Newsletter Automation Setup

### CRM Integration Options

#### Mailchimp
1. Create a Mailchimp account
2. Set up an audience/list
3. Get your API key
4. Update the `sendToCRM()` function with Mailchimp API calls

#### ConvertKit
1. Create a ConvertKit account
2. Set up a form
3. Get your API key
4. Update the `sendToCRM()` function with ConvertKit API calls

### Automation Workflows

The website is designed to support these automation workflows:

1. **Newsletter Signup** → Add to general newsletter list
2. **Donation** → Tag as "Member" and add to premium newsletter list
3. **7-day Follow-up** → Send "Become a Member" CTA to non-donors
4. **11-month Reminder** → Send membership renewal reminder

## 🚀 Deployment

### Web Hosting
Upload all files to your web hosting provider:
- Shared hosting (cPanel, etc.)
- VPS/Dedicated server
- CDN (Cloudflare, etc.)

### Domain Setup
1. Point your domain to your hosting provider
2. Update DNS settings
3. Test all functionality

### SSL Certificate
Ensure your hosting provider offers SSL certificates for secure connections, especially important for donation processing.

## 📞 Support & Maintenance

### Regular Updates
- **Content**: Update newsletter archive monthly
- **Donation Links**: Verify CanadaHelps.org links quarterly
- **Contact Info**: Keep contact details current
- **Social Media**: Update social media links as needed

### Performance Monitoring
- Monitor page load times
- Check mobile responsiveness
- Verify all forms and links work correctly
- Test donation flow regularly

## 🤝 Contributing

This website is designed specifically for Right to Life Mississauga Brampton. For modifications or improvements:

1. Test changes locally first
2. Ensure mobile responsiveness
3. Validate all forms and links
4. Test donation flow thoroughly

## 📄 License

This project is created specifically for Right to Life Mississauga Brampton. Please respect the organization's mission and values when making modifications.

## 🙏 Acknowledgments

- **CanadaHelps.org** for secure donation processing
- **Google Fonts** for beautiful typography
- **Font Awesome** for icons
- **Right to Life Mississauga Brampton** for their mission to protect life

---

**For technical support or questions about this website, please contact your web developer or the organization's technical team.** 