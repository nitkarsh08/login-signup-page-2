"use client";

import "./Poster.css";

export default function Poster() {
  return (
    <div className="poster-page">
      <div className="poster">
        <div className="poster-bg" />
        <div className="poster-glow" />

        <svg className="poster-mountains" viewBox="0 0 400 220" preserveAspectRatio="none">
          <polygon
            points="0,220 0,140 60,80 120,150 180,60 240,140 300,90 360,150 400,110 400,220"
            fill="#11161a"
          />
          <polygon
            points="0,220 0,170 80,120 160,180 240,110 320,170 400,140 400,220"
            fill="#0a0d0f"
          />
        </svg>

        <div className="poster-content">
          <div>
            <div className="brand-mark">AW</div>
            <div className="brand-name">
              AW <span>Solution</span>
            </div>
            <div className="tagline">
              Smart software solutions built to help your business grow, earn, and scale — faster.
            </div>
          </div>

          <div className="hero-text">
            <div className="divider" />
            <h1>
              Begin your journey
              <br />
              with AW Solution
            </h1>
            <p>Web &amp; app development · MERN stack · Custom business tools</p>
          </div>

          <div className="poster-footer">
            <a href="#" className="cta">
              Get Started →
            </a>
            <div className="footer-row">
              <span>www.awsolution.com</span>
              <span className="dot" />
              <span>hello@awsolution.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
