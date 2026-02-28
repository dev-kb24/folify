import HeroComponent from "@/components/Hero";
import CustomSitesSection from "@/components/CustomSitesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import PricingSectionComponent from "@/components/PricingSection";
import ClientBriefForm from "@/components/ClientBriefForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <HeroComponent />
      <PricingSectionComponent />
      <PortfolioPreview />
      <CustomSitesSection />
      <ClientBriefForm />
      <Footer />
    </div>
  );
}
