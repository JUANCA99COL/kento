import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Market from "@/components/Market";
import Portfolio from "@/components/Portfolio";
import Wallet from "@/components/Wallet";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Market />
      <Portfolio />
      <Wallet />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
