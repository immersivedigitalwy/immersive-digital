/* eslint-disable */
// Custom cursor — small lime dot that grows on hovering interactive
// elements. Shows "VIEW" / "OPEN" / "BOOK" labels for elements
// tagged with data-cursor="view" etc.

function Cursor() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [mode, setMode] = React.useState(null); // null | 'hover' | 'view' | 'open' | 'book' | 'send'

  React.useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      const labeled = t.closest('[data-cursor]');
      if (labeled) {
        setMode(labeled.dataset.cursor);
        return;
      }
      const interactive = t.closest('a, button, .svc-row, .service-card');
      setMode(interactive ? "hover" : null);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  const labelMap = { view: "VIEW", open: "OPEN", book: "BOOK", send: "SEND" };
  const label = labelMap[mode];
  const isLabel = !!label;
  const isHover = mode === "hover";

  return (
    <div
      className={`cursor ${isHover ? "hover" : ""} ${isLabel ? "label" : ""}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        width: isLabel ? 80 : (isHover ? 48 : 16),
        height: isLabel ? 80 : (isHover ? 48 : 16),
        background: isLabel ? "#C6F84E" : (isHover ? "transparent" : "#C6F84E"),
        outline: (isHover && !isLabel) ? "1.5px solid #C6F84E" : "none",
        mixBlendMode: (isLabel || isHover) ? "normal" : "difference",
      }}
    >
      {isLabel && (
        <span style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0A0A0A",
          fontFamily: "var(--font-mono, var(--font-sans))",
          fontSize: 11, fontWeight: 700,
          letterSpacing: "0.18em",
        }}>{label}</span>
      )}
    </div>
  );
}

window.Cursor = Cursor;
