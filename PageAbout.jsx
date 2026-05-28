/* eslint-disable */
function PageAbout({ onNavigate }) {
  return (
    <main data-screen-label="04 About">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Operator / 001</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24, maxWidth: "16ch" }}>
            <SplitText text="One operator." />
            <br />
            <span style={{ color: "#C6F84E" }}>
              <MaskReveal delay={400}>Six lines.</MaskReveal>
            </span>
          </h1>
          <Coords label="Operator file" />
        </div>
      </section>

      <section style={{ padding: "96px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <p style={{ fontSize: 22, lineHeight: 1.55, color: "#fff", maxWidth: "44ch", marginTop: 0, fontWeight: 500, letterSpacing: "-0.005em" }}>
              I'm Arianna. I run Immersive Digital Co out of Laramie, Wyoming.
              I shoot drone, real estate, and 360 photography. I build mobile-first
              websites. I audit broken ones. I plan social calendars for businesses
              that don't have the time to think about Instagram.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#888", maxWidth: "48ch", marginTop: 28 }}>
              The reason this works under one roof: a brand stays consistent because the
              work never leaves one set of hands. Five vendors charge five invoices and
              produce five styles. One operator produces one.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 12 }}>
              <Btn onClick={() => onNavigate("contact")}>Book a call</Btn>
              <button className="btn ghost" onClick={() => onNavigate("work")}>See the work →</button>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Tilt max={3}>
              <PhotoSlot ratio="4 / 5" src="arianna-headshot.jpg" alt="Arianna · Founder of Immersive Digital Co" focal="center top" label="OPERATOR_001 · INCOMING" caption="ARIANNA · LARAMIE · WY · 2026" />
            </Tilt>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              <Credential code="FAA-107" label="FAA Part 107 · Active commercial drone license" />
              <Credential code="REA-WY" label="Realtor® · Wyoming · Active" />
              <Credential code="GEO-AC" label="Albany County resident · 2018 → present" />
              <Credential code="OPS-LX" label="Operating since 2022 · 120+ listings shot" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE / OPERATING SYSTEM */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A", position: "relative" }}>
        <div className="container">
          <Eyebrow>How I work · OS 26</Eyebrow>
          <h2 className="display-m" style={{ marginTop: 20, marginBottom: 56, maxWidth: "20ch" }}>
            <SplitText text="The operating system." />
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative" }}>
            <div style={{
              position: "absolute", top: 24, left: "4%", right: "4%",
              height: 1,
              background: "linear-gradient(to right, #C6F84E 0%, #C6F84E 75%, transparent 100%)",
            }}></div>

            {[
              ["01", "Intro Call",       "30 minutes. You describe the project. I quote a fixed price."],
              ["02", "Shoot or Build",   "Drone, photo, audit, or development. I show up on time."],
              ["03", "Delivery",         "Files, site, or fix list back. 24 hours to 14 days."],
              ["04", "Live",             "Listing closes. Site launches. Audit gets actioned."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "#0A0A0A",
                    border: "1.5px solid #C6F84E",
                    color: "#C6F84E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono, var(--font-sans))",
                    fontSize: 13, fontWeight: 500, letterSpacing: "0.08em",
                    marginBottom: 24,
                  }}>{n}</div>
                  <div style={{ color: "#C6F84E", fontFamily: "var(--font-mono, var(--font-sans))", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase" }}>{t}</div>
                  <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.55, marginTop: 8 }}>{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <Eyebrow>Client log · selected</Eyebrow>
          <h2 className="display-m" style={{ marginTop: 20, marginBottom: 56 }}>
            <SplitText text="What clients say." />
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Reveal>
              <Quote
                text="She made our listing photos look like a magazine spread. Sold in 6 days."
                who="Alex Morgan" where="Coldwell Banker · Laramie"
              />
            </Reveal>
            <Reveal delay={140}>
              <Quote
                text="Got our build's weekly drone progress on Fridays for four months. Used every single one."
                who="Mike R." where="GC · West Laramie"
              />
            </Reveal>
            <Reveal delay={260}>
              <Quote
                text="Audit was honest. Fixed three things she pointed out the same week. No upsell."
                who="Local Retail Brand" where="Small business · Albany County"
              />
            </Reveal>
            <Reveal delay={380}>
              <Quote
                text="Mapped 80 acres in 90 minutes. The PDF map paid for the shoot the next day."
                who="Ranch Owner" where="Aerial survey client"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

function Credential({ code, label }) {
  return (
    <div className="panel" style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 14 }}>
      <span className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.18em" }}>{code}</span>
      <span style={{ color: "#888", fontSize: 13 }}>{label}</span>
    </div>
  );
}

function Quote({ text, who, where }) {
  return (
    <div className="panel" style={{ padding: "36px 36px 28px" }}>
      <span style={{
        color: "#C6F84E", fontWeight: 700, fontSize: 56,
        lineHeight: 0.7, fontStyle: "italic",
        transform: "skewX(-12deg)",
        display: "inline-block",
      }}>"</span>
      <p style={{ color: "#fff", fontWeight: 500, fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.005em", marginTop: 20 }}>
        {text}
      </p>
      <div style={{ marginTop: 24 }}>
        <div className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase" }}>{who}</div>
        <div style={{ color: "#888", fontSize: 13, marginTop: 4 }}>{where}</div>
      </div>
    </div>
  );
}

window.PageAbout = PageAbout;
