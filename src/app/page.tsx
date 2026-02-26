import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ServicesShowcase from "@/components/ServicesShowcase";
import AIUseCases from "@/components/AIUseCases";
import AITemplates from "@/components/AITemplates";
import ServicesCards from "@/components/ServicesCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <ServicesShowcase />
      <AIUseCases />
      <AITemplates />
      <ServicesCards />
      <CTASection />
      <Footer />
    </div>
  );
}
