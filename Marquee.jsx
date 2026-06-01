/* eslint-disable */
// Infinite scrolling marquee — speed reacts to user's scroll velocity.
// The duration is smoothed (eased + rounded) so changing it mid-loop
// doesn't make the track visibly jump back and forth.

function Marquee({ items, accent = "lime" }) {
  const all = [...items, ...items];
  const v = useScrollVelocity();

  // Target duration: base 36s loop, sped up when the user scrolls.
  // Clamp boost so it doesn't get cartoonish.
  const boost = Math.min(8, v * 0.5);
  const targetDuration = Math.max(8, 36 - boost);

  // Ease the displayed duration toward the target instead of snapping.
  // Rounding to whole seconds means animation-duration only changes in
  // coarse steps, and the CSS transition below blends each step, so the
  // marquee speeds up / slows down smoothly with no jump.
  const [duration, setDuration] = React.useState(36);
  const targetRef = React.useRef(targetDuration);
  targetRef.current = targetDuration;

  React.useEffect(() => {
    let raf;
    const tick = () => {
      setDuration((d) => {
        const next = d + (targetRef.current - d) * 0.08;
        return Math.abs(next - d) < 0.01 ? d : next;
      });
      raf = setTimeout(tick, 80);
    };
    raf = setTimeout(tick, 80);
    return () => clearTimeout(raf);
  }, []);

  const rounded = Math.round(duration);

  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{
          animationDuration: `${rounded}s`,
          transition: "animation-duration 600ms linear",
        }}
      >
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
