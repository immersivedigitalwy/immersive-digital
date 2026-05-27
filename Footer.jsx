/* eslint-disable */
function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div>
            <Wordmark size={20} />
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginTop: 20, maxWidth: "34ch" }}>
              Drone, photo, web, brand. One vendor. Wyoming based.
              FAA Part 107 licensed. Serving Albany County and the Front Range.
            </p>
            <div className="mono" style={{ color: "#5a5a5a", fontSize: 11, marginTop: 26, letterSpacing: "0.16em" }}>
              41.3114° N&nbsp;&nbsp;105.5911° W
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><a onClick={() => onNavigate("service:drone")} href="/services/drone">Drone aerial</a></li>
              <li><a onClick={() => onNavigate("service:real-estate")} href="/services/real-estate">Real estate photo</a></li>
              <li><a onClick={() => onNavigate("service:360")} href="/services/360">360 / Immersive</a></li>
              <li><a onClick={() => onNavigate("service:brand")} href="/services/brand">Brand · audit + refresh</a></li>
              <li><a onClick={() => onNavigate("service:web-build")} href="/services/web-build">Web build</a></li>
              <li><a onClick={() => onNavigate("service:social-plan")} href="/services/social-plan">Social plan</a></li>
            </ul>
          </div>

          <div>
            <h4>Studio</h4>
            <ul>
              <li><a onClick={() => onNavigate("work")} href="/work">Recent work</a></li>
              <li><a onClick={() => onNavigate("about")} href="/about">About Arianna</a></li>
              <li><a onClick={() => onNavigate("contact")} href="/contact">Book a call</a></li>
              <li><a href="mailto:immersivedigital.wy@gmail.com">Email</a></li>
              <li><a href="tel:+13077613160">307-761-3160</a></li>
            </ul>
            <h4 style={{ marginTop: 28 }}>Follow</h4>
            <ul className="social-list">
              <li>
                <a href="https://instagram.com/immersivedigitalco" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/immersivedigitalco" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 8h2.5V5H14c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9c0-.55.45-1 1-1z" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/immersivedigitalco" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="7" y1="10" x2="7" y2="17" />
                      <circle cx="7" cy="7" r="0.7" fill="currentColor" stroke="none" />
                      <path d="M11 17v-7m0 3c0-1.66 1.34-3 3-3s3 1.34 3 3v4" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Operations</h4>
            <ul>
              <li><a>FAA Part 107 · Active</a></li>
              <li><a>Realtor® · Active</a></li>
              <li><a>CubiCasa Partner · Floor plans</a></li>
              <li><a>Laramie · Albany Co.</a></li>
              <li><a>Front Range Coverage</a></li>
              <li><a href="mailto:immersivedigital.wy@gmail.com">immersivedigital.wy@gmail.com</a></li>
              <li><a href="tel:+13077613160">307-761-3160</a></li>
            </ul>
          </div>
        </div>

        <div className="rule"></div>

        <div className="gigantic">
          <span>IMMERSIVE</span><span className="lime">.</span>
        </div>

        <div className="end">
          <div>© 2026 IMMERSIVE DIGITAL CO · BUILT IN WYOMING</div>
          <div style={{ display: "flex", gap: 22 }}>
            <a>PRIVACY</a><a>TERMS</a><a>SITEMAP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
