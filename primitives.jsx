/* eslint-disable */
// Smaller shared primitives used across pages.

const { useState: _useState } = React;

function Wordmark({ size = 22, withDescriptor = true }) {
  const ds = Math.max(5, Math.round(size * 0.28));
  return (
    <span style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
      <span style={{
        fontWeight: 700, fontSize: size,
        letterSpacing: "-0.025em", lineHeight: 1, color: "#fff",
      }}>immersive</span>
      <span style={{
        width: ds, height: ds, borderRadius: "50%",
        background: "#C6F84E",
        marginLeft: Math.round(size * 0.10),
        alignSelf: "center", marginTop: Math.round(size * 0.10),
        flexShrink: 0,
      }} />
      {withDescriptor && (
        <span style={{
          fontSize: Math.max(8, Math.round(size * 0.40)),
          fontWeight: 700, color: "#C6F84E",
          letterSpacing: "0.30em", textTransform: "uppercase",
          marginLeft: Math.round(size * 0.6),
          lineHeight: 1, whiteSpace: "nowrap",
        }}>DIGITAL&nbsp;CO</span>
      )}
    </span>
  );
}

function LimeDot({ size = 10, style }) {
  return <span style={{
    display: "inline-block", width: size, height: size,
    background: "#C6F84E", borderRadius: "50%", ...style,
  }} />;
}

function Btn({ children, variant = "primary", icon = "→", onClick, type, full }) {
  const cls = `btn ${variant}`;
  return (
    <button
      type={type} onClick={onClick} className={cls}
      style={{ width: full ? "100%" : undefined, justifyContent: "center" }}
    >
      {children}
      {icon && <span className="arrow">{icon}</span>}
    </button>
  );
}

function Crosshairs() {
  return (
    <>
      <span className="crosshair tl"></span>
      <span className="crosshair tr"></span>
      <span className="crosshair bl"></span>
      <span className="crosshair br"></span>
    </>
  );
}

// Eyebrow with a leading mono tag
function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

// Coordinate block (LAT/LON of Laramie)
function Coords({ label = "Laramie, WY" }) {
  return (
    <div className="mono" style={{ fontSize: 11, color: "#888", letterSpacing: "0.18em", textAlign: "right" }}>
      <div style={{ color: "#C6F84E" }}>{label.toUpperCase()}</div>
      <div>41.3114° N</div>
      <div>105.5911° W</div>
    </div>
  );
}

// Featured photo — renders <img> when src is given, falls back to the
// placeholder convention (crosshairs + label) otherwise.
function PhotoSlot({ ratio = "4 / 5", label = "DROP PHOTO HERE", caption, src, alt = "", focal = "center" }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{
        aspectRatio: ratio,
        background: "#0E0E0E",
        border: "1px solid #1A1A1A",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#3a3a3a", fontWeight: 500, fontSize: 12,
        letterSpacing: "0.24em", textTransform: "uppercase",
        fontFamily: "var(--font-mono, var(--font-sans))",
        position: "relative", overflow: "hidden",
      }}>
        <Crosshairs />
        {src ? (
          <img
            src={src} alt={alt}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: focal,
              display: "block",
            }}
          />
        ) : (
          <span style={{ textAlign: "center", padding: 16 }}>{label}</span>
        )}
      </div>
      {caption && (
        <div className="mono" style={{ marginTop: 10, color: "#888", fontSize: 11, letterSpacing: "0.16em" }}>
          {caption}
        </div>
      )}
    </div>
  );
}

window.Wordmark = Wordmark;
window.LimeDot = LimeDot;
window.Btn = Btn;
window.Crosshairs = Crosshairs;
window.Eyebrow = Eyebrow;
window.Coords = Coords;
window.PhotoSlot = PhotoSlot;
