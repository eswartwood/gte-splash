// app/home/page.tsx — Mint Home Screen
import Link from "next/link";

export default function HomeScreen() {
  return (
    <main className="home">
      <header className="home-header">
        <h1>GLOBAL TOKEN EXCHANGE</h1>
        <p className="tagline">MINT. OWN. MONETIZE.</p>
      </header>

      <section className="cards">
        <Link href="/mint/music" className="card">
          <h2>Mint Music</h2>
          <p>Tokenize tracks with licensing metadata and gated playback.</p>
        </Link>
        <Link href="/mint/art" className="card">
          <h2>Mint Art</h2>
          <p>Prove authorship, editions, and royalties with tokenized certificates.</p>
        </Link>
        <Link href="/mint/asset" className="card">
          <h2>Mint Asset</h2>
          <p>Real‑world assets & certificates with verifiable ownership.</p>
        </Link>
      </section>

      <footer className="home-footer">
        <Link href="/" className="btn-ghost">Back to Splash</Link>
      </footer>
    </main>
  );
}
