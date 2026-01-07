import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <WhyWorkWithUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
