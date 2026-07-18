"use client";

import { useState } from "react";

const CONTRACT_TEXT = "Launching soon on Robinhood Chain";

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="8"
        fill="#111512"
        stroke="#00C805"
        strokeWidth="1"
      />
      <path
        d="M17 9 L17 31 M17 9 L27 15.5 L17 22 M17 24.5 L27 31"
        fill="none"
        stroke="#00C805"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [copyLabel, setCopyLabel] = useState("COPY");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_TEXT);
      setCopyLabel("COPIED");
      setTimeout(() => setCopyLabel("COPY"), 1500);
    } catch {
      // clipboard not available, ignore silently
    }
  };

  return (
    <>
      <div className="bg-texture" />

      <nav>
        <div className="wrap">
          <div className="brand">
            <LogoMark />
            <span>LEDGERUNE</span>
          </div>
          <div className="navlinks">
            <a href="#how">How it reads</a>
            <a href="#stone">The stone</a>
            <a href="#ledger">Tokenomics</a>
            <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
              Follow on X
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">ROBINHOOD CHAIN · AI ORACLE</div>
            <h1>
              It reads the chain like an oracle reads <em>runes</em>.
            </h1>
            <p className="lede">
              Ledgerune is an AI that decodes on-chain patterns on Robinhood
              Chain — wallet clustering, liquidity shifts, mint behavior —
              and surfaces the signal before the noise catches up.
            </p>
            <div className="hero-ctas">
              <a className="btn" href="#" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
              <a className="btn-ghost" href="#ledger">
                View tokenomics
              </a>
            </div>
            <div className="ca-row">
              <span>CONTRACT</span>
              <div className="ca-pill">
                <span id="ca-text">{CONTRACT_TEXT}</span>
                <button type="button" aria-label="Copy contract address" onClick={handleCopy}>
                  {copyLabel}
                </button>
              </div>
            </div>
          </div>

          <div className="tablet-stage">
            <div className="tablet">
              <svg viewBox="0 0 300 380" aria-hidden="true">
                <rect
                  x="10"
                  y="10"
                  width="280"
                  height="360"
                  rx="20"
                  fill="#141914"
                  stroke="#243024"
                  strokeWidth="1.5"
                />
                <rect
                  x="10"
                  y="10"
                  width="280"
                  height="360"
                  rx="20"
                  fill="none"
                  stroke="#00C805"
                  strokeWidth="0.6"
                  opacity="0.3"
                />
                <path className="crack crack-pulse" d="M10 90 L90 120 L10 165" />
                <path
                  className="crack crack-pulse"
                  d="M290 130 L190 60 L290 200"
                  style={{ animationDelay: ".6s" }}
                />
                <path
                  className="crack crack-pulse"
                  d="M60 370 L110 260 L170 370"
                  style={{ animationDelay: "1.2s" }}
                />
                <path
                  className="crack crack-pulse"
                  d="M290 260 L210 300 L290 340"
                  style={{ animationDelay: "1.8s" }}
                />
                <path
                  d="M110 70 L110 300 M110 70 L180 115 L110 155 M110 175 L180 220 L110 260"
                  fill="none"
                  stroke="#EDEAE2"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="scanline" />
            </div>
          </div>
        </div>
      </header>

      <section id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">PROCESS</div>
            <h2>Three passes over every block.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">01 / SCAN</div>
              <h3>Scan</h3>
              <p>
                Every new mint and wallet movement on Robinhood Chain is read
                in real time, no delay between the block and the reading.
              </p>
            </div>
            <div className="step">
              <div className="num">02 / DECODE</div>
              <h3>Decode</h3>
              <p>
                Patterns are cross-read against wallet clustering, liquidity
                shifts, and prior runs to separate structure from
                randomness.
              </p>
            </div>
            <div className="step">
              <div className="num">03 / SIGNAL</div>
              <h3>Signal</h3>
              <p>
                What survives the read is surfaced as plain signal —
                stripped of noise, before it&apos;s obvious to the rest of
                the chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stone">
        <div className="wrap manifesto">
          <blockquote>
            &ldquo;The ledger keeps the record. The rune reads what the
            record doesn&apos;t say out loud.&rdquo;
          </blockquote>
          <div className="body">
            <p>
              <strong>Ledgerune</strong> is named for two instruments. The
              ledger, the plain record of every transaction a chain keeps.
              The rune, an older mark, carved to hold meaning that
              isn&apos;t spelled out for everyone.
            </p>
            <p>
              Robinhood Chain is young. Most of what happens on it has no
              history to compare against yet —{" "}
              <strong>every pattern is being written for the first time.</strong>{" "}
              Ledgerune exists to read those first patterns as they form, not
              months later once they&apos;re common knowledge.
            </p>
            <p>
              It&apos;s a community experiment first, a token second. If it
              works, the read gets better with every block.
            </p>
          </div>
        </div>
      </section>

      <section id="ledger">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">LEDGER</div>
            <h2>The record, plainly stated.</h2>
          </div>
          <div className="ledger">
            <div className="ledger-row">
              <span>CHAIN</span>
              <span>Robinhood Chain</span>
            </div>
            <div className="ledger-row">
              <span>SUPPLY</span>
              <span>TBA</span>
            </div>
            <div className="ledger-row">
              <span>TAX</span>
              <span>0 / 0</span>
            </div>
            <div className="ledger-row">
              <span>LIQUIDITY</span>
              <span>Locked at launch</span>
            </div>
            <div className="ledger-row">
              <span>CONTRACT</span>
              <span>Launching soon</span>
            </div>
          </div>
          <p className="ledger-note">
            Figures above are placeholders for this preview site — replace
            with final numbers before launch.
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-brand">
                <LogoMark size={22} />
                <span>LEDGERUNE</span>
              </div>
              <p className="foot-tag">
                An AI reading on-chain patterns on Robinhood Chain. Decode
                the chain.
              </p>
            </div>
            <div className="foot-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="#how">How it reads</a>
              <a href="#ledger">Tokenomics</a>
            </div>
          </div>
          <p className="disclaimer">
            Ledgerune is a community token experiment on Robinhood Chain.
            Nothing on this page is financial advice. Always verify the
            contract address on official channels before buying.
          </p>
        </div>
      </footer>
    </>
  );
}
