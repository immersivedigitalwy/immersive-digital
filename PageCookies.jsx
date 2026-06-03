/* eslint-disable */
// Cookie Policy page.
// Body copy generated with Termly's Cookie Consent Manager and supplied by the site owner.
function PageCookies({ onNavigate }) {
const UPDATED = "June 3, 2026";
return (
<main data-screen-label="Cookies">
<section className="page-hero">
<div className="grid-bg full-mask"></div>
<div className="container">
<Eyebrow>Legal / 03</Eyebrow>
<h1 className="display-xl" style={{ marginTop: 24, maxWidth: "16ch" }}>
<SplitText text="Cookie Policy." />
</h1>
<p style={{ color: "#888", fontSize: 14, marginTop: 20, letterSpacing: "0.04em" }}>
Last updated: {UPDATED}
</p>
<Coords label="Cookies file" />
</div>
</section>

<section style={{ padding: "72px 0 120px", borderTop: "1px solid #1A1A1A" }}>
<div className="container" style={{ maxWidth: 760 }}>
<Reveal>
<LegalIntro>
This Cookie Policy explains how Immersive Digital Co ("Company", "we",
"us", and "our") uses cookies and similar technologies to recognize you
when you visit our website at{" "}
<a href="https://immersivedigital.co" style={{ color: "#C6F84E" }}>immersivedigital.co</a>.
It explains what these technologies are and why we use them, as well as your
rights to control our use of them.
</LegalIntro>
</Reveal>

<LegalSection n="01" title="What are cookies?">
Cookies are small data files that are placed on your computer or mobile device
when you visit a website. They are widely used to make websites work, or work
more efficiently, as well as to provide reporting information. Cookies set by
the site owner are &ldquo;first-party&rdquo; cookies; cookies set by others are
&ldquo;third-party&rdquo; cookies, which enable features such as analytics and
interactive content.
</LegalSection>

<LegalSection n="02" title="Why do we use cookies?">
We use first- and third-party cookies for several reasons. Some are required for
technical reasons for our site to operate (&ldquo;essential&rdquo; or
&ldquo;strictly necessary&rdquo; cookies). Others let us understand how visitors
use the site so we can improve it. On this site, analytics cookies (Metricool)
are non-essential and load only after you accept them.
</LegalSection>

<LegalSection n="03" title="How can I control cookies?">
You have the right to decide whether to accept or reject non-essential cookies.
This site shows a consent banner the first time you visit: choose
&ldquo;Accept&rdquo; to allow analytics cookies, or &ldquo;Decline&rdquo; to load
none. Essential functions still work either way. You can change your choice later
by clearing this site&rsquo;s data in your browser. If you decline, some
analytics-dependent features may be limited.
</LegalSection>

<LegalSection n="04" title="Controlling cookies in your browser">
You can also set or amend your web browser controls to accept or refuse cookies.
As the steps vary by browser, check your browser&rsquo;s help menu &mdash; Chrome,
Safari, Firefox, Edge, and Opera all provide cookie controls. Many advertising
networks also offer ways to opt out of targeted advertising through the Digital
Advertising Alliance, the DAA of Canada, and the European Interactive Digital
Advertising Alliance.
</LegalSection>

<LegalSection n="05" title="Other tracking technologies">
Cookies are not the only way to recognize visitors. We may use similar
technologies such as web beacons (sometimes called &ldquo;tracking pixels&rdquo; or
&ldquo;clear gifs&rdquo;) &mdash; tiny graphics files that help us understand site
traffic and measure the success of campaigns. These often rely on cookies to
function, so declining cookies may impair them.
</LegalSection>

<LegalSection n="06" title="Targeted advertising">
Third parties may serve cookies through our site to deliver advertising relevant
to your interests and to measure its effectiveness. The information collected
through this process does not, on its own, identify you by name or contact
details unless you choose to provide them.
</LegalSection>

<LegalSection n="07" title="Updates to this policy">
We may update this Cookie Policy from time to time to reflect changes to the
cookies we use or for other operational, legal, or regulatory reasons. The date
at the top of this policy indicates when it was last updated. Please revisit it
regularly to stay informed.
</LegalSection>

<LegalSection n="08" title="Further information">
If you have questions about our use of cookies or other technologies, email{" "}
<a href="mailto:immersivedigital.wy@gmail.com" style={{ color: "#C6F84E" }}>immersivedigital.wy@gmail.com</a>{" "}
or call <a href="tel:+13077613160" style={{ color: "#C6F84E" }}>307-761-3160</a>.
</LegalSection>

<Reveal delay={120}>
<p style={{ color: "#5a5a5a", fontSize: 13, lineHeight: 1.7, marginTop: 48, fontStyle: "italic" }}>
This Cookie Policy was generated using Termly's Cookie Consent Manager.
</p>
<div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
<button className="btn ghost" onClick={() => onNavigate("privacy")}>Privacy Policy &rarr;</button>
<button className="btn ghost" onClick={() => onNavigate("terms")}>Read the Terms &rarr;</button>
<button className="btn ghost" onClick={() => onNavigate("home")}>Back home &rarr;</button>
</div>
</Reveal>
</div>
</section>
</main>
);
}

window.PageCookies = PageCookies;
