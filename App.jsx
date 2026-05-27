/* eslint-disable */
// Router with full-screen lime wipe transition between pages.
// Supports a special route format "service:<slug>" for detail pages.

function App() {
  const [page, setPage] = React.useState("home");
  const [wiping, setWiping] = React.useState(false);

  const navigate = (target) => {
    if (target === page) return;
    setWiping(true);
    setTimeout(() => {
      setPage(target);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 600);
    setTimeout(() => setWiping(false), 1300);
  };

  // Resolve which page component to render
  let PageEl = null;
  let pageProps = { onNavigate: navigate };

  if (typeof page === "string" && page.startsWith("service:")) {
    PageEl = PageServiceDetail;
    pageProps.slug = page.slice("service:".length);
  } else {
    const map = {
      home:     PageHome,
      services: PageServices,
      work:     PageWork,
      about:    PageAbout,
      contact:  PageContact,
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
