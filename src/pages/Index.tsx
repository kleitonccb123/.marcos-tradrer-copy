import { useEffect } from "react";
import { TopBarNotice } from "@/components/TopBarNotice";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { OfferCard } from "@/components/OfferCard";
import { ChartDemo } from "@/components/ChartDemo";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ReasonsGrid } from "@/components/ReasonsGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { FAQSection } from "@/components/FAQSection";
import { CheckoutSection } from "@/components/CheckoutSection";
import { Footer } from "@/components/Footer";
import MacbookScrollDemo from "@/components/MacbookScrollDemo";
import { LiveStats } from "@/components/LiveStats";
import { BenefitsHighlight } from "@/components/BenefitsHighlight";
import { SocialDock } from "@/components/SocialDock";
import { AboutTrader } from "@/components/AboutTrader";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <TopBarNotice />
      <main>
        <HeroSection />
        <LiveStats />
        <ChartDemo />
        <VideoSection />
        <OfferCard />
        <BenefitsHighlight />
        <MacbookScrollDemo />
        <BenefitsSection />
        <ReasonsGrid />
        <TestimonialsSection />
        <AboutTrader />
        <StatsSection />
        <FAQSection />
        <CheckoutSection />
      </main>
      <Footer />
      <SocialDock />
    </div>
  );
};

export default Index;
