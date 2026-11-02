"use client";

import { useState } from "react";
import { supabase } from "./supabase";

export default function AirdropSection() {
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitWallet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const address = wallet.trim();

    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
      setMessage("Invalid Solana wallet address.");
      return;
    }

    setLoading(true);

    try {
      if (!supabase) {
        setMessage("Airdrop is temporarily unavailable.");
        return;
      }
      const { error } = await supabase
        .from("airdrop_public_requests")
        .insert({ wallet_address: address });

      if (error) {
        setMessage(error.code === "23505"
          ? "This wallet is already registered."
          : "Error: " + error.message);
      } else {
        setMessage("Wallet submitted successfully!");
        setWallet("");
      }
    } catch {
      setMessage("Connection error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="airdrop" className="content-section">
      <div className="section-heading">
        <span className="section-kicker">PLUTOVSKY AIRDROP</span>
        <h2>CLAIM YOUR <span>$PVSKY.</span></h2>
        <p>Enter your Solana wallet address to join the airdrop.</p>
      </div>

      <div className="trade-panel" style={{ maxWidth: 650, margin: "0 auto" }}>
        <form onSubmit={submitWallet} style={{ display: "grid", gap: 18 }}>
          <input
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Enter Solana wallet address"
            maxLength={44}
            required
            style={{
              padding: 17,
              borderRadius: 12,
              background: "#101935",
              border: "1px solid rgba(255,255,255,.25)",
              color: "white",
              width: "100%",
              boxSizing: "border-box"
            }}
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "🚀 Submit Wallet"}
          </button>
          {message && <p role="status" className="trade-note">{message}</p>}
        </form>
      </div>
    </section>
  );
}

