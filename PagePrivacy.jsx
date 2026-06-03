/* eslint-disable */
// Privacy Notice page.
// Body copy generated with Termly's Privacy Policy Generator and supplied by the site owner.
// A few details still need to be filled in by the owner (marked with "[ ]").
function PagePrivacy({ onNavigate }) {
const UPDATED = "__________";
return (
<main data-screen-label="Privacy">
<section className="page-hero">
<div className="grid-bg full-mask"></div>
<div className="container">
<Eyebrow>Legal / 01</Eyebrow>
<h1 className="display-xl" style={{ marginTop: 24, maxWidth: "16ch" }}>
<SplitText text="Privacy Notice." />
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
This Privacy Notice for Immersive Digital Co ("we", "us", or "our")
describes how and why we might access, collect, store, use, and/or share
("process") your personal information when you use our services, including
when you visit our website, engage us for a project, or otherwise contact us.
</LegalIntro>
</Reveal>

<LegalSection n="00" title="Questions or concerns?">
Reading this Privacy Notice will help you understand your privacy rights and
choices. We are responsible for making decisions about how your personal
information is processed. If you do not agree with our policies and practices,
please do not use our Services.
</LegalSection>

<LegalSection n="01" title="Summary of key points">
We process the personal information you provide to us (such as name, email, and
phone number) and some information collected automatically (such as IP address
and device characteristics). We do not process sensitive personal information.
We process your information to provide and improve our Services, communicate
with you, for security and fraud prevention, and to comply with law. We may
share information in specific situations described below. Depending on where you
live, you may have certain privacy rights regarding your personal information.
</LegalSection>

<LegalSection n="02" title="What information do we collect">
We collect personal information that you voluntarily provide to us when you
express an interest in obtaining information about us or our products and
Services, when you participate in activities on the Services, or otherwise when
you contact us. We do not process sensitive information. Some information &mdash; such
as your IP address and/or browser and device characteristics &mdash; is collected
automatically when you visit our Services, primarily to maintain security and
operation, and for internal analytics and reporting.
</LegalSection>

<LegalSection n="03" title="How we process your information">
We process your information to provide, improve, and administer our Services,
communicate with you, for security and fraud prevention, and to comply with law.
We may also process your information for other purposes with your consent. We
process your information only when we have a valid legal reason to do so.
</LegalSection>

<LegalSection n="04" title="When and with whom we share">
We may share your personal information in specific situations, including:
business transfers (in connection with a merger, sale of assets, financing, or
acquisition); with affiliates, whom we require to honor this Privacy Notice; and
with business partners to offer you certain products, services, or promotions.
</LegalSection>

<LegalSection n="05" title="Cookies & tracking technologies">
We may use cookies and similar tracking technologies (like web beacons and
pixels) to gather information when you interact with our Services. This site uses
a cookie-consent banner: analytics cookies (Metricool) load only after you click
&ldquo;Accept.&rdquo; If you decline, no analytics cookies are set. You can change your
choice by clearing this site&rsquo;s data in your browser.
</LegalSection>

<LegalSection n="06" title="Social logins">
If you choose to register or log in to our Services using a social media account,
we may receive certain profile information about you from your social media
provider, such as your name and email address. We use this information only for
the purposes described in this notice.
</LegalSection>

<LegalSection n="07" title="International transfers">
Your information may be transferred to, stored by, and processed by us and by the
third parties with whom we may share your personal information, including in
countries other than your own. We take measures to protect your personal
information in accordance with this Privacy Notice and applicable law.
</LegalSection>

<LegalSection n="08" title="How long we keep your information">
We keep your personal information only for as long as necessary for the purposes
set out in this Privacy Notice, unless a longer retention period is required or
permitted by law. When we no longer have a legitimate business need to process
it, we will delete or anonymize it.
</LegalSection>

<LegalSection n="09" title="Information from minors">
We do not knowingly collect, solicit data from, or market to children under 18
years of age. By using the Services, you represent that you are at least 18 or
that you are the parent or guardian of a minor and consent to their use of the
Services.
</LegalSection>

<LegalSection n="10" title="Your privacy rights">
Depending on your country, province, or state of residence, you may have the
right to request access to, correction of, or deletion of your personal
information, and to withdraw your consent at any time. To make a request, contact
us using the details below.
</LegalSection>

<LegalSection n="11" title="Do-Not-Track features">
Most browsers include a Do-Not-Track (&ldquo;DNT&rdquo;) feature. As no uniform standard for
recognizing DNT signals has been finalized, we do not currently respond to DNT
browser signals. If a standard is adopted in the future, we will update this
notice.
</LegalSection>

<LegalSection n="12" title="Updates to this notice">
We may update this Privacy Notice from time to time. The updated version will be
indicated by an updated &ldquo;Last updated&rdquo; date. We encourage you to review this
notice frequently to stay informed about how we protect your information.
</LegalSection>

<LegalSection n="13" title="Contact & your data">
If you have questions or comments about this notice, or to request to review,
update, or delete your personal information, email{" "}
<a href="mailto:immersivedigital.wy@gmail.com" style={{ color: "#C6F84E" }}>immersivedigital.wy@gmail.com</a>{" "}
or call <a href="tel:+13077613160" style={{ color: "#C6F84E" }}>307-761-3160</a>.
</LegalSection>

<Reveal delay={120}>
<p style={{ color: "#5a5a5a", fontSize: 13, lineHeight: 1.7, marginTop: 48, fontStyle: "italic" }}>
This Privacy Notice was generated using Termly's Privacy Policy Generator. A few
details still need to be completed by the site owner: the &ldquo;Last updated&rdquo; date and
a postal contact address.
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
