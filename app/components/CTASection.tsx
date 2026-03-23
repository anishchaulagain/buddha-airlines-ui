"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mountainY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cloudY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="discover"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "12rem 2rem 17rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('/cta-assets/sky-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Mountain */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-10%",
          width: "120%",
          height: "100%",
          backgroundImage: "url('/cta-assets/experience-mountain.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          zIndex: 0,
          y: mountainY,
          opacity: 1
        }}
      />

      {/* Background Cloud */}
      {/* <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-10%",
          width: "140%",
          height: "100%",
          backgroundImage: "url('/cta-assets/cloud.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 1,
          y: cloudY,
          opacity: 1,
        }}
      /> */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}
      >
        <div className="caption" style={{ marginBottom: "1.5rem", color: "rgba(255, 255, 255, 0.8)" }}>
          The Spirit of Nepal
        </div>

        <h2
          className="heading-lg"
          style={{
            marginBottom: "1.5rem",
            textShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
            color: "white",
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
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
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
