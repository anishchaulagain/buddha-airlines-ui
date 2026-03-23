"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="discover"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "10rem 2rem 8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(49, 96, 137, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}
      >
        <div className="caption" style={{ marginBottom: "1.5rem", color: "var(--accent-blue)" }}>
          The Spirit of Nepal
        </div>

        <h2
          className="heading-lg"
          style={{
            marginBottom: "1.5rem",
            textShadow: "0 0 60px rgba(49, 96, 137, 0.1)",
            color: "var(--accent-blue)",
          }}
        >
          Fly High with Buddha Airlines.
        </h2>

        <p
          className="body-text"
          style={{
            marginBottom: "3rem",
            maxWidth: "480px",
            margin: "0 auto 3rem",
          }}
        >
          Connecting you to the heart of the Himalayas. Experience safety, 
          comfort, and unparalleled views on every journey with Nepal's 
          most trusted airline.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#book" className="btn-primary">
            <span>Book Your Flight</span>
          </a>
          <a href="#" className="btn-secondary">
            View Destinations
          </a>
        </div>
      </motion.div>
    </section>
  );
}
