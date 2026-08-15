// src/App.jsx — updated
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import MidCTA from "./components/MidCTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0d]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <MidCTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
