import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WinterInteriorSection from './components/WinterInteriorSection';
import Calculator from './components/Calculator';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyAltai from './components/WhyAltai';
import Process from './components/Process';
import ReviewsAndFaq from './components/ReviewsAndFaq';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';
import PrivacyModal from './components/PrivacyModal';
import ConsultationModal from './components/ConsultationModal';
import { ServiceItem } from './types';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>();

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenConsultation(`${service.title} (${service.price})`);
  };

  return (
    <div className="min-h-screen bg-[#101512] text-[#edece6] font-sans antialiased">
      {/* Top Header */}
      <Header onOpenConsultation={() => handleOpenConsultation('Вызов замерщика на Алтае')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with mountain background, badges and quick rates */}
        <Hero onOpenConsultation={() => handleOpenConsultation('Предварительный расчет объекта')} />

        {/* 1.5 Winter Interior Finishing Section - Key seasonal focus */}
        <WinterInteriorSection onOpenConsultation={(title) => handleOpenConsultation(title || 'Зимняя отделка помещений под ключ')} />

        {/* 2. Interactive Calculator with real Altai coefficients and WhatsApp/MAX export */}
        <Calculator onOpenConsultationWithData={(data) => handleOpenConsultation(data)} />

        {/* 3. Services & Pricing grid based on Vasily's real rates */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Portfolio with photos & real projects */}
        <Portfolio />

        {/* 5. Specifics of Mountain Construction on Altai */}
        <WhyAltai />

        {/* 6. Step-by-step Process & Guarantees */}
        <Process />

        {/* 7. Reviews from Altai Landowners & FAQ */}
        <ReviewsAndFaq />

        {/* 8. Lead Form with 152-ФЗ consent, phone, and direct messenger links */}
        <LeadForm
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          preselectedService={selectedServiceTitle}
        />
      </main>

      {/* Footer with legal data and domain info */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <FloatingMobileBar />

      {/* 152-FZ Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Quick Consultation & Measurement Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceTitle={selectedServiceTitle}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
}
