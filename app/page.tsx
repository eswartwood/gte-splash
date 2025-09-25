// app/page.tsx — Pixel-forward Home using hero desktop/mobile + sections
import Link from "next/link";

export default function Home() {
  return (
    <main className="home with-bg">
      <section className="hero">
        <h1 className="headline">THE FUTURE OF OWNERSHIP STARTS HERE!</h1>
        <p className="subhead">ART. MUSIC. REAL ESTATE. TOKENIZED.</p>
      </section>

      <section className="featured">
        <div className="grid">
          {/* Placeholder cards — replace with real data later */}
          {Array.from({length: 6}).map((_, i) => (
            <div className="card" key={i}>
              <div className="thumb" />
              <div className="meta">
                <h3>Sample Token {i+1}</h3>
                <p>Creator Name</p>
              </div>
              <div className="actions">
                <button className="pill">View</button>
                <button className="pill">Play</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-row">
        <p className="cta-lead">Ready to mint your Music, Art, or Asset?</p>
        <div className="cta-buttons">
          <Link href="/mint/music" className="cta gold">Mint Music</Link>
          <Link href="/mint/art" className="cta silver">Mint Art</Link>
          <Link href="/mint/asset" className="cta green">Mint Asset</Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="left"><Link href="/splash" className="btn-ghost">View Splash</Link></div>
        <div className="right badge">PATENT PENDING</div>
      </footer>
    </main>
  );
}
