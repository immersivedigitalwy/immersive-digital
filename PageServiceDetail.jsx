/* eslint-disable */
// PageServiceDetail — one reusable template for all six services.
// Receives a `slug` prop, looks up SERVICES_DATA, renders a deep dive.

function PageServiceDetail({ slug, onNavigate }) {
  const svc = (window.SERVICES_DATA || []).find(s => s.id === slug);
  const all = window.SERVICES_DATA || [];

  if (!svc) {
    return (
      <main data-screen-label="Service · not found">
        <section className="page-hero">
          <div className="container">
            <Eyebrow>Service / 404</Eyebrow>
            <h1 className="display-l" style={{ marginTop: 18 }}>
              <SplitText text="Service not found." />
            </h1>
            <div style={{ marginTop: 32 }}>
              <button className="btn ghost" onClick={() => onNavigate("services")}>Back to Services →</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Related services (prev + next in the array, wrap around)
  const idx = all.findIndex(s => s.id === slug);
  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];

  return (
    <main data-screen-label={`02 Services / ${svc.label}`}>
      {/* HERO */}
      <section className="page-hero" style={{ paddingBottom: 24 }}>
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.20em" }}>
              <a onClick={() => onNavigate("services")} style={{ color: "#888", cursor: "pointer" }}>← SERVICES</a>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: "#C6F84E" }}>{svc.num} · {svc.label.toUpperCase()}</span>
            </div>
            <Coords label={`Service / ${svc.num}`} />
          </div>

          <div className="auto-stack" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "end", marginTop: 36 }}>
            <h1 className="display-xl" style={{ maxWidth: "14ch", lineHeight: 0.92 }}>
              <SplitText text={svc.label + "."} />
            </h1>
            <div style={{ alignSelf: "end" }}>
              <Reveal delay={400}>
                <div className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.22em" }}>{svc.tag}</div>
                <p style={{ color: "#888", fontSize: 16, lineHeight: 1.65, marginTop: 14, maxWidth: "36ch" }}>
                  {svc.intro}
                </p>
              </Reveal>
            </div>
          </div>

          <LimeRule style={{ marginTop: 40, maxWidth: 560 }} thick />
        </div>
      </section>

      {/* MARQUEE */}
      <ServiceMarquee items={svc.bullets.map(b => b.replace(/[·.]/g, "").trim())} />

      {svc.id === "brand" && ( <section style={{ padding: "40px 0 0" }}> <div className="container"> <Reveal> <div style={{ maxWidth: 560, margin: "0 auto" }}> <{svc.id === "brand" && ( <section style={{ padding: "40px 0 0" }}> <div className="container"> <Reveal> <div style={{ maxWidth: 560, margin: "0 auto" }}> <{svc.id === "brand" && ( <section style={{ padding: "40px 0 0" }}> <div className="container"> <Reveal> <div style={{ maxWidth: 560, margin: "0 auto" }}> <PhotoSlot src="brand-audit-cover.png" alt="Brand + online presence audit cover" ratio="1 / 1" focal="top" caption="Sample deliverable · Brand + online presence audit" /> </div> </Reveal> </div> </section> )} {/* TITLE / BIG STATEMENT */}="brand-audit-cover.png" alt="Brand + online presence audit cover" ratio="1 / 1" focal="top" caption="Sample deliverable · Brand + online presence audit" /> </div> </Reveal> </div> </section> )} {/* TITLE / BIG STATEMENT */}="brand-audit-cover.png" alt="Brand + online presence audit cover" ratio="1 / 1" focal="top" caption="Sample deliverable · Brand + online presence audit" /> </div> </Reveal> </div> </section> )} {/* TITLE / BIG STATEMENT */}
      <section style={{ padding: "120px 0" }}>
        <div className="container auto-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
          <div>
            <Reveal>
              <Eyebrow>{svc.num} · Overview</Eyebrow>
            </Reveal>
          </div>
          <div>
            <h2 className="display-m" style={{ marginBottom: 28 }}>
              <SplitText text={svc.title} />
            </h2>
            <Reveal delay={300}>
              <p style={{ color: "#888", fontSize: 18, lineHeight: 1.6, maxWidth: "46ch" }}>{svc.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="display-m" style={{ marginTop: 18 }}>
                <SplitText text="What you actually get." />
              </h2>
            </div>
            <span className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.18em" }}>{svc.deliverables.length} · variants</span>
          </div>

          <div className="auto-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {svc.deliverables.map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <Tilt max={3}>
                  <div className="panel" style={{ padding: "30px 30px 26px", position: "relative", overflow: "hidden" }}>
                    <Crosshairs />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                      <span className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.22em" }}>
                        D · {String(i + 1).padStart(2, "0")}
                      </span>
                      <LimeDot size={6} />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: "-0.01em", color: "#fff" }}>{d.name}</div>
                    <div style={{ color: "#888", fontSize: 14, lineHeight: 1.55, marginTop: 12, maxWidth: "44ch" }}>{d.desc}</div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ opacity: 0.25 }}></div>
        <div className="container">
          <Eyebrow>Process / 04 steps</Eyebrow>
          <h2 className="display-m" style={{ marginTop: 20, marginBottom: 64 }}>
            <SplitText text="How it runs." />
          </h2>

          <div className="auto-stack" style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${svc.process.length}, 1fr)`, gap: 24 }}>
            <div style={{
              position: "absolute", top: 24, left: "4%", right: "4%",
              height: 1.5, background: "linear-gradient(to right, #C6F84E 0%, #C6F84E 80%, transparent 100%)",
            }}></div>
            {svc.process.map(([title, desc], i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "#0A0A0A",
                    border: "1.5px solid #C6F84E",
                    color: "#C6F84E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono, var(--font-sans))",
                    fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
                    marginBottom: 26,
                  }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ color: "#C6F84E", fontFamily: "var(--font-mono, var(--font-sans))", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>{title}</div>
                  <div style={{ color: "#fff", fontSize: 14, lineHeight: 1.55, marginTop: 10, maxWidth: "30ch" }}>{desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <Eyebrow>Pricing · {svc.pricing.length} tiers</Eyebrow>
              <h2 className="display-m" style={{ marginTop: 18 }}>
                <SplitText text="Flat fee. Quoted up front." />
              </h2>
            </div>
            <p className="mono" style={{ color: "#888", fontSize: 12, letterSpacing: "0.14em", maxWidth: "32ch", textAlign: "right" }}>
              No hourly creep · No template proposal · No surprise invoice
            </p>
          </div>

          <div className="auto-stack" style={{ display: "grid", gridTemplateColumns: `repeat(${svc.pricing.length}, 1fr)`, gap: 18 }}>
            {svc.pricing.map((p, i) => (
              <Reveal key={p.tier} delay={i * 120}>
                <PriceCard plan={p} onBook={() => onNavigate("contact")} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {svc.faq && svc.faq.length > 0 && (
        <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
          <div className="container auto-stack" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
            <div>
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="display-m" style={{ marginTop: 20, maxWidth: "12ch" }}>
                  <SplitText text="Common questions." />
                </h2>
              </Reveal>
            </div>
            <div>
              {svc.faq.map(([q, a], i) => (
                <Reveal key={i} delay={i * 80}>
                  <FaqItem q={q} a={a} idx={i + 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED + CTA */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ opacity: 0.3 }}></div>
        <div className="container">
          <Eyebrow>Engage / next</Eyebrow>
          <h2 className="display-l" style={{ marginTop: 24, marginBottom: 48 }}>
            <SplitText text={`Book ${svc.label.toLowerCase()}.`} />
          </h2>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <MagneticButton onClick={() => onNavigate("contact")} className="btn primary">
              Book this <span className="arrow">→</span>
            </MagneticButton>
            <a className="btn ghost" href="mailto:immersivedigital.wy@gmail.com">
              immersivedigital.wy@gmail.com
            </a>
          </div>

          <div className="rule" style={{ marginTop: 80, marginBottom: 32 }}></div>

          {/* Related services */}
          <div className="auto-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <RelatedCard svc={prev} label="Previous service" onNavigate={onNavigate} />
            <RelatedCard svc={next} label="Next service" onNavigate={onNavigate} flip />
          </div>
        </div>
      </section>
    </main>
  );
}

function PriceCard({ plan, onBook }) {
  return (
    <Tilt max={2}>
      <div
        className="panel"
        style={{
          padding: "32px 28px 28px",
          background: plan.featured ? "linear-gradient(170deg, rgba(198,248,78,0.08), transparent)" : "#0E0E0E",
          border: plan.featured ? "1px solid #C6F84E" : "1px solid #1A1A1A",
          position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: 360,
        }}
      >
        {plan.featured && (
          <div style={{
            position: "absolute", top: 0, right: 0,
            background: "#C6F84E", color: "#0A0A0A",
            padding: "5px 12px",
            fontFamily: "var(--font-mono, var(--font-sans))",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.20em", textTransform: "uppercase",
          }}>Most picked</div>
        )}

        <div>
          <div className="mono" style={{ color: plan.featured ? "#C6F84E" : "#888", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", marginBottom: 14 }}>
            {plan.tier}
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 48, letterSpacing: "-0.025em", color: plan.featured ? "#C6F84E" : "#fff", lineHeight: 1 }}>{plan.price}</span>
            <span style={{ color: "#888", fontSize: 13 }}>{plan.sub}</span>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
            {plan.features.map(f => (
              <li key={f} style={{ display: "flex", alignItems: "baseline", gap: 12, color: "#fff", fontSize: 14, lineHeight: 1.5 }}>
                <LimeDot size={5} style={{ flexShrink: 0, marginTop: 2 }} /> {f}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={plan.featured ? "btn primary" : "btn ghost"}
          onClick={onBook}
          style={{ marginTop: 24, justifyContent: "center" }}
        >
          Book this <span className="arrow">→</span>
        </button>
      </div>
    </Tilt>
  );
}

function FaqItem({ q, a, idx }) {
  const [open, setOpen] = React.useState(idx === 1);
  return (
    <div style={{ borderBottom: "1px solid #1A1A1A" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", padding: "22px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          textAlign: "left", gap: 24,
        }}
      >
        <span style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
          <span className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em" }}>
            Q · {String(idx).padStart(2, "0")}
          </span>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 500, lineHeight: 1.4 }}>{q}</span>
        </span>
        <span style={{
          color: "#C6F84E", fontSize: 22, lineHeight: 1,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 240ms cubic-bezier(0.22,1,0.36,1)",
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 320ms cubic-bezier(0.22,1,0.36,1)",
      }}>
        <p style={{ color: "#888", fontSize: 15, lineHeight: 1.65, padding: "0 0 24px 84px", maxWidth: "52ch" }}>{a}</p>
      </div>
    </div>
  );
}

function RelatedCard({ svc, label, onNavigate, flip }) {
  return (
    <a
      onClick={() => onNavigate(`service:${svc.id}`)}
      className="panel"
      style={{
        padding: "30px 32px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: 200,
        textAlign: flip ? "right" : "left",
        position: "relative", overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
        {flip ? `${label} →` : `← ${label}`}
      </div>
      <div>
        <div className="mono" style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em", marginBottom: 8 }}>{svc.num} · {svc.tag}</div>
        <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1 }}>
          {svc.label}<span style={{ color: "#C6F84E" }}>.</span>
        </div>
      </div>
    </a>
  );
}

// Inline LimeRule (reused from primitives but we keep a local fallback)
function LimeRule({ thick, style }) {
  return <div className="rule" style={{ height: thick ? 3 : 1.5, ...style }} />;
}

// Service-specific marquee — pulls bullets dynamically
function ServiceMarquee({ items }) {
  const all = [...items, ...items];
  return (
    <div className="marquee" style={{ borderTop: 0 }}>
      <div className="marquee-track" style={{ animationDuration: "30s" }}>
        {all.map((it, i) => (
          <span key={i} className="marquee-item" style={{ fontSize: 28 }}>
            <span style={{ color: "#fff" }}>{it}</span>
            <span className="dot" style={{ width: 8, height: 8 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

window.PageServiceDetail = PageServiceDetail;
