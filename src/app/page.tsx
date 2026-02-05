import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
