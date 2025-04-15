
import { useState } from "react";
import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import FormSelector from "@/components/FormSelector";
import TechnicalSupportForm from "@/components/TechnicalSupportForm";
import InquiryForm from "@/components/InquiryForm";

type FormType = null | 'support' | 'inquiry';

const Index = () => {
  const [selectedForm, setSelectedForm] = useState<FormType>(null);

  const handleFormSelection = (formType: 'support' | 'inquiry') => {
    setSelectedForm(formType);
    // Scroll to top when switching forms
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSelection = () => {
    setSelectedForm(null);
    // Scroll to form selector area when going back
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <InfoBox />
        
        {selectedForm === null ? (
          <FormSelector onSelectForm={handleFormSelection} />
        ) : selectedForm === 'support' ? (
          <TechnicalSupportForm onBack={handleBackToSelection} />
        ) : (
          <InquiryForm onBack={handleBackToSelection} />
        )}
      </div>
      
      <footer className="mt-auto py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} RAKWireless. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
