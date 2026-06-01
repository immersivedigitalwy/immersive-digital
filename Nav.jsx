/* eslint-disable */
// Minimal nav — sticky, frosted, with active indicator
// and a live clock for futuristic touch.

function Nav({ current, onNavigate }) {
  const links = [
    { id: "home", label: "Index", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "work", label: "Work", path: "/work" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Book", path: "/contact" },
  ];

  // live clock
  const [time, setTime] = React.useState(() => formatTime(new Date()));
  React.useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "20px 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      background: "rgba(10,10,10,0.65)",
      backdropFilter: "blur(14px) saturate(180%)",
      WebkitBackdropFilter: "blur(14px) saturate(180%)",
      borderBottom: "1px solid #1A1A1A",
    }}>
      <a onClick={(e) => { e.preventDefault(); onNavigate("home"); }} href="/" style={{ display: "inline-flex", flexShrink: 0 }}>
        <Wordmark size={26} withDescriptor={false} />
      </a>

      <div style={{ display: "flex", gap: 38, flexShrink: 0 }}>
        {links.map((l) => {
          const active = current === l.id;
          return (
            <a
              key={l.id}
              href={l.path}
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              style={{
                position: "relative", padding: "10px 2px",
                fontFamily: "var(--font-mono, var(--font-sans))",
                fontSize: 15, fontWeight: 700,
                letterSpacing: "0.10em", textTransform: "uppercase",
                color: active ? "#C6F84E" : "#fff",
                transition: "color 200ms", whiteSpace: "nowrap",
              }}
            >
              {String(links.indexOf(l) + 1).padStart(2, "0")}&nbsp;&nbsp;{l.label}
              {active && (
                <span style={{
                  position: "absolute", left: 0, right: 0, bottom: 0,
                  height: 2.5, background: "#C6F84E",
                }} />
              )}
            </a>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
        <span className="mono nav-clock" style={{
          fontSize: 12, color: "#888", letterSpacing: "0.14em", whiteSpace: "nowrap",
        }}>
          <span style={{ color: "#C6F84E" }}>●</span>&nbsp;{time}
        </span>
        <button
          className="btn primary"
          onClick={() => onNavigate("contact")}
          style={{ padding: "13px 20px", fontSize: 13, letterSpacing: "0.14em" }}
        >
          Book <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

function formatTime(d) {
  // 24-hour, Wyoming time (MT, UTC-7)
  // Use local — labeled "MT" for vibe; the brand is in Laramie
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s} MT`;
}

window.Nav = Nav;
