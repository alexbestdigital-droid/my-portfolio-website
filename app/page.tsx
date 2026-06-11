import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Stats from "@/components/Stats";
import FeaturedVideos from "@/components/FeaturedVideos";
import Academy from "@/components/Academy";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Stats />
        <FeaturedVideos />
        <Academy />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
