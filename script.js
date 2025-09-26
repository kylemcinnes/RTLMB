// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initNewsletterForm();
    initModal();
    initScrollEffects();
    initNewsletterArchive();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(248, 245, 241, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(248, 245, 241, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero scroll button
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Newsletter form handling
function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const modal = document.getElementById('newsletter-modal');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            
            // Validate form
            if (!name || !email) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual API call)
            submitNewsletterForm(name, email);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit newsletter form
function submitNewsletterForm(name, email) {
    // Show loading state
    const submitBtn = document.querySelector('#newsletter-form button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
    submitBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success modal
        showNewsletterModal();
        
        // Reset form
        document.getElementById('newsletter-form').reset();
        
        // Here you would typically send the data to your backend
        console.log('Newsletter subscription:', { name, email });
        
        // Example of what you might send to your CRM:
        // sendToCRM({
        //     name: name,
        //     email: email,
        //     type: 'newsletter_signup',
        //     date: new Date().toISOString()
        // });
        
    }, 1500);
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('newsletter-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Show newsletter success modal
function showNewsletterModal() {
    const modal = document.getElementById('newsletter-modal');
    modal.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000);
}


// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.mission-point, .newsletter-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Helper functions for notifications
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Add CSS for fade-in animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Utility function to send data to CRM (placeholder)
function sendToCRM(data) {
    // This would be replaced with actual CRM integration
    // Example: Mailchimp, ConvertKit, etc.
    console.log('Sending to CRM:', data);
    
    // Example Mailchimp integration:
    // fetch('/api/newsletter-signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // });
}

// Newsletter Archive functionality
function initNewsletterArchive() {
    const newsletterGrid = document.getElementById('newsletter-grid');
    
    if (!newsletterGrid) {
        console.error('Newsletter grid not found');
        return;
    }
    
    // Load newsletter data
    loadNewsletters();
}

// Load newsletters from JSON file
async function loadNewsletters() {
    const newsletterGrid = document.getElementById('newsletter-grid');
    
    if (!newsletterGrid) {
        console.error('Newsletter grid not found');
        return;
    }
    
    try {
        const response = await fetch('/public/newsletters/index.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newsletters = await response.json();
        
        // Validate newsletter data
        if (!Array.isArray(newsletters)) {
            throw new Error('Invalid newsletter data format');
        }
        
        // Clear loading placeholder
        newsletterGrid.innerHTML = '';
        
        // Generate newsletter cards
        newsletters.forEach(newsletter => {
            if (newsletter.title && newsletter.subtitle && newsletter.filename) {
                const newsletterCard = createNewsletterCard(newsletter);
                newsletterGrid.appendChild(newsletterCard);
            } else {
                console.warn('Skipping invalid newsletter entry:', newsletter);
            }
        });
        
        // Show message if no newsletters found
        if (newsletters.length === 0) {
            newsletterGrid.innerHTML = `
                <div class="loading-placeholder">
                    <i class="fas fa-inbox"></i>
                    <p>No newsletters available at this time.</p>
                </div>
            `;
        }
        
        // Re-initialize scroll effects for new elements
        initScrollEffects();
        
    } catch (error) {
        console.error('Error loading newsletters:', error);
        showNewsletterError();
    }
}

// Create newsletter card HTML
function createNewsletterCard(newsletter) {
    const card = document.createElement('div');
    card.className = 'newsletter-item';
    
    const pdfUrl = `/public/newsletters/${newsletter.filename}`;
    
    card.innerHTML = `
        <div class="newsletter-preview">
            <i class="fas fa-file-pdf"></i>
            <h3>${newsletter.title}</h3>
            <p>${newsletter.subtitle}</p>
        </div>
        <div class="newsletter-actions">
            <a href="${pdfUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View PDF</a>
            <a href="${pdfUrl}" class="btn btn-outline" download="${newsletter.filename}">Download</a>
        </div>
    `;
    
    return card;
}

// Show error message if newsletters fail to load
function showNewsletterError() {
    const newsletterGrid = document.getElementById('newsletter-grid');
    
    if (newsletterGrid) {
        newsletterGrid.innerHTML = `
            <div class="loading-placeholder">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Unable to load newsletters at this time. Please try again later.</p>
                <button class="btn btn-primary" onclick="loadNewsletters()">Retry</button>
            </div>
        `;
    }
}

// Export functions for potential external use
window.RTLMB = {
    showNotification,
    sendToCRM,
    submitNewsletterForm,
    loadNewsletters
}; 