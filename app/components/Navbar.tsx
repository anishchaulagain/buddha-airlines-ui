"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Book", href: "#book" },
    { label: "My Trips", href: "#" },
    { label: "Check-in", href: "#" },
    { label: "Flight Status", href: "#" },
    { label: "Offers", href: "#" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1.5rem, 4vw, 4rem)",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Brand */}
      <a
        href="#"
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: "var(--accent-blue)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        Buddha Airlines
      </a>

      {/* Center Links — Desktop */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
        }}
        className="nav-links-desktop"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--text-body)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-blue)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-body)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA — Desktop */}
      <a
        href="#book"
        className="btn-primary nav-cta-desktop"
        style={{
          padding: "0.7rem 1.8rem",
          fontSize: "0.8rem",
        }}
      >
        <span>Book Now</span>
      </a>

      {/* Mobile menu button */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
        >
          {mobileOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            background: "white",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--text-body)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="btn-primary"
            style={{
              padding: "0.8rem 1.5rem",
              fontSize: "0.85rem",
              textAlign: "center",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <span>Book Now</span>
          </a>
        </div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
