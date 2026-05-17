import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toronto March for Life | RTLMB',
  description:
    'Join the Toronto March for Life—rally, march, and workshops. Saturday May 23, 2026 at Queen\'s Park. Details at torontomarchforlife.ca.',
};

export default function TorontoMarchForLifePage() {
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
                <a href="/events/toronto-march-for-life" className="nav-dropdown-youth">
                  Toronto March for Life
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
            <h1 className="hero-title">Toronto March for Life</h1>
            <p className="hero-subtitle">
              Stand with thousands in Canada&apos;s largest city for the annual rally and march—then deepen your advocacy with optional afternoon workshops.{' '}
              <strong>Saturday, May 23, 2026</strong> · Queen&apos;s Park, Toronto.
            </p>
            <div className="hero-cta">
              <a
                href="https://torontomarchforlife.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Toronto March for Life official site (opens in new tab)"
              >
                <i className="fas fa-external-link-alt"></i> Official website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="content-card">
                <h2>
                  <i className="fas fa-bullhorn"></i> Why march?
                </h2>
                <p>
                  The{' '}
                  <a href="https://torontomarchforlife.ca/" target="_blank" rel="noopener noreferrer">
                    Toronto March for Life
                  </a>{' '}
                  is a peaceful, family-friendly public witness: a chance to pray, listen to speakers, and walk together through downtown Toronto in solidarity with every child whose life is threatened by abortion.
                </p>
                <p>
                  From Mississauga and Brampton, Toronto is a short trip—and your presence matters. Whether you come with your parish, your school club, or on your own, you help show Ontario that the pro-life movement is young, diverse, and unafraid to speak the truth in love.
                </p>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-calendar-alt"></i> Schedule (May 23, 2026)
                </h2>
                <p className="note">
                  Morning worship options (including a Protestant prayer service and Mass at St. Basil&apos;s, 50 St. Joseph Street, both at 9:00 a.m.) are listed on the official site—confirm times before you travel.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="fas fa-check"></i> <strong>11:00 a.m.</strong> — Gathering
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>11:15 a.m.</strong> — Rally and speeches
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>12:00 p.m.</strong> — March through downtown Toronto
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>1:15 p.m.</strong> — Workshop doors open; lunch (advance registration required)
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>2:30 p.m.</strong> — Workshops begin
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <strong>4:30 p.m.</strong> — Workshops end
                  </li>
                </ul>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-map-marker-alt"></i> Location
                </h2>
                <p>
                  <strong>Queen&apos;s Park</strong> — front lawn of the Legislative Assembly of Ontario.
                </p>
                <p>1 Queen&apos;s Park Circle, Toronto, ON</p>
                <p>RTLMB encourages carpooling and transit; allow extra time for city traffic and security lines.</p>
              </div>

              <div className="content-card">
                <h2>
                  <i className="fas fa-bus"></i> Workshops, bus &amp; updates
                </h2>
                <p>
                  Register for workshops, sign up for email updates, and explore bus registration through the official organizers—everything is centralized on their site.
                </p>
                <div className="cta-container">
                  <a href="https://torontomarchforlife.ca/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i> torontomarchforlife.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card">
                <h3>Official information</h3>
                <p>Schedules, speaker lists, and registration forms may change. Always verify details on the Toronto March for Life website.</p>
                <a href="https://torontomarchforlife.ca/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fas fa-globe"></i> Visit official site
                </a>
              </div>
              <div className="sidebar-card">
                <h3>RTLMB</h3>
                <p>
                  Right to Life Mississauga Brampton promotes this day as a flagship regional opportunity for our supporters to witness publicly for life.
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
                  <a href="/events/toronto-march-for-life">Toronto March for Life</a>
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
