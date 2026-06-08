/* eslint-disable */
// Booking page. Routes each project to the right portal:
//   Real estate  -> HD Photo Hub order page
//   Everything else ->Calendly
const HD_BOOKING_URL = "https://immersivephotography.hd.pics/order";
const CLOUDSPOT_BOOKING_URL = "https://calendly.com/immersivedigital-wy";
function PageContact({ onNavigate }) {
  return (
    <main data-screen-label="05 Book">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Engage / 01</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24, maxWidth: "12ch" }}>
            <SplitText text="Book a call." />
          </h1>
          <p style={{ color: "#888", fontSize: 18, marginTop: 24, maxWidth: "52ch", lineHeight: 1.55 }}>
            Pick your project and I'll send you straight to the right booking page.
            No upsell, no hourly creep, no template proposal deck.
          </p>
          <Coords label="Engagement form" />
        </div>
      </section>

      <section style={{ padding: "72px 0 120px", borderTop: "1px solid #1A1A1A" }}>
        <div className="container auto-stack" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80, alignItems: "start" }}>

          {/* BOOKING PATHS */}
          <div style={{ display: "grid", gap: 28 }}>
            <Reveal>
              <div className="book-block" style={{ padding: 40 }}>
                <Eyebrow>Real estate</Eyebrow>
                <h2 className="display-m" style={{ marginTop: 16 }}>
                  Listing media. Drone included. 24 hour turnaround.
                </h2>
                <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginTop: 16, maxWidth: "48ch" }}>
                  Photo, video, Matterport, and floor plans for agents and brokers.
                  Book the shoot and pick your package on HD Photo Hub.
                </p>
                <div style={{ marginTop: 26 }}>
                  <a className="btn primary" href={HD_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a real estate shoot <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="book-block" style={{ padding: 40 }}>
                <Eyebrow>Everything else</Eyebrow>
                <h2 className="display-m" style={{ marginTop: 16 }}>
                  Drone, 360, brand, web, social, or a consult.
                </h2>
                <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginTop: 16, maxWidth: "48ch" }}>
                  Aerial work, virtual tours, brand and web projects, social plans, or just a
                  30 minute call to scope it out. Grab a time on Calendly.
                </p>
                <div style={{ marginTop: 26 }}>
                  <a className="btn primary" href={CLOUDSPOT_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a call <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* SIDEBAR */}
          <Reveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <SidebarItem label="Email" value="immersivedigital.wy@gmail.com" />
              <SidebarItem label="Phone" value="307-761-3160" />
              <SidebarItem label="Location" value="Laramie, WY · Albany County" />
              <SidebarItem label="Coverage" value="Front Range · S. Wyoming · N. Colorado" />
              <SidebarItem label="Licenses" value="FAA Part 107 · Realtor® · Active" />
              <SidebarItem label="Turnaround" value="24 hr photo · 48 hr drone · 14 day web" />
              <SidebarItem label="Booking" value="Open · June 2026" lime />
            </div>

            <div className="book-block" style={{ padding: 28, marginTop: 32 }}>
              <Eyebrow>Direct line</Eyebrow>
              <h3 style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", marginTop: 14, lineHeight: 1.2 }}>
                Prefer email? Send me your URL —
                <br />
                I'll send the audit back same week.
              </h3>
              <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn primary" href="mailto:immersivedigital.wy@gmail.com?subject=Audit%20my%20site">
                  Email me <span className="arrow">→</span>
                </a>
                <a className="btn ghost" href="tel:+13077613160">
                  307-761-3160
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}

function SidebarItem({ label, value, lime }) {
  return (
    <div style={{ padding: "20px 0", borderBottom: "1px solid #1A1A1A" }}>
      <div className="mono" style={{ color: "#888", fontSize: 10, letterSpacing: "0.20em", textTransform: "uppercase" }}>{label}</div>
      <div style={{ color: lime ? "#C6F84E" : "#fff", fontSize: 16, marginTop: 6, fontWeight: 500 }}>
        {lime && <LimeDot size={6} style={{ marginRight: 8, verticalAlign: "middle" }} />}
        {value}
      </div>
    </div>
  );
}

window.PageContact = PageContact;
