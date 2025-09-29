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

      {/* Key Events Section */}
      <section id="events" className="key-events">
        <div className="container">
          <h2>Key Events</h2>
          <p>Join us in making a difference through prayer, peaceful witness, and education in our community.</p>
          
          <div className="events-grid">
            <div className="event-tile">
              <div className="event-tile-icon">
                <i className="fas fa-pray"></i>
              </div>
              <h3>40 Days for Life</h3>
              <p>Join a peaceful, prayerful vigil to end abortion—through 40 days of prayer & fasting, community outreach, and a lawful, loving presence outside abortion facilities.</p>
              <a href="/events/40-days-for-life" className="btn btn-primary">Learn More</a>
              <p className="event-note">Mississauga campaign details are managed on 40DaysForLife.com.</p>
            </div>
            
            <div className="event-tile">
              <div className="event-tile-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Life Chain</h3>
              <p>Stand for life in a one-hour, prayerful, public witness held across ~350 Canadian locations each year.</p>
              <a href="/events/life-chain" className="btn btn-primary">Find a Location</a>
              <p className="event-note">Next Life Chain: Sunday, October 5, 2025 (2–3 pm in most locations—check your city).</p>
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
            
            {/* Newsletter Signup */}
            <div className="newsletter-signup-section" style={{ 
              display: 'block', 
              visibility: 'visible', 
              opacity: 1,
              marginTop: '3rem',
              padding: '2rem',
              background: '#f5f5f5',
              borderRadius: '15px',
              textAlign: 'center',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            } as React.CSSProperties}>
              <h3 style={{ color: '#1c2c4c', marginBottom: '1rem', fontSize: '1.5rem' }}>Stay Connected</h3>
              <p style={{ marginBottom: '2rem', color: '#666' }}>Subscribe to our newsletter for updates on our work and upcoming events.</p>
              
              {/* Mailchimp Embedded Signup Form */}
              <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <style dangerouslySetInnerHTML={{
                  __html: `
                    #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 500px; margin: 0 auto;}
                    #mc_embed_signup h2 { color: #1c2c4c; margin-bottom: 1rem; }
                    #mc_embed_signup .button { background-color: #9b1c31 !important; border: none !important; color: white !important; padding: 10px 20px !important; border-radius: 5px !important; cursor: pointer !important; }
                    #mc_embed_signup .button:hover { background-color: #7a1526 !important; }
                  `
                }} />
                <div id="mc_embed_signup">
                  <form action="https://rtlmb.us19.list-manage.com/subscribe/post?u=45ee4748acda5b1f7c9cb16bf&amp;id=65cd9fff23&amp;f_id=009f34e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                      <h2>Subscribe</h2>
                      <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value="" />
                      </div>
                      <div hidden>
                        <input type="hidden" name="tags" value="24263874" />
                      </div>
                      <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                      </div>
                      <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                        <input type="text" name="b_45ee4748acda5b1f7c9cb16bf_65cd9fff23" tabIndex={-1} value="" />
                      </div>
                      <div className="optionalParent">
                        <div className="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                          <p style={{margin: '10px auto 0', fontSize: '12px', color: '#666'}}>
                            <a href="http://eepurl.com/jogCxw" title="Mailchimp - email marketing made easy and fun">
                              <span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
                                <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                <script dangerouslySetInnerHTML={{
                  __html: `
                    (function($) {
                      window.fnames = new Array(); 
                      window.ftypes = new Array();
                      fnames[0]='EMAIL';ftypes[0]='email';
                      fnames[1]='FNAME';ftypes[1]='text';
                      fnames[2]='LNAME';ftypes[2]='text';
                      fnames[3]='ADDRESS';ftypes[3]='address';
                      fnames[4]='PHONE';ftypes[4]='phone';
                      fnames[5]='BIRTHDAY';ftypes[5]='birthday';
                      fnames[6]='COMPANY';ftypes[6]='text';
                    }(jQuery));
                    var $mcj = jQuery.noConflict(true);
                  `
                }} />
              </div>
            </div>
            
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
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Right to Life Mississauga Brampton. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
