import React from 'react';

export default function Logo() {
  return (
    <div className="logo-container">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="water-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path d="M24 5C24 5 10 22 10 31C10 38 16 43 24 43C32 43 38 38 38 31C38 22 24 5 24 5Z" fill="url(#water-gradient)" stroke="#2563eb" strokeWidth="2"/>
        <ellipse cx="24" cy="32" rx="7" ry="4" fill="#fff" fillOpacity="0.3"/>
      </svg>
      <span className="logo-title">AquaConta</span>
    </div>
  );
} 