import Link from "next/link";
export default function Splash(){return (
  <main className="splash with-bg" style={{minHeight:"100dvh",padding:"48px"}}>
    <div className="badge">PATENT PENDING</div>
    <div style={{textAlign:"center",marginTop:"20vh"}}>
      <h1>GLOBAL TOKEN EXCHANGE</h1>
      <p>MINT. OWN. MONETIZE.</p>
      <Link href="/" className="btn-ghost">Enter</Link>
    </div>
  </main>
);}
