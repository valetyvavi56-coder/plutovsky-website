"use client";
import { useState } from "react";
import "./premium.css";

const MINT = "9s2JZaeq2rqx2xPZE4UHmyT1EseQAQ82vYHh1EUsp9as";
const RAYDIUM = "https://raydium.io/swap/?inputMint=sol&outputMint=" + MINT;

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");

  async function connectWallet() {
    const phantom = (window as any).phantom?.solana;
    if (!phantom?.isPhantom) {
      window.open("https://phantom.com/", "_blank", "noopener,noreferrer");
      return;
    }
    try {
      const result = await phantom.connect();
      setWallet(result.publicKey.toString());
      setMessage("");
    } catch {
      setMessage("Wallet connection cancelled.");
    }
  }

  return (
    <main className="space-site">
      <div className="stars stars-one" />
      <div className="stars stars-two" />

      <nav className="space-nav">
        <a href="#" className="brand">
          <span className="brand-icon">✦</span> PLUTOVSKY
        </a>
        <div className="nav-links">
        
        
        <a
          href="https://x.com/plutovsky222"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-link"
        >
          𝕏 Follow PlutoVsky
        </a>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#trade">Trade</a>
          
        </div>
        <button className="wallet-btn" onClick={connectWallet}>
          {wallet
            ? wallet.slice(0, 5) + "..." + wallet.slice(-4)
            : "◈ Connect Wallet"}
        </button>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> THE SOLANA UNIVERSE
          </div>

          <h1>
            BEYOND
            <br />
            THE <span>STARS.</span>
          </h1>

          <p className="hero-subtitle">
            The future is not on Earth.
            <br />
            Welcome to <strong>PlutoVsky.</strong>
          </p>

          <p className="hero-description">
            A community-driven digital token built on Solana.
            Explore the universe of $PVSKY.
          </p>

          <div className="hero-actions">
            <a href="#trade" className="btn-primary">
              🚀 Buy $PVSKY <span>↗</span>
            </a>
            <a href="#trade" className="btn-outline">
              Sell Token ↗
            </a>
          </div>

          <div className="hero-meta">
            <span>✧ Solana Network</span>
            <span>✧ Community Driven</span>
          </div>
        </div>

        <div className="planet-scene" aria-label="Animated cosmic planet">
          <div className="planet-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="planet">
            <div className="planet-surface" />
            <div className="planet-shadow" />
          </div>
          <div className="planet-front-ring" />
          <div className="planet-spark spark-one">✦</div>
          <div className="planet-spark spark-two">✧</div>
          <div className="floating-label">PVSKY / SOLANA</div>
        </div>
      </section>

      
      <div className="ticker">
        <div className="ticker-content">
          ✦ PLUTOVSKY &nbsp; ✦ EXPLORE THE UNIVERSE &nbsp;
          ✦ BUILT ON SOLANA &nbsp; ✦ $PVSKY &nbsp;
          ✦ BEYOND THE STARS &nbsp; ✦ PLUTOVSKY &nbsp;
        </div>
      </div>

      <section id="about" className="content-section">
        <div className="section-heading">
          <span className="section-kicker">01 / OUR MISSION</span>
          <h2>A NEW <span>UNIVERSE.</span></h2>
          <p>
            PlutoVsky brings together a community of explorers,
            creators and crypto enthusiasts on the Solana blockchain.
          </p>
        </div>

        <div className="feature-grid">
          <article className="glass-card">
            <div className="feature-icon">⚡</div>
            <h3>Solana Powered</h3>
            <p>Built on a high-performance blockchain ecosystem.</p>
          </article>
          <article className="glass-card">
            <div className="feature-icon">✧</div>
            <h3>Community First</h3>
            <p>Created around a shared passion for digital exploration.</p>
          </article>
          <article className="glass-card">
            <div className="feature-icon">🪐</div>
            <h3>Cosmic Identity</h3>
            <p>A distinctive token with an interstellar theme.</p>
          </article>
        </div>
      </section>

            <section className="ai-section">
        <div className="ai-description">
          <span className="section-kicker">
            ARTIFICIAL INTELLIGENCE × SPACE
          </span>
          <h2>AI BEYOND <span>THE STARS.</span></h2>
          <p className="ai-lead">
            Where Artificial Intelligence Meets the Universe.
          </p>
          <p>
            PlutoVsky is a visionary AI-powered space exploration
            concept inspired by the next generation of astronaut
            technology.
          </p>
          <p>
            Our vision is to explore how artificial intelligence
            could support astronauts, assist with mission planning,
            analyze complex space data, and help humanity navigate
            the challenges of deep-space exploration.
          </p>
          <p>
            Combining AI innovation, cosmic imagination, and the
            Solana ecosystem, PlutoVsky aims to inspire a community
            passionate about intelligent space exploration.
          </p>
          <div className="ai-tags">
            <span>AI Innovation</span>
            <span>Space Exploration</span>
            <span>Astronaut Technology</span>
            <span>Solana Ecosystem</span>
          </div>
          <p className="ai-disclaimer">
            PlutoVsky is an early-stage concept. No operational
            astronaut AI system or space-agency partnership is claimed.
          </p>
        </div>
      </section>
      <section id="tokenomics" className="content-section">
        <div className="section-heading">
          <span className="section-kicker">02 / THE NUMBERS</span>
          <h2>TOKEN<span>OMICS.</span></h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>TOTAL SUPPLY</span>
            <strong>1,000,000,000</strong>
            <small>PVSKY TOKENS</small>
          </div>
          <div className="stat-card">
            <span>BLOCKCHAIN</span>
            <strong>SOLANA</strong>
            <small>SPL ECOSYSTEM</small>
          </div>
          <div className="stat-card">
            <span>SYMBOL</span>
            <strong>$PVSKY</strong>
            <small>PLUTOVSKY</small>
          </div>
        </div>
      </section>

      
      <section id="trade" className="content-section trade-section">
        <div className="trade-panel">
          <span className="section-kicker">03 / START EXPLORING</span>
          <h2>READY FOR <span>TAKEOFF?</span></h2>
          <p>Explore trading options for PlutoVsky on Raydium.</p>

          <div className="trade-actions">
            <a href={RAYDIUM} target="_blank"
              rel="noopener noreferrer" className="btn-primary">
              ↗ Buy $PVSKY
            </a>
            <a href={RAYDIUM} target="_blank"
              rel="noopener noreferrer" className="btn-outline">
              ↗ Sell $PVSKY
            </a>
          </div>

          <p className="trade-note">
            These buttons open Raydium's general swap page.
            Verify the official mint address before trading.
            Cryptocurrency involves financial risk.
          </p>
          {message && <p className="trade-note">{message}</p>}
        </div>
      </section>

      <footer className="space-footer">
        <div className="brand">
          <span className="brand-icon">✦</span> PLUTOVSKY
        </div>
        <p>Beyond the Moon. Into the Future.</p>
        <small>© 2026 PlutoVsky. All rights reserved.</small>
      </footer>
    
<section id="buy" style={{textAlign:"center",padding:"80px 20px"}}>
  <h2>Buy PlutoVsky</h2>
  <p>Trade PlutoVsky on Pump.fun using your Solana wallet.</p>
  <a
    href="https://pump.fun/coin/9s2JZaeq2rqx2xPZE4UHmyT1EseQAQ82vYHh1EUsp9as"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
  >
    🚀 Buy PlutoVsky on Pump.fun
  </a>
</section>

</main>
  );
}








