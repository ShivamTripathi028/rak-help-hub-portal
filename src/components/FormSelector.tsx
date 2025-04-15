
import { ArrowRight } from "lucide-react";

interface FormSelectorProps {
  onSelectForm: (formType: 'support' | 'inquiry') => void;
}

const FormSelector = ({ onSelectForm }: FormSelectorProps) => {
  return (
    <div className="py-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Featured portals</h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Technical Support Card */}
        <div 
          onClick={() => onSelectForm('support')}
          className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transition-all hover:shadow-lg hover:bg-blue-50 cursor-pointer hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-3">RAKWireless Technical Support</h3>
          <p className="text-gray-700 mb-6">
            Welcome! You can raise a request for RAKWireless Support using the options provided.
          </p>
          <div className="flex justify-end">
            <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 group">
              Get Support <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Inquiry Card */}
        <div 
          onClick={() => onSelectForm('inquiry')}
          className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transition-all hover:shadow-lg hover:bg-blue-50 cursor-pointer hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-3">RAKWireless Inquiry Page</h3>
          <p className="text-gray-700 mb-6">
            This form is designed for reporting issues related to our website and store, specifically for the development team to...
          </p>
          <div className="flex justify-end">
            <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 group">
              Submit Inquiry <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSelector;
