"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingFlight() {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <section
      id="book"
      style={{
        padding: "8rem 2rem",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="heading-lg" style={{ color: "var(--accent-blue)", marginBottom: "1rem" }}>
          Where will you go next?
        </h2>
        <p className="body-text" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Experience the warmth of Nepalese hospitality and the thrill of the Himalayas with Buddha Airlines.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          background: "white",
          borderRadius: "24px",
          padding: "2.5rem",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
        }}
      >
        {/* Trip Type Tabs */}
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
          {["round-trip", "one-way", "multi-city"].map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              style={{
                background: "none",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: tripType === type ? "var(--accent-blue)" : "#999",
                cursor: "pointer",
                padding: "0.5rem 0",
                position: "relative",
                textTransform: "capitalize",
              }}
            >
              {type.replace("-", " ")}
              {tripType === type && (
                <motion.div
                  layoutId="tab-underline"
                  style={{
                    position: "absolute",
                    bottom: -17,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent-blue)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Search Fields Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>From</label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Origin City"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>To</label>
            <input
              type="text"
              placeholder="Destination City"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Departure</label>
            <input
              type="date"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                fontSize: "1rem",
                outline: "none",
                color: "#444"
              }}
            />
          </div>

          {tripType === "round-trip" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Return</label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  fontSize: "1rem",
                  outline: "none",
                  color: "#444"
                }}
              />
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#777", textTransform: "uppercase", letterSpacing: "0.05em" }}>Passengers</label>
            <select
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                fontSize: "1rem",
                outline: "none",
                background: "white"
              }}
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4+ Adults</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            className="btn-primary"
            style={{
              padding: "1.2rem 4rem",
              fontSize: "1rem",
              boxShadow: "0 10px 20px rgba(49, 96, 137, 0.2)"
            }}
          >
            <span>Search Flights</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
