
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const InfoBox = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-sm shadow-sm my-6">
      <div 
        className="px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-medium text-blue-800">📘 How does this work?</h2>
        {isExpanded ? (
          <ChevronUp className="text-blue-500" size={20} />
        ) : (
          <ChevronDown className="text-blue-500" size={20} />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-4 space-y-4 text-blue-900">
          <p>
            When you submit a form, your ticket will be posted in the relevant internal channel so the appropriate team can take action.
          </p>
          <div>
            <h3 className="font-semibold">Technical Support Requests</h3>
            <p>For device setup, configuration, firmware, etc., your ticket will be handled by the RAK technical team via the Technical-Support channel.</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Inquiries</h3>
            <p>For help choosing the right LoRaWAN device, deployment advice, etc., the ticket will be routed to the Product-Sales channel for the sales and solution engineering teams.</p>
          </div>
          <div>
            <h3 className="font-semibold">⏰ Working Hours</h3>
            <p>We are available between 9 AM to 6 PM (GMT+8). Once your issue has been resolved, you'll be tagged in the corresponding thread. For any updates, follow the ticket thread or communicate directly with the assigned team.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
