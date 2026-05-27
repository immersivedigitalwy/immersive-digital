/* eslint-disable */
// PageServices — overview list of all service lines.
// Service data comes from window.SERVICES_DATA (services.jsx).
// Clicking a row navigates to that service's detail page.

function PageServices({ onNavigate }) {
  const all = window.SERVICES_DATA || [];
  return (
    <main data-screen-label="02 Services">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Catalog / 06 lines</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24, maxWidth: "12ch" }}>
            <SplitText text="Services." />
          </h1>
          <p style={{ color: "#888", fontSize: 18, marginTop: 24, maxWidth: "52ch", lineHeight: 1.55 }}>
            Six service lines, one operator. Mix what you need. Pricing is flat and quoted in
            the intro call — no hourly creep, no upsell. Tap any line for the full breakdown.
          </p>
          <Coords label="Catalog / index" />
        </div>
      </section>

      {all.map((s, i) => (
        <ServiceBlock key={s.id} svc={s} flip={i % 2 === 1} onNavigate={onNavigate} />
      ))}

      <section style={{ padding: "140px 0", textAlign: "center", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <Eyebrow>Engage</Eyebrow>
          <h2 className="display-l" style={{ marginTop: 24 }}>
            <SplitText text="Not sure which lines you need?" />
          </h2>
          <p style={{ color: "#888", fontSize: 17, marginTop: 22 }}>Book the intro call. I'll quote a fixed price.</p>
          <div style={{ marginTop: 32 }}>
            <MagneticButton onClick={() => onNavigate("contact")} className="btn primary">
              Book a 30 min consult <span className="arrow">→</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceBlock({ svc, flip, onNavigate }) {
  return (
    <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
        direction: flip ? "rtl" : "ltr",
      }}>
        <div style={{ direction: "ltr" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <span className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em" }}>{svc.num} / 06</span>
              <div className="rule" style={{ flex: 1, height: 1, maxWidth: 80 }}></div>
              <span className="mono" style={{ color: "#888", fontSize: 10, letterSpacing: "0.24em" }}>{svc.tag}</span>
            </div>

            <h2 className="display-m">
              <SplitText text={svc.title} />
            </h2>

            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.65, marginTop: 26, maxWidth: "46ch" }}>
              {svc.body}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "36px 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 24px" }}>
              {svc.bullets.map(b => (
                <li key={b} style={{ display: "flex", alignItems: "baseline", gap: 12, color: "#fff", fontSize: 14 }}>
                  <LimeDot size={5} style={{ flexShrink: 0, marginTop: 2 }} /> <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <MagneticButton onClick={() => onNavigate(`service:${svc.id}`)} className="btn primary">
                Open {svc.label} <span className="arrow">→</span>
              </MagneticButton>
              <button className="btn ghost" onClick={() => onNavigate("contact")}>Book this</button>
              <span style={{ color: "#C6F84E", fontFamily: "var(--font-mono, var(--font-sans))", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {svc.price}
              </span>
            </div>
          </Reveal>
        </div>

        <div style={{ direction: "ltr" }}>
          <Reveal delay={200}>
            <Tilt max={5}>
              <a
                onClick={() => onNavigate(`service:${svc.id}`)}
                style={{ display: "block", cursor: "pointer" }}
              >
                <div className="panel" style={{
                  aspectRatio: "4 / 5",
                  padding: 36,
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  position: "relative", background: "linear-gradient(135deg, #0E0E0E, #050505)",
                }}>
                  <Crosshairs />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span className="mono" style={{ color: "#C6F84E", fontSize: 10, letterSpacing: "0.24em" }}>
                      SERVICE_{svc.num}
                    </span>
                    <span className="mono" style={{ color: "#888", fontSize: 10, letterSpacing: "0.24em", textAlign: "right" }}>
                      {svc.coord}
                    </span>
                  </div>

                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={svc.icon} alt="" style={{ width: "55%", maxWidth: 260 }} />
                  </div>

                  <div>
                    <div className="mono" style={{ fontSize: 11, color: "#888", letterSpacing: "0.18em" }}>{svc.tag}</div>
                    <div style={{
                      fontWeight: 700, fontSize: 38, letterSpacing: "-0.02em",
                      color: "#fff", marginTop: 10, lineHeight: 1,
                      display: "flex", alignItems: "baseline", justifyContent: "space-between",
                    }}>
                      <span>{svc.label}<span style={{ color: "#C6F84E" }}>.</span></span>
                      <span style={{ fontSize: 18, color: "#C6F84E", fontWeight: 500 }}>→</span>
                    </div>
                  </div>
                </div>
              </a>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.PageServices = PageServices;
