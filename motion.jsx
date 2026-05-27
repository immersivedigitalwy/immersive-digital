/* eslint-disable */
// Motion primitives — reveal, parallax, scroll progress, split text.
// IMPORTANT: This sandbox suspends both IntersectionObserver and
// requestAnimationFrame on inactive iframes. Everything here uses
// setTimeout-based throttling instead.

const { useState, useEffect, useRef, useLayoutEffect } = React;

// ~60fps throttle via setTimeout
function throttle(fn, ms = 16) {
  let pending = null;
  return () => {
    if (pending) return;
    pending = setTimeout(() => { pending = null; fn(); }, ms);
  };
}

// -------- useInView -----------------------------------------------
function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const rootMargin = opts.rootMargin == null ? 80 : opts.rootMargin;
  const once = opts.once !== false;

  useEffect(() => {
    let cancelled = false;
    let triggered = false;
    let pollId = null;

    const check = () => {
      if (cancelled) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = r.top < vh - rootMargin && r.bottom > 0;
      if (visible && !triggered) {
        triggered = true;
        setInView(true);
        if (once) cleanup();
      } else if (!visible && !once && triggered) {
        triggered = false;
        setInView(false);
      }
    };

    const onScroll = throttle(check, 16);

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (pollId) clearInterval(pollId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Poll briefly so we don't depend solely on scroll events firing —
    // some sandboxed previews can swallow programmatic-scroll events.
    pollId = setInterval(check, 250);

    // First check fires shortly after mount, giving the initial paint a beat.
    setTimeout(check, 120);

    return () => { cancelled = true; cleanup(); };
  }, [rootMargin, once]);

  return [ref, inView];
}

// -------- useTween ------------------------------------------------
// JS-driven tween from `from` → `to` over `duration` ms, returning the
// current value. Bypasses CSS transitions, which can stall in sandboxed
// preview iframes where the compositor is paused.
function useTween(active, { from = 0, to = 1, duration = 800, delay = 0, ease } = {}) {
  const [v, setV] = useState(active ? to : from);
  useEffect(() => {
    if (!active) {
      setV(from);
      return;
    }
    let cancelled = false;
    let start = null;
    let timeoutId = setTimeout(() => {
      start = Date.now();
      const tick = () => {
        if (cancelled) return;
        const now = Date.now();
        const t = Math.min(1, (now - start) / duration);
        const e = ease ? ease(t) : (1 - Math.pow(1 - t, 3)); // ease-out-cubic default
        setV(from + (to - from) * e);
        if (t < 1) timeoutId = setTimeout(tick, 16);
      };
      tick();
    }, delay);
    return () => { cancelled = true; clearTimeout(timeoutId); };
  }, [active]);
  return v;
}

// -------- Reveal --------------------------------------------------
function Reveal({ children, delay = 0, className = "", as = "div", style }) {
  const [ref, inView] = useInView();
  const op = useTween(inView, { from: 0, to: 1, duration: 700, delay });
  const ty = useTween(inView, { from: 36, to: 0, duration: 800, delay });
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: op,
        transform: `translateY(${ty}px)`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// -------- SplitText ----------------------------------------------
function SplitText({ text, delay = 0, stagger = 60, className = "", as = "span" }) {
  const [ref, inView] = useInView();
  const words = text.split(" ");
  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <SplitWord key={i} word={w} inView={inView} delay={delay + i * stagger} />
      ))}
    </Tag>
  );
}

function SplitWord({ word, inView, delay }) {
  const op = useTween(inView, { from: 0, to: 1, duration: 600, delay });
  const ty = useTween(inView, { from: 90, to: 0, duration: 900, delay });
  return (
    <span style={{
      display: "inline-block", overflow: "hidden",
      paddingBottom: "0.1em", marginRight: "0.28em",
      verticalAlign: "top",
    }}>
      <span style={{
        display: "inline-block",
        opacity: op,
        transform: `translateY(${ty}px)`,
      }}>{word}</span>
    </span>
  );
}

// -------- MaskReveal ----------------------------------------------
function MaskReveal({ children, delay = 0, className = "", style }) {
  const [ref, inView] = useInView();
  // animate scaleX from 1 → 0 (lime wipe slides off to the left)
  const sx = useTween(inView, { from: 1, to: 0, duration: 1000, delay });
  // Pivot the origin midway: first scale stays right-anchored (wipe on),
  // then switches to left-anchored (wipe off). With JS tween we just use
  // left origin always — simpler and reads as a clean swipe-off.
  return (
    <span
      ref={ref}
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        ...style,
      }}
    >
      <span style={{
        position: "absolute", inset: 0, background: "#C6F84E",
        transformOrigin: "left",
        transform: `scaleX(${sx})`,
        zIndex: 1, pointerEvents: "none",
      }} />
      <span style={{ position: "relative", zIndex: 0 }}>{children}</span>
    </span>
  );
}

// -------- useScrollY ----------------------------------------------
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const update = throttle(() => setY(window.scrollY), 16);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return y;
}

// -------- Parallax ------------------------------------------------
function Parallax({ children, speed = 0.2, className = "", style }) {
  const ref = useRef(null);
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const update = throttle(() => {
      const r = ref.current.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const vh = window.innerHeight;
      const offset = (center - vh / 2) * speed * -1;
      setT(offset);
    }, 16);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [speed]);
  return (
    <div ref={ref} className={className} style={{ ...style, transform: `translate3d(0, ${t}px, 0)`, willChange: "transform" }}>
      {children}
    </div>
  );
}

// -------- Counter -------------------------------------------------
function Counter({ to, suffix, duration = 1400 }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const e = 1 - Math.pow(1 - t, 3);
      setN(Math.round(e * to));
      if (t < 1) setTimeout(tick, 16);
    };
    tick();
  }, [inView, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix && <span className="unit">{suffix}</span>}</span>;
}

// -------- ScrollProgressBar ---------------------------------------
function ScrollProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const update = throttle(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setW(Math.max(0, Math.min(1, p)) * 100);
    }, 16);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="scroll-progress" style={{ width: w + "%" }} />;
}

// -------- Tilt ----------------------------------------------------
function Tilt({ children, max = 6, className = "", style }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: -py * max, y: px * max });
  };
  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// -------- useMagnetic --------------------------------------------
// Returns an offset to apply to a button so it gently tracks the cursor
// when the cursor is within `radius` pixels. Creates the "magnetic"
// button feel (Awwwards / Studio Lumio style).
function useMagnetic({ strength = 0.35, radius = 110 } = {}) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        setT({ x: dx * strength, y: dy * strength });
      } else if (t.x !== 0 || t.y !== 0) {
        setT({ x: 0, y: 0 });
      }
    };
    const onLeave = () => setT({ x: 0, y: 0 });
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, radius]);
  return [ref, t];
}

// -------- useScrollVelocity --------------------------------------
// Returns the current scroll speed (px/frame), eased.
function useScrollVelocity() {
  const [v, setV] = useState(0);
  useEffect(() => {
    let last = window.scrollY;
    let raf = null;
    const tick = () => {
      const now = window.scrollY;
      const delta = Math.abs(now - last);
      last = now;
      setV((prev) => prev * 0.85 + delta * 0.15);
      raf = setTimeout(tick, 60);
    };
    tick();
    return () => clearTimeout(raf);
  }, []);
  return v;
}

// -------- MagneticButton -----------------------------------------
function MagneticButton({ children, onClick, className = "btn primary", style, type, strength = 0.35, ...rest }) {
  const [ref, t] = useMagnetic({ strength });
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={className}
      style={{
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform 220ms cubic-bezier(0.22,1,0.36,1)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

window.useMagnetic = useMagnetic;
window.useScrollVelocity = useScrollVelocity;
window.MagneticButton = MagneticButton;

window.useInView = useInView;
window.Reveal = Reveal;
window.SplitText = SplitText;
window.MaskReveal = MaskReveal;
window.useScrollY = useScrollY;
window.Parallax = Parallax;
window.Counter = Counter;
window.ScrollProgressBar = ScrollProgressBar;
window.Tilt = Tilt;
