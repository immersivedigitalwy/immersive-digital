/* eslint-disable */
// Infinite scrolling marquee — speed reacts to user's scroll velocity.

function Marquee({ items, accent = "lime" }) {
  const all = [...items, ...items];
  const v = useScrollVelocity();
  // Base 36s loop, sped up when user scrolls.
  // Clamp boost so it doesn't get cartoonish.
  const boost = Math.min(8, v * 0.5);
  const duration = Math.max(8, 36 - boost);
  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {all.map((it, i) => (
          <span key={i} className="marquee-item">
            <span style={{ color: accent === "lime" ? "#fff" : "#0A0A0A" }}>{it}</span>
            <span className="dot" style={{ background: accent === "lime" ? "#C6F84E" : "#0A0A0A" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

window.Marquee = Marquee;
