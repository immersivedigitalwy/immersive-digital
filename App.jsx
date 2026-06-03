/* eslint-disable */
// Router with full-screen lime wipe transition between pages.
// URL-synced: deep links, refresh, and browser back/forward all work.
// Supports a special route format "service:<slug>" for detail pages.

const ROUTES = {
home: "/",
services: "/services",
work: "/work",
about: "/about",
contact: "/contact",
privacy: "/privacy",
terms: "/terms",
cookies: "/cookies",
};

function pageToPath(page) {
if (typeof page === "string" && page.startsWith("service:")) {
return "/services/" + page.slice("service:".length);
}
return ROUTES[page] || "/";
}

function pathToPage(path) {
const p = (path || "/").replace(/\/+$/, "") || "/";
if (p === "/") return "home";
const m = p.match(/^\/services\/([^\/]+)$/);
if (m) return "service:" + m[1];
for (const key in ROUTES) {
if (ROUTES[key] === p) return key;
}
return "home";
}

function App() {
const [page, setPage] = React.useState(() => pathToPage(window.location.pathname));
const [wiping, setWiping] = React.useState(false);

const navigate = (target) => {
if (target === page) return;
setWiping(true);
setTimeout(() => {
setPage(target);
const path = pageToPath(target);
if (window.location.pathname !== path) {
window.history.pushState({ page: target }, "", path);
}
window.scrollTo({ top: 0, behavior: "instant" });
}, 600);
setTimeout(() => setWiping(false), 1300);
};

// Browser back/forward buttons
React.useEffect(() => {
const onPop = () => setPage(pathToPage(window.location.pathname));
window.addEventListener("popstate", onPop);
return () => window.removeEventListener("popstate", onPop);
}, []);

// Resolve which page component to render
let PageEl = null;
let pageProps = { onNavigate: navigate };

if (typeof page === "string" && page.startsWith("service:")) {
PageEl = PageServiceDetail;
pageProps.slug = page.slice("service:".length);
} else {
const map = {
home: PageHome,
services: PageServices,
work: PageWork,
about: PageAbout,
contact: PageContact,
privacy: PagePrivacy,
terms: PageTerms,
cookies: PageCookies,
};
PageEl = map[page] || PageHome;
}

// Map a route to the nav indicator
const navCurrent =
typeof page === "string" && page.startsWith("service:") ? "services" :
page;

return (
<>
<Cursor />
<ScrollProgressBar />
<Nav current={navCurrent} onNavigate={navigate} />
<PageEl {...pageProps} />
<Footer onNavigate={navigate} />
<div className={`page-wipe ${wiping ? "in" : ""}`}></div>
</>
);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
