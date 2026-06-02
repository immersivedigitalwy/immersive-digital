/* eslint-disable */
function PageHome({ onNavigate }) {
  const SERVICES = window.SERVICES_DATA || [];
  const y = useScrollY();
  const heroOpacity = Math.max(0, 1 - y / 700);

  return (
    <main data-screen-label="01 Home">
      {/* HERO — pinned, scan-line, grid background */}
      <section className="hero-stage">
        <div className="grid-bg"></div>
        <div className="scanline" style={{ animationDelay: "0s" }}></div>
        <div className="scanline" style={{ animationDelay: "3s", top: "30%" }}></div>

        <div className="container hero-fade" style={{ opacity: heroOpacity }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
            <Eyebrow>
              <span className="mono">REC · 26 / V_2026.05</span>
            </Eyebrow>
            <Coords />
          </div>

          <h1 className="display-xl">
            <div>
              <SplitText text="Drone, photo," />
            </div>
            <div>
              <SplitText text="web, brand." delay={140} />
            </div>
          </h1>

          <div className="rule thick" style={{ marginTop: 36, maxWidth: 760 }}></div>

          <div style={{ display: "flex", gap: 64, marginTop: 36, flexWrap: "wrap", alignItems: "flex-end" }}>
            <Reveal delay={1400}>
              <p style={{ color: "#888", fontSize: 17, lineHeight: 1.55, maxWidth: "44ch" }}>
                Wyoming visual media and web work for businesses that need both. One operator
                across the visible-marketing stack. 24 hour turnaround on most jobs.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <MagneticButton onClick={() => onNavigate("contact")} className="btn primary">
                  Book a call <span className="arrow">→</span>
                </MagneticButton>
                <button className="btn ghost" onClick={() => onNavigate("services")}>
                  Browse services <span className="arrow">→</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={1600} style={{ marginLeft: "auto" }}>
              <div className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.20em", lineHeight: 2 }}>
                <div style={{ color: "#C6F84E" }}>● SYSTEM STATUS</div>
                <div>BOOKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OPEN · JUNE</div>
                <div>TURNAROUND&nbsp;&nbsp;24H–14D</div>
                <div>OPERATOR&nbsp;&nbsp;&nbsp;&nbsp;ONLINE</div>
                <div>PARTNER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CUBICASA · FLOOR PLANS</div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll prompt */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          color: "#888", fontSize: 10, letterSpacing: "0.32em",
          fontFamily: "var(--font-mono, var(--font-sans))",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          opacity: heroOpacity,
        }}>
          <span>SCROLL</span>
          <span style={{
            width: 1, height: 40,
            background: "linear-gradient(to bottom, #C6F84E, transparent)",
            animation: "scan 2.5s ease-in-out infinite",
          }}></span>
        </div>
      </section>

      {/* TICKER */}
      <Marquee items={[
        "DRONE", "REAL ESTATE", "360 IMMERSIVE", "BRAND",
        "WEB BUILD", "SOCIAL PLAN", "PART 107 LICENSED", "WYOMING BASED",
      ]} />

      {/* SERVICES — big block list */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <Eyebrow>Services / 06 lines</Eyebrow>
              <h2 className="display-l" style={{ marginTop: 18, maxWidth: "16ch" }}>
                <SplitText text="The stack." />
              </h2>
            </div>
            <a
              onClick={(e) => { e.preventDefault(); onNavigate("services"); }}
              href="/services"
              className="mono"
              style={{ color: "#C6F84E", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase" }}
            >
              All services →
            </a>
          </div>

          <div>
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <a
                  href={`/services/${s.id}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(`service:${s.id}`); }}
                  className="svc-row"
                  style={{ display: "grid" }}
                >
                  <span className="id mono">{s.num}</span>
                  <span className="ttl">{s.label}</span>
                  <span className="desc">{s.body}</span>
                  <span className="go">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section style={{ padding: "140px 0", borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ opacity: 0.3 }}></div>
        <div className="container" style={{ textAlign: "center" }}>
          <Eyebrow>Positioning · 001</Eyebrow>
          <h2 className="display-l" style={{ marginTop: 28, maxWidth: "26ch", marginInline: "auto", textWrap: "balance" }}>
            <MaskReveal>
              <span style={{ color: "#fff" }}>The work</span>
              <span style={{ color: "#C6F84E" }}> matches, </span>
              <span style={{ color: "#fff" }}>because it comes from the </span>
              <span style={{ color: "#C6F84E" }}>same hands</span>
            </MaskReveal>
          </h2>
        </div>
      </section>

      {/* FEATURED WORK — parallax staircase */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <Eyebrow>Featured / 26</Eyebrow>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                <SplitText text="Recent shoots." />
              </h2>
            </div>
            <Btn variant="bracket" onClick={() => onNavigate("work")}>See archive</Btn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 0.9fr", gap: 16, alignItems: "start" }}>
            <Parallax speed={0.08}>
              <PhotoSlot
                ratio="3 / 5"
                src="home-real-estate-hero.jpg"
                alt="Modern Wyoming home patio at dusk — firepit, Adirondack chairs, warm interior glow through sliding doors"
                caption="W_001 · REAL ESTATE · INTERIOR + EXTERIOR"
              />
            </Parallax>
            <Parallax speed={0.16}>
              <div style={{ marginTop: 60 }}>
                <PhotoSlot
                  ratio="4 / 5"
                  src="home-drone-hero.jpg"
                  alt="Aerial of the Laramie River winding through autumn cottonwoods — Wyoming, Albany County"
                  caption="W_002 · DRONE"
                />
              </div>
            </Parallax>
            <Parallax speed={0.04}>
              <div style={{ marginTop: 200 }}>
                <PhotoSlot
                  ratio="3 / 4"
                  src="work-twilight.jpg"
                  alt="Twilight exterior real estate shoot — warm window glow against a deep blue Wyoming dusk sky"
                  focal="left top"
                  caption="W_003 · TWILIGHT · EXTERIOR"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <Eyebrow>Operations · 2022–2025</Eyebrow>
          <h2 className="display-m" style={{ marginTop: 18, marginBottom: 56, maxWidth: "18ch" }}>
            <SplitText text="By the numbers." />
          </h2>

          <Reveal>
            <div className="stat-line">
              <span className="id">001</span>
              <span className="v"><Counter to={120} suffix="+" /></span>
              <span className="k">Listings shot · Albany County</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="stat-line">
              <span className="id">002</span>
              <span className="v"><Counter to={24} suffix=" hr" /></span>
              <span className="k">Standard photo turnaround</span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="stat-line">
              <span className="id">003</span>
              <span className="v"><Counter to={14} suffix=" days" /></span>
              <span className="k">Web build · Flat fee</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="stat-line">
              <span className="id">004</span>
              <span className="v"><Counter to={6} /></span>
              <span className="k">Service lines · One operator</span>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="stat-line">
              <span className="id">005</span>
              <span className="v"><Counter to={1} suffix=" invoice" /></span>
              <span className="k">Across the whole stack</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ONE VENDOR SPLIT */}
      <section style={{ padding: "120px 0", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <h3 className="display-m" style={{ marginBottom: 56, maxWidth: "26ch", textWrap: "balance" }}>
            <SplitText text="Most businesses end up paying" />
            <br />
            <SplitText text="five vendors who never talk." delay={400} />
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            <Reveal>
              <div className="panel" style={{ background: "transparent", padding: "0 0 0 0", border: 0 }}>
                <Eyebrow>The old way</Eyebrow>
                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 16 }}>
                  {["Drone operator", "Photographer", "Web designer", "Brand consultant", "Social manager"].map(t => (
                    <li key={t} style={{
                      color: "#5a5a5a", fontSize: 22, fontWeight: 500,
                      textDecoration: "line-through", textDecorationColor: "#7A1F1F",
                      textDecorationThickness: "1.5px",
                    }}>{t}</li>
                  ))}
                  <li style={{ color: "#3a3a3a", fontSize: 15, marginTop: 10, fontFamily: "var(--font-mono, var(--font-sans))", letterSpacing: "0.12em" }}>
                    5 invoices · 5 timelines · 5 styles
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="book-block">
                <Eyebrow>The new way</Eyebrow>
                <h4 style={{
                  fontWeight: 700, fontSize: 28, letterSpacing: "-0.015em",
                  marginTop: 14, lineHeight: 1.15,
                }}>
                  Immersive Digital Co
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    "One invoice",
                    "One timeline",
                    "One consistent visual style",
                    "The brand never leaves one set of hands",
                  ].map(t => (
                    <li key={t} style={{ display: "flex", gap: 14, alignItems: "baseline", color: "#fff", fontSize: 16 }}>
                      <LimeDot size={6} /> {t}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28 }}>
                  <Btn onClick={() => onNavigate("contact")}>Book a 30 min consult</Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{ padding: "160px 0 140px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ opacity: 0.35 }}></div>
        <div className="container">
          <Eyebrow>Engage / next</Eyebrow>
          <h2 className="display-xl" style={{ marginTop: 32, lineHeight: 0.94 }}>
            <div><MaskReveal>Book your shoot.</MaskReveal></div>
            <div><MaskReveal delay={140}>Audit your site.</MaskReveal></div>
            <div style={{ color: "#C6F84E" }}><MaskReveal delay={280}>Refresh your brand.</MaskReveal></div>
          </h2>

          <Reveal delay={800}>
            <p style={{ color: "#888", fontSize: 17, marginTop: 36 }}>
              30 minute call. No upsell. Reply with your project.
            </p>
            <div style={{ marginTop: 28, display: "inline-flex", gap: 12 }}>
              <MagneticButton onClick={() => onNavigate("contact")} className="btn primary" strength={0.45}>
                Book a call <span className="arrow">→</span>
              </MagneticButton>
              <a className="btn ghost" href="mailto:immersivedigital.wy@gmail.com">
                immersivedigital.wy@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

window.PageHome = PageHome;
