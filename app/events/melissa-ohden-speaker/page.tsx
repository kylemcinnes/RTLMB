import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melissa Ohden — Speaker Evening | St. Joseph\'s Centre of Hope | RTLMB',
  description:
    'Hear Melissa Ohden, abortion survivor and founder of the Abortion Survivors Network, April 8, 2026 in Mississauga. Free tickets; register at sjcentre.ca.',
};

export default function MelissaOhdenSpeakerPage() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <h2>RTLMB</h2>
            </a>
          </div>
          <div className="nav-links">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <div className="nav-dropdown">
              <a href="#" className="nav-dropdown-toggle">
                Events <i className="fas fa-chevron-down"></i>
              </a>
              <div className="nav-dropdown-menu">
                <a href="/events/melissa-ohden-speaker" className="nav-dropdown-youth">
                  Melissa Ohden Evening
                </a>
                <a href="/events/40-days-for-life">40 Days for Life</a>
                <a href="/events/life-chain">Life Chain</a>
                <a href="/resources/abortion-euthanasia-101">Resources</a>
              </div>
            </div>
            <a href="/#donate" className="nav-cta">
              Donate Now
            </a>
          </div>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">An Evening with Melissa Ohden</h1>
            <p className="hero-subtitle">
              A rare chance to hear firsthand from a late-term abortion survivor—hosted by St. Joseph&apos;s Centre of Hope for Women. Speaker series with desserts and coffee. Wednesday, April 8, 2026 · 7:00–9:00 p.m. · Mississauga.
            </p>
            <div className="hero-cta">
              <a
                href="https://sjcentre.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Register for free tickets at sjcentre.ca (opens in new tab)"
              >
                <i className="fas fa-ticket-alt"></i> Register for free tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-card event-poster-card">
                <h2>
                  <i className="fas fa-image"></i> Event invitation
                </h2>
                <p className="note">
                  Official poster from St. Joseph&apos;s Centre of Hope for Women (includes details and QR code for registration).
                </p>
                <figure className="event-poster-figure">
                  <img
                    src="/images/melissa-ohden-st-josephs-speaker-2026.png"
                    alt="St. Joseph's Centre of Hope for Women speaker series poster: Melissa Ohden, April 8 2026, John Paul II Polish Cultural Centre Mississauga"
                    width={800}
                    height={1131}
                    loading="lazy"
                    className="event-poster-img"
                  />
                </figure>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-microphone"></i> Why come?
                </h2>
                <p>
                  We often hear that late-term abortion is rare and that children do not survive it. Melissa Ohden brings documented reality and lived experience into the room. She learned about her birth mother&apos;s abortion attempt at age fourteen; medical records corroborate the procedure and her survival.
                </p>
                <p>
                  As a social worker and founder of the <strong>Abortion Survivors Network</strong>, she speaks nationally on what it means to survive, to heal, and to extend love and forgiveness. Whether you work in ministry, healthcare, education, or simply want to understand the human stakes of abortion policy, this evening will challenge slogans with a personal story you will not forget.
                </p>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-calendar-alt"></i> When &amp; where
                </h2>
                <ul className="feature-list">
                  <li>
                    <i className="fas fa-check"></i> <strong>Date:</strong> Wednesday, April 8, 2026
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>Time:</strong> 7:00 p.m. to 9:00 p.m.
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>Venue:</strong> John Paul II Polish Cultural Centre
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>Address:</strong> 4300 Cawthra Road, Mississauga, Ontario
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-ticket-alt"></i> Tickets &amp; donations
                </h2>
                <p>
                  <strong>Tickets are free</strong>, but you must register to receive a ticket for entry. Visit{' '}
                  <a href="https://sjcentre.ca" target="_blank" rel="noopener noreferrer">
                    sjcentre.ca
                  </a>{' '}
                  to order your ticket.
                </p>
                <p>
                  The host will gratefully accept voluntary donations that evening in support of{' '}
                  <strong>St. Joseph&apos;s Centre of Hope for Women</strong>.
                </p>
                <div className="cta-container">
                  <a href="https://sjcentre.ca" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i> Go to sjcentre.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h3>Host organization</h3>
                <p>
                  <strong>St. Joseph&apos;s Centre of Hope for Women</strong> serves women with practical and spiritual support. This speaker series is part of their outreach to the wider community.
                </p>
                <a href="https://sjcentre.ca" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fas fa-globe"></i> sjcentre.ca
                </a>
              </div>
              <div className="sidebar-card">
                <h3>RTLMB</h3>
                <p>
                  Right to Life Mississauga Brampton promotes this opportunity as part of our mission to educate and build a culture of life in Peel Region.
                </p>
                <a href="/#events" className="btn btn-outline">
                  More RTLMB events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#donate">Donate</a>
                </li>
                <li>
                  <a href="/events/melissa-ohden-speaker">Melissa Ohden Evening</a>
                </li>
                <li>
                  <a href="/events/40-days-for-life">40 Days for Life</a>
                </li>
                <li>
                  <a href="/events/life-chain">Life Chain</a>
                </li>
                <li>
                  <a href="/resources/abortion-euthanasia-101">Resources</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                <i className="fas fa-envelope"></i> info@rtlmb.ca
              </p>
              <p>
                <i className="fas fa-phone"></i> 1-800-395-HELP
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Mississauga &amp; Brampton, ON
              </p>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
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
