'use client';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>RTLMB</h2>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <div className="nav-dropdown">
              <a href="#" className="nav-dropdown-toggle">Events <i className="fas fa-chevron-down"></i></a>
              <div className="nav-dropdown-menu">
                <a href="/events/40-days-for-life">40 Days for Life</a>
                <a href="/events/life-chain">Life Chain</a>
                <a href="/resources/abortion-euthanasia-101">Resources</a>
              </div>
            </div>
            <a href="#donate" className="nav-cta">Donate Now</a>
          </div>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              <span className="hero-line">Protecting Life</span>
              <span className="hero-line">From Fertilization</span>
              <span className="hero-line">To Natural Death</span>
            </h1>
            <p className="hero-subtitle">Join Right to Life Mississauga Brampton in promoting a culture of life in our communities</p>
            <div className="hero-cta">
              <a href="#donate" className="btn btn-primary">Donate Now</a>
              <a href="#events" className="btn btn-secondary">Join Our Events</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Virtual AGM Announcement */}
      <section className="agm-banner" aria-label="Virtual Annual General Meeting announcement">
        <div className="container">
          <div className="agm-banner-inner">
            <span className="agm-banner-badge">Upcoming</span>
            <h2 className="agm-banner-title">Virtual Annual General Meeting</h2>
            <p className="agm-banner-datetime">Saturday, June 27, 2026 &nbsp;|&nbsp; 10:30 a.m. – 12:00 p.m.</p>
            <p className="agm-banner-text">Join us for our Virtual Annual General Meeting. We&apos;ll hear inspiring reflections from our youth and review the year&apos;s work building a culture of life.</p>
            <p className="agm-banner-cta">Zoom link and poster will be shared via our newsletter. <a href="#newsletter">Join the newsletter below</a> to receive all details.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup (prominent) */}
      <section id="newsletter" className="newsletter-prominent">
        <div className="container">
          <div className="newsletter-prominent-header">
            <h2>Stay informed through our newsletter</h2>
            <p>Receive the Virtual AGM details on June 27, event updates, and ways to support the mission directly in your inbox. This is our primary way of sharing important information.</p>
          </div>
          <div className="newsletter-card">
            <form action="https://rtlmb.us19.list-manage.com/subscribe/post?u=45ee4748acda5b1f7c9cb16bf&amp;id=65cd9fff23&amp;f_id=009f34e7f0" method="post" target="_blank" noValidate id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email address <span style={{color: '#dc2626'}}>*</span></label>
                <input type="email" name="EMAIL" id="mce-EMAIL" required placeholder="you@example.com" />
                <input type="hidden" name="tags" value="24263874" />
              </div>
              <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                <input type="text" name="b_45ee4748acda5b1f7c9cb16bf_65cd9fff23" tabIndex={-1} value="" />
              </div>
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn-subscribe">Subscribe</button>
              <div id="mce-responses">
                <div className="response" id="mce-error-response" style={{display: 'none', color: '#b91c1c'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none', color: '#166534'}}></div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>Right to Life Mississauga Brampton (RTLMB) is dedicated to protecting the sanctity of human life from the moment of fertilization to natural death. We work tirelessly to promote a culture of life in Mississauga and Brampton through education, advocacy, and community engagement.</p>
              
              <div className="mission-points">
                <div className="mission-point">
                  <i className="fas fa-heart"></i>
                  <h3>Protect Life</h3>
                  <p>Defending the right to life for all human beings, from conception to natural death</p>
                </div>
                <div className="mission-point">
                  <i className="fas fa-hands-helping"></i>
                  <h3>Support Families</h3>
                  <p>Providing resources and support to families facing difficult decisions</p>
                </div>
                <div className="mission-point">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Educate</h3>
                  <p>Raising awareness about the value and dignity of every human life</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/hero.jpg" alt="Mother and baby - Every life is a gift" style={{width: '100%', borderRadius: '8px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Parish Outreach Section */}
      <section id="get-involved" className="parish-outreach">
        <div className="container">
          <div className="parish-outreach-header">
            <h2>Get Involved in Your Parish</h2>
            <p>RTLMB&apos;s heart is in our parishes. We work alongside clergy and parishioners to bring the Gospel of life to every corner of Mississauga and Brampton—through prayer, presence, and gentle witness.</p>
          </div>
          <div className="parish-outreach-grid">
            <div className="parish-outreach-card">
              <i className="fas fa-church" aria-hidden="true"></i>
              <h3>Pulpit Speeches</h3>
              <p>We share the mission of protecting life from fertilization to natural death with parish communities through thoughtful pulpit announcements that invite prayer and action.</p>
            </div>
            <div className="parish-outreach-card">
              <i className="fas fa-handshake" aria-hidden="true"></i>
              <h3>Presence After Mass</h3>
              <p>Our volunteers are present after Mass to connect with parishioners, share resources, and invite families to join events like Life Chain and 40 Days for Life.</p>
            </div>
            <div className="parish-outreach-card">
              <i className="fas fa-users" aria-hidden="true"></i>
              <h3>Building Parish Connections</h3>
              <p>We partner with parishes across Peel Region to strengthen a culture of life—one relationship, one conversation, and one act of charity at a time.</p>
            </div>
          </div>
          <div className="parish-outreach-footer">
            <p>Want to help at your parish or stay in the loop? <a href="#newsletter">Join our newsletter</a>—it&apos;s how we share opportunities to serve and upcoming events.</p>
          </div>
          <div className="instagram-promo">
            <h3>Follow us on Instagram</h3>
            <p>For creative updates and special funding opportunities that support our work in the community.</p>
            <a href="https://www.instagram.com/righttolifemb/" className="instagram-promo-cta" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" aria-hidden="true"></i>
              @righttolifemb
            </a>
          </div>
        </div>
      </section>

      {/* Key Events Section */}
      <section id="events" className="key-events">
        <div className="container">
          <h2>Key Events</h2>
          <p>Join us in making a difference through prayer, peaceful witness, and education in our community.</p>
          
          <div className="events-grid">
            <div className="event-tile event-tile-youth">
              <div className="event-tile-icon">
                <i className="fas fa-pray"></i>
              </div>
              <h3>40 Days for Life</h3>
              <p>Join a peaceful, prayerful vigil to end abortion—40 days of prayer &amp; fasting, community outreach, and a loving presence outside abortion facilities. The next coordinated campaign runs <strong>September 23 – November 1, 2026</strong>.</p>
              <a href="/events/40-days-for-life" className="btn btn-primary">Learn More</a>
              <p className="event-note">Mississauga vigil: 101 Queensway Blvd · 7 am–7 pm daily · 40DaysForLife.com</p>
            </div>
            
            <div className="event-tile">
              <div className="event-tile-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Life Chain</h3>
              <p>Stand for life in a one-hour, prayerful, public witness held across ~350 Canadian locations each year. Mississauga and Brampton host multiple parish-led locations.</p>
              <a href="/events/life-chain" className="btn btn-primary">Find a Location</a>
              <p className="event-note">Sunday, October 4, 2026 · 2–3 pm in most locations · lifechain.ca</p>
            </div>
            
            <div className="event-tile">
              <div className="event-tile-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Resources</h3>
              <p>Learn the facts on human development, ethics, and the medical reality of abortion and euthanasia from a pro-life perspective.</p>
              <a href="/resources/abortion-euthanasia-101" className="btn btn-primary">Start Learning</a>
              <p className="event-note">Content curated from RTLMB's Abortion & Euthanasia 101.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="donate">
        <div className="container">
          <div className="donate-content">
            <h2>Support Our Mission</h2>
            <p>Your donation helps us continue our vital work protecting life and supporting families in our community.</p>
            
            <div className="donation-form-container">
              <div className="donation-form-wrapper">
                <script 
                  id="ch_cdn_embed" 
                  type="text/javascript" 
                  src="https://www.canadahelps.org/secure/js/cdf_embed.2.js" 
                  charSet="utf-8" 
                  data-language="en" 
                  data-page-id="136674" 
                  data-root-url="https://www.canadahelps.org" 
                  data-formtype="1" 
                  data-cfasync="false"
                ></script>
              </div>
            </div>
            
            <div className="donation-note">
              <p><i className="fas fa-info-circle"></i> All donations are processed securely through CanadaHelps.org. Tax receipts are automatically generated.</p>
            </div>

            <div className="instagram-promo">
              <h3>Follow us on Instagram</h3>
              <p>For creative updates and special funding opportunities that support our work in the community.</p>
              <a href="https://www.instagram.com/righttolifemb/" className="instagram-promo-cta" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                @righttolifemb
              </a>
            </div>

            <p className="donate-newsletter-link">Stay informed: <a href="#newsletter">join our newsletter</a> for event updates and AGM details.</p>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Right to Life Mississauga Brampton</h3>
              <p>Protecting life from fertilization to natural death and promoting a culture of life in our communities.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#donate">Donate</a></li>
                <li><a href="/events/40-days-for-life">40 Days for Life</a></li>
                <li><a href="/events/life-chain">Life Chain</a></li>
                <li><a href="/resources/abortion-euthanasia-101">Resources</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p><i className="fas fa-envelope"></i> info@rtlmb.ca</p>
              <p><i className="fas fa-phone"></i> 1-800-395-HELP</p>
              <p><i className="fas fa-map-marker-alt"></i> Mississauga & Brampton, ON</p>
            </div>
            
            <div className="footer-section">
              <h4>Follow us</h4>
              <a
                href="https://www.instagram.com/righttolifemb/"
                className="footer-instagram-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span>
                  Follow <strong>@righttolifemb</strong> on Instagram
                </span>
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-youth-cta">40 Days for Life — <a href="/events/40-days-for-life">Sept 23 – Nov 1, 2026 · details</a></p>
            <p>&copy; 2024 Right to Life Mississauga Brampton. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
