/* eslint-disable */
// Terms & Conditions page.
// NOTE: The copy below is a STANDARD-STRUCTURE PLACEHOLDER, not legal advice.
// Replace the body text with terms generated for your business
// (e.g. Termly / TermsFeed / iubenda) and/or reviewed by a professional.
function PageTerms({ onNavigate }) {
  const UPDATED = "June 2026";
  return (
    <main data-screen-label="Terms">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Legal / 02</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24, maxWidth: "18ch" }}>
            <SplitText text="Terms & Conditions." />
          </h1>
          <p style={{ color: "#888", fontSize: 14, marginTop: 20, letterSpacing: "0.04em" }}>
            Last updated: {UPDATED}
          </p>
          <Coords label="Terms file" />
        </div>
      </section>

      <section style={{ padding: "72px 0 120px", borderTop: "1px solid #1A1A1A" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: "#fff", fontWeight: 500, letterSpacing: "-0.005em", marginBottom: 48 }}>
              These Terms &amp; Conditions govern your use of the Immersive Digital Co
              website and any services booked through it. By using the site you agree
              to these terms.
            </p>
          </Reveal>

          <TermsSection n="01" title="Use of the site">
            You agree to use this site lawfully and not to misuse, disrupt, or attempt
            to gain unauthorized access to it. Content on this site is provided for
            general information about our services.
          </TermsSection>

          <TermsSection n="02" title="Services & bookings">
            Project quotes, scheduling, and deliverables are agreed on a per-project
            basis. Bookings made through third-party portals (such as CloudSpot and
            HD Photo Hub) are also subject to those providers&rsquo; terms.
          </TermsSection>

          <TermsSection n="03" title="Intellectual property">
            All branding, text, images, and code on this site are owned by Immersive
            Digital Co unless otherwise noted, and may not be reused without permission.
          </TermsSection>

          <TermsSection n="04" title="Payment & cancellation">
            Payment terms, deposits, and cancellation or rescheduling policies are set
            out in your individual project agreement.
          </TermsSection>

          <TermsSection n="05" title="Limitation of liability">
            The site is provided &ldquo;as is.&rdquo; To the extent permitted by law, we are not
            liable for any indirect or consequential loss arising from use of the site.
          </TermsSection>

          <TermsSection n="06" title="Changes & contact">
            We may update these terms from time to time. Questions? Email{" "}
            <a href="mailto:immersivedigital.wy@gmail.com" style={{ color: "#C6F84E" }}>immersivedigital.wy@gmail.com</a>{" "}
            or call <a href="tel:+13077613160" style={{ color: "#C6F84E" }}>307-761-3160</a>.
          </TermsSection>

          <Reveal delay={120}>
            <p style={{ color: "#5a5a5a", fontSize: 13, lineHeight: 1.7, marginTop: 48, fontStyle: "italic" }}>
              This page is provided for general information and is not legal advice.
              Replace this placeholder with terms tailored to your business.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn ghost" onClick={() => onNavigate("privacy")}>Read the Privacy Policy &rarr;</button>
              <button className="btn ghost" onClick={() => onNavigate("home")}>Back home &rarr;</button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function TermsSection({ n, title, children }) {
  return (
    <Reveal>
      <div style={{ padding: "32px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase" }}>
          {n} &middot; {title}
        </div>
        <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginTop: 14, maxWidth: "62ch" }}>
          {children}
        </p>
      </div>
    </Reveal>
  );
}

window.PageTerms = PageTerms;
