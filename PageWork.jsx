/* eslint-disable */
const WORK = [
  { id: "W_001", tag: "Real Estate Photo", ctx: "Residential listing · Interior + exterior",  ratio: "4 / 5",   category: "Real estate",
    src: "photos/work-realestate-01.jpg", alt: "Log home exterior, Wyoming, daytime — wood siding, dark roof, mountain foothills" },
  { id: "W_002", tag: "Drone",             ctx: "Acreage aerial survey",                       ratio: "16 / 10", category: "Drone",
    src: "photos/work-drone-ranch.jpg", alt: "Aerial of Wyoming granite outcrops and pine forest" },
  { id: "W_003", tag: "Web Build",         ctx: "Small business · Brand site + lead capture",  ratio: "4 / 3",   category: "Web",
    src: "photos/work-web-frozenropes.png", alt: "Recent web build — product hero, custom navigation, dark theme", focal: "top" },
  { id: "W_004", tag: "Twilight",          ctx: "Twilight exterior · Add-on session",          ratio: "4 / 5",   category: "Real estate",
    src: "photos/work-twilight.jpg", alt: "Modern farmhouse exterior at blue hour — warm interior glow, red rock landscape behind" },
  { id: "W_005", tag: "360 Tour",          ctx: "Commercial 360 walkthrough",                  ratio: "16 / 10", category: "360",
    src: "photos/work-360-triggerpoint.png", alt: "Matterport 360 scanner mid-shoot inside a luxury interior with chandeliers" },
  { id: "W_006", tag: "Brand Audit",       ctx: "Brand audit · Local business fix list",       ratio: "1 / 1",   category: "Brand",
    status: "in-progress", label: "W_006 · AUDIT · IN PROGRESS" },
  { id: "W_007", tag: "Drone",             ctx: "Community aerial · Downtown overview",        ratio: "16 / 10", category: "Drone",
    src: "photos/work-drone-laramie.jpg", alt: "Aerial of a stadium and university campus, late afternoon" },
  { id: "W_008", tag: "Real Estate Photo", ctx: "Modern home · Twilight + interior combo",     ratio: "4 / 5",   category: "Real estate",
    src: "photos/work-realestate-02.jpg", alt: "Modern patio at dusk — firepit, board-and-batten siding, warm interior glow" },
];

const CATS = ["All", "Real estate", "Drone", "Web", "360", "Brand"];

function PageWork({ onNavigate }) {
  const [cat, setCat] = React.useState("All");
  const filtered = cat === "All" ? WORK : WORK.filter(w => w.category === cat);

  return (
    <main data-screen-label="03 Work">
      <section className="page-hero">
        <div className="grid-bg full-mask"></div>
        <div className="container">
          <Eyebrow>Archive / 2022 → 2026</Eyebrow>
          <h1 className="display-xl" style={{ marginTop: 24 }}>
            <SplitText text="Recent" />&nbsp;
            <span style={{ color: "#C6F84E" }}>
              <MaskReveal delay={400}>work.</MaskReveal>
            </span>
          </h1>
          <p style={{ color: "#888", fontSize: 18, marginTop: 24, maxWidth: "52ch", lineHeight: 1.55 }}>
            Real shoots, real sites, real surveys. Filter by service line. Tap any tile for the
            full case study.
          </p>
          <Coords label="Archive / index" />
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 0, borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A" }}>
        <div style={{ padding: "48px 0 16px" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
              <Eyebrow>Selected · 04 projects</Eyebrow>
              <span className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.18em" }}>SCROLL HORIZONTAL →</span>
            </div>
          </div>
        </div>
        <HorizontalScroller />
      </section>

      <section style={{ padding: "72px 0 36px" }}>
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 56 }}>
              {CATS.map(c => {
                const active = cat === c;
                return (
                  <button key={c} onClick={() => setCat(c)} style={{
                    padding: "10px 18px",
                    border: active ? "1px solid #C6F84E" : "1px solid #3D3D3D",
                    background: active ? "rgba(198,248,78,0.10)" : "transparent",
                    color: active ? "#C6F84E" : "#fff",
                    fontFamily: "var(--font-mono, var(--font-sans))",
                    fontWeight: 500, fontSize: 11, letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    transition: "all 200ms",
                  }}>{c}</button>
                );
              })}
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 18 }}>
            {filtered.map((w, i) => {
              const spans = [7, 5, 4, 4, 4, 6, 6, 4];
              const span = spans[i % spans.length];
              const offset = i % 2 === 0 ? 0 : 80;
              return (
                <Reveal key={w.id} delay={i * 60} style={{ gridColumn: `span ${span}`, marginTop: i % 3 === 1 ? 80 : 0 }}>
                  <WorkTile w={w} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "140px 0", textAlign: "center", borderTop: "1px solid #1A1A1A" }}>
        <div className="container">
          <Eyebrow>Engage</Eyebrow>
          <h2 className="display-l" style={{ marginTop: 24 }}>
            <SplitText text="See something you want?" />
          </h2>
          <p style={{ color: "#888", fontSize: 17, marginTop: 22 }}>Send me the project. I'll quote it.</p>
          <div style={{ marginTop: 32 }}>
            <Btn onClick={() => onNavigate("contact")}>Book a shoot</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkTile({ w }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      data-cursor="view"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ position: "relative", overflow: "hidden", border: "1px solid #1A1A1A", transition: "all 320ms", cursor: "none" }}
    >
      <PhotoSlot ratio={w.ratio} label={w.label || w.id} src={w.src} alt={w.alt} focal={w.focal} />
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        padding: "60px 22px 18px",
        background: "linear-gradient(to top, rgba(0,0,0,0.92), transparent)",
        transition: "transform 320ms var(--ease-out)",
        transform: h ? "translateY(0)" : "translateY(40%)",
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.24em", color: "#C6F84E" }}>{w.id} · {w.tag.toUpperCase()}</div>
        <div style={{ color: "#fff", fontSize: 16, marginTop: 6, fontWeight: 500, letterSpacing: "-0.005em" }}>{w.ctx}</div>
        {h && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14, color: "#C6F84E", fontSize: 11, fontFamily: "var(--font-mono, var(--font-sans))", letterSpacing: "0.20em", textTransform: "uppercase" }}>
            View project →
          </div>
        )}
      </div>
    </div>
  );
}

function HorizontalScroller() {
  const FEATURED = [
    { id: "F_001", tag: "DRONE",            title: "Aerial Survey",          meta: "DRONE MAPPING · LANDSCAPE + PARCEL",
      src: "photos/featured-drone-cabin.jpg", alt: "Aerial — red sandstone outcrop and a single cabin on the high plains" },
    { id: "F_002", tag: "REAL ESTATE",      title: "Listing Photography",    meta: "INTERIOR + EXTERIOR · CUBICASA FLOOR PLAN · MLS-READY",
      src: "photos/home-real-estate-hero.jpg", alt: "Modern home patio at dusk with firepit, Adirondack chairs, warm interior glow" },
    { id: "F_003", tag: "WEB BUILD",        title: "Brand Site",             meta: "WEB BUILD · STRIPE + LEAD CAPTURE",
      src: "photos/home-web-hero.png", alt: "Recent web build — hero section, custom typography, dark theme", focal: "left top" },
    { id: "F_004", tag: "360 / IMMERSIVE",  title: "Immersive Walkthrough",  meta: "MATTERPORT SCAN · COMMERCIAL · VR-READY",
      src: "photos/work-360-triggerpoint.png", alt: "360 scanner mid-walkthrough inside a luxury interior, chandeliers, grand staircase" },
  ];
  return (
    <div style={{
      overflowX: "auto", overflowY: "hidden",
      scrollSnapType: "x mandatory",
      WebkitOverflowScrolling: "touch",
      padding: "16px 0 48px",
    }}>
      <div style={{
        display: "flex", gap: 18,
        padding: "0 32px",
        width: "max-content",
      }}>
        {FEATURED.map((f, i) => (
          <FeaturedScrollerCard key={f.id} f={f} idx={i} total={FEATURED.length} />
        ))}
        {/* trailing spacer so last card can fully sit center */}
        <div style={{ flexShrink: 0, width: 64 }} />
      </div>
    </div>
  );
}

function FeaturedScrollerCard({ f, idx, total }) {
  return (
    <div
      data-cursor="view"
      style={{
        flexShrink: 0,
        width: "60vw", maxWidth: 720, minWidth: 420,
        scrollSnapAlign: "center",
        position: "relative",
        cursor: "none",
      }}
    >
      <PhotoSlot ratio="16 / 9" label={f.id} src={f.src} alt={f.alt} focal={f.focal} />
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "flex-end",
        padding: "32px 28px",
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.20em", color: "#C6F84E" }}>{f.id} · {f.tag}</div>
            <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em", color: "#fff", marginTop: 8, lineHeight: 1 }}>{f.title}<span style={{ color: "#C6F84E" }}>.</span></div>
            <div style={{ color: "#888", fontSize: 11, marginTop: 10, letterSpacing: "0.18em", fontFamily: "var(--font-mono, var(--font-sans))" }}>{f.meta}</div>
          </div>
          <div className="mono" style={{ color: "#888", fontSize: 10, letterSpacing: "0.20em" }}>
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

window.PageWork = PageWork;
