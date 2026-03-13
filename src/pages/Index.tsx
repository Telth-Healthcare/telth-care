import { useState } from "react";
import Navbar from "@/components/telth/Navbar";
import HeroSection from "@/components/telth/HeroSection";
import TrustBar from "@/components/telth/TrustBar";
import WhatIsCMSection from "@/components/telth/WhatIsCMSection";
import WhoIsItForSection from "@/components/telth/WhoIsItForSection";
import HowItWorksSection from "@/components/telth/HowItWorksSection";
import DayInLifeSection from "@/components/telth/DayInLifeSection";
import EarningsSection from "@/components/telth/EarningsSection";
import IncomeStreamsSection from "@/components/telth/IncomeStreamsSection";
import WhatTelthGivesSection from "@/components/telth/WhatTelthGivesSection";
import TestimonialSection from "@/components/telth/TestimonialSection";
import WebinarSection from "@/components/telth/WebinarSection";
import PartnerSection from "@/components/telth/PartnerSection";
import FAQSection from "@/components/telth/FAQSection";
import Footer from "@/components/telth/Footer";
import ApplicationModal from "@/components/telth/ApplicationModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar onApply={() => setModalOpen(true)} />
      <HeroSection onApply={() => setModalOpen(true)} />
      <TrustBar />
      <WhatIsCMSection />
      <WhoIsItForSection />
      <HowItWorksSection />
      <DayInLifeSection />
      <EarningsSection />
      <IncomeStreamsSection />
      <WhatTelthGivesSection />
      <TestimonialSection />
      <WebinarSection />
      <PartnerSection />
      <FAQSection onApply={() => setModalOpen(true)} />
      <Footer />
      <ApplicationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
