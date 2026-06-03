/* eslint-disable */
// Privacy Policy page.
// NOTE: The copy below is a STANDARD-STRUCTURE PLACEHOLDER, not legal advice.
// Replace the body text with a policy generated for your business
// (e.g. Termly / TermsFeed / iubenda) and/or reviewed by a professional.
function PagePrivacy({ onNavigate }) {
  const UPDATED = "June 2026";
  return (
    <main data-screen-label="Privacy">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Legal / 01</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24, maxWidth: "16ch" }}>
            <SplitText text="Privacy Policy." />
          </h1>
          <p style={{ color: "#888", fontSize: 14, marginTop: 20, letterSpacing: "0.04em" }}>
            Last updated: {UPDATED}
          </p>
          <Coords label="Privacy file" />
        </div>
      </section>

      <section style={{ padding: "72px 0 120px", borderTop: "1px solid #1A1A1A" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <LegalIntro>
              This Privacy Policy explains how Immersive Digital Co ("we", "us")
              collects, uses, and protects information when you visit this website.
              By using the site you agree to the practices described here.
            </LegalIntro>
          </Reveal>

          <LegalSection n="01" title="Information we collect">
            We collect information you provide directly &mdash; such as your name, email,
            and phone number when you contact us or book a project. We also collect
            limited technical and usage data automatically (for example, pages viewed)
            through analytics, but only after you accept cookies.
          </LegalSection>

          <LegalSection n="02" title="Cookies & analytics">
            This site uses a cookie-consent banner. Analytics cookies (Metricool) load
            only after you click &ldquo;Accept.&rdquo; If you decline, no analytics cookies
            are set. You can change your choice by clearing this site&rsquo;s data in your browser.
          </LegalSection>

          <LegalSection n="03" title="How we use information">
            We use the information to respond to enquiries, schedule and deliver work,
            send project communications, and improve the site. We do not sell your
            personal information.
          </LegalSection>

          <LegalSection n="04" title="Third-party services">
            We use third-party tools for booking and analytics (for example CloudSpot,
            HD Photo Hub, and Metricool). These providers process data under their own
            privacy terms.
          </LegalSection>

          <LegalSection n="05" title="Your rights">
            You may request access to, correction of, or deletion of your personal
            information. To make a request, contact us using the details below.
          </LegalSection>

          <LegalSection n="06" title="Contact">
            Questions about this policy? Email{" "}
            <a href="mailto:immersivedigital.wy@gmail.com" style={{ color: "#C6F84E" }}>immersivedigital.wy@gmail.com</a>{" "}
            or call <a href="tel:+13077613160" style={{ color: "#C6F84E" }}>307-761-3160</a>.
          </LegalSection>

          <Reveal delay={120}>
            <p style={{ color: "#5a5a5a", fontSize: 13, lineHeight: 1.7, marginTop: 48, fontStyle: "italic" }}>
              This page is provided for general information and is not legal advice.
              Replace this placeholder with a policy tailored to your business.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn ghost" onClick={() => onNavigate("terms")}>Read the Terms &rarr;</button>
              <button className="btn ghost" onClick={() => onNavigate("home")}>Back home &rarr;</button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function LegalIntro({ children }) {
  return (
    <p style={{ fontSize: 20, lineHeight: 1.55, color: "#fff", fontWeight: 500, letterSpacing: "-0.005em", marginBottom: 48 }}>
      {children}
    </p>
  );
}

function LegalSection({ n, title, children }) {
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

window.PagePrivacy = PagePrivacy;
