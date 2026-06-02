/* eslint-disable */
function PageContact({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", project: "Drone aerial", message: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

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
            Send me the project. I'll quote a flat fee in the intro call.
            No upsell, no hourly creep, no template proposal deck.
          </p>
          <Coords label="Engagement form" />
        </div>
      </section>

      <section style={{ padding: "72px 0 120px", borderTop: "1px solid #1A1A1A" }}>
        <div className="container auto-stack" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 80, alignItems: "start" }}>

          {/* FORM */}
          <div>
            {sent ? (
              <Reveal>
                <div className="book-block" style={{ padding: 56 }}>
                  <Eyebrow>Received · 200 OK</Eyebrow>
                  <h2 className="display-m" style={{ marginTop: 18 }}>
                    I'll reply within 24 hours.
                  </h2>
                  <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginTop: 18, maxWidth: "48ch" }}>
                    If it's urgent — a listing closing this week, an active job site, an event in 7 days —
                    reply "URGENT" to the confirmation email and I'll triage faster.
                  </p>
                  <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
                    <button className="btn ghost" onClick={() => { setSent(false); onNavigate("home"); }}>
                      Back to index <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{
                  display: "grid", gap: 32,
                }}>
                  <div className="auto-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                    <div className="field">
                      <label>01 · Name</label>
                      <input value={form.name} onChange={update("name")} placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label>02 · Email</label>
                      <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="field">
                    <label>03 · Project type</label>
                    <select value={form.project} onChange={update("project")}>
                      <option>Drone aerial</option>
                      <option>Real estate shoot</option>
                      <option>360 / Immersive walkthrough</option>
                      <option>Brand audit</option>
                      <option>Logo refresh</option>
                      <option>New logo / brand build</option>
                      <option>Full brand kit</option>
                      <option>Web build</option>
                      <option>Social plan</option>
                      <option>Not sure / mix of services</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>04 · Tell me about the project</label>
                    <textarea
                      value={form.message} onChange={update("message")}
                      placeholder="Address, scope, when you need files back, any constraints..."
                      rows={5}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, gap: 24, flexWrap: "wrap" }}>
                    <span className="mono" style={{ color: "#888", fontSize: 11, letterSpacing: "0.18em" }}>
                      ⤷ I reply within 24 hours.
                    </span>
                    <MagneticButton type="submit" className="btn primary">
                      Send the project <span className="arrow">→</span>
                    </MagneticButton>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          {/* SIDEBAR */}
          <Reveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <SidebarItem label="Email"      value="immersivedigital.wy@gmail.com" />
              <SidebarItem label="Phone"      value="307-761-3160" />
              <SidebarItem label="Location"   value="Laramie, WY · Albany County" />
              <SidebarItem label="Coverage"   value="Front Range · S. Wyoming · N. Colorado" />
              <SidebarItem label="Licenses"   value="FAA Part 107 · Realtor® · Active" />
              <SidebarItem label="Turnaround" value="24 hr photo · 48 hr drone · 14 day web" />
              <SidebarItem label="Booking"    value="Open · June 2026" lime />
            </div>

            <div className="book-block" style={{ padding: 28, marginTop: 32 }}>
              <Eyebrow>Direct line</Eyebrow>
              <h3 style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", marginTop: 14, lineHeight: 1.2 }}>
                Skip the form. Send me your URL —
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
