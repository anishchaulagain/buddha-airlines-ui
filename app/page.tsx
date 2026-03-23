"use client";

import Navbar from "./components/Navbar";
import ScrollCanvas from "./components/ScrollCanvas";
import CTASection from "./components/CTASection";
import BookingFlight from "./components/BookingFlight";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      {/* Ambient radial glow */}
      <div className="radial-glow" />

      {/* Navigation */}
      <Navbar />

      {/* Scroll-linked image sequence + story overlays */}
      <ScrollCanvas />

      {/* Booking Flight */}
      <BookingFlight />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
