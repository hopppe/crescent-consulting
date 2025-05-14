import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import KeyServices from "@/components/sections/KeyServices";
import DetailedServices from "@/components/sections/DetailedServices";
import Contact from "@/components/sections/Contact";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <KeyServices />
        <DetailedServices />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
