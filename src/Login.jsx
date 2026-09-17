"use client";

import { useState } from "react";
import "./Login.css";



/* ---------- small inline icons (no extra package needed) ---------- */

const EyeIcon = ({ open }) =>
  open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.87 19.87 0 0 1 4.22-5.44M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.86 19.86 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.56-5.17 3.56-8.81Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.27a12 12 0 0 0 0 10.75l4-3.11Z" />
    <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.63l4 3.1c.95-2.85 3.6-4.96 6.73-4.96Z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
    <path d="M16.36 1.43c0 1.14-.42 2.2-1.24 3.03-.86.88-2.15 1.56-3.23 1.47-.14-1.1.41-2.26 1.2-3.06.83-.86 2.26-1.5 3.27-1.44ZM20.7 17.4c-.51 1.18-.76 1.7-1.42 2.75-.92 1.46-2.22 3.28-3.83 3.3-1.43.02-1.8-.93-3.74-.92-1.94.01-2.35.94-3.78.92-1.61-.02-2.83-1.66-3.75-3.12-2.58-4.06-2.85-8.82-1.26-11.35 1.13-1.8 2.9-2.86 4.57-2.86 1.7 0 2.77 1 4.18 1 1.36 0 2.2-1 4.18-1 1.49 0 3.06.81 4.18 2.2-3.68 2.02-3.08 7.28.67 9.08Z" />
  </svg>
);

/* ---------- reusable input with label ---------- */

function FormInput({ label, type = "text", placeholder, showToggle, show, onToggle }) {
  return (
    <div className="lr-field">
      <label className="lr-label">{label}</label>
      <div className="lr-input-wrap">
        <input
          type={showToggle ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          className="lr-input"
        />
        {showToggle && (
          <button type="button" onClick={onToggle} className="lr-eye" tabIndex={-1}>
            <EyeIcon open={show} />
          </button>
        )}
      </div>
    </div>
  );
}



function SocialRow({ label }) {
  return (
    <>
      <p className="lr-social-label">{label}</p>
      <div className="lr-social-row">
        {[FacebookIcon, GoogleIcon, AppleIcon].map((Icon, i) => (
          <button key={i} type="button" className="lr-social-btn">
            <Icon />
          </button>
        ))}
      </div>
    </>
  );
}

/* ---------- main component ---------- */

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <div className="lr-page">
      <div className="lr-card">
        {/* LOGIN — always left half */}
        <div className="lr-panel lr-panel-left">
          <h2 className="lr-title">Login</h2>
          <FormInput label="Email" placeholder="hello@example.com" />
          <FormInput
            label="Password"
            placeholder="••••••••"
            showToggle
            show={showPass}
            onToggle={() => setShowPass((s) => !s)}
          />
          <div className="lr-row">
            <label className="lr-remember">
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <a href="#" className="lr-link">Forget password?</a>
          </div>
          <button className="lr-btn">Login</button>
          <SocialRow label="Or Sign in with" />
        </div>

        {/* REGISTER — always right half */}
        <div className="lr-panel lr-panel-right">
          <h2 className="lr-title">Sign Up</h2>
          <FormInput label="Name" placeholder="Joe Bloggs" />
          <FormInput label="Email" placeholder="hello@example.com" />
          <FormInput
            label="Password"
            placeholder="••••••••"
            showToggle
            show={showPass2}
            onToggle={() => setShowPass2((s) => !s)}
          />
          <button className="lr-btn">Sign Up</button>
          <SocialRow label="Or Sign in with" />
        </div>

        {/* SLIDING OVERLAY */}
        <div className={`lr-overlay ${isLogin ? "lr-overlay-right" : "lr-overlay-left"}`}>
          <div className="lr-overlay-inner">
            <div className="lr-overlay-bg" />
            {isLogin ? (
              <div className="lr-overlay-content">
                <h3>Hello there</h3>
                <p>Begin your journey using this software, and start earning now.</p>
                <button className="lr-ghost-btn" onClick={() => setIsLogin(false)}>Sign Up</button>
              </div>
            ) : (
              <div className="lr-overlay-content">
                <h3>Welcome back</h3>
                <p>Login to review your latest profit from investments.</p>
                <button className="lr-ghost-btn" onClick={() => setIsLogin(true)}>Login</button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
    
  );
}
