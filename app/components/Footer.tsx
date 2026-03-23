"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Book a Flight", href: "#book" },
    { label: "Destinations", href: "#" },
    { label: "Schedules", href: "#" },
    { label: "Offers", href: "#" },
    { label: "Travel Info", href: "#" },
  ];

  return (
    <footer className="footer">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Top Area */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent-blue)",
                marginBottom: "0.75rem",
              }}
            >
              Buddha Airlines
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-body)",
                maxWidth: "280px",
                lineHeight: 1.6,
              }}
            >
              Excellence in the sky. Nepal's premier airline providing safe, 
              reliable, and comfortable domestic flights for over 25 years.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <div
                className="caption"
                style={{ marginBottom: "1rem" }}
              >
                Plan & Book
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: "0.85rem",
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
            </div>

            <div>
              <div
                className="caption"
                style={{ marginBottom: "1rem" }}
              >
                Support
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <a
                  href="#"
                  style={{
                    fontSize: "0.85rem",
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
                  Help Center
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: "0.85rem",
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
                  Flight Status
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: "0.85rem",
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
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            © {currentYear} Buddha Airlines. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-blue)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
