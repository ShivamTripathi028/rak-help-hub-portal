
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
        <h2 className="text-lg font-medium text-blue-800">How does this work?</h2>
        {isExpanded ? (
          <ChevronUp className="text-blue-500" size={20} />
        ) : (
          <ChevronDown className="text-blue-500" size={20} />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-4">
          <p className="text-blue-900 mb-2">
            When you submit the form, your ticket will be posted in the relevant channel.
          </p>
          <ul className="list-disc list-inside text-blue-900 mb-2">
            <li>For IT or RAKWireless Support issues, refer channel <span className="font-medium">IT-Helpdesk-General</span></li>
            <li>For Website or Store issues, refer channel <span className="font-medium">Webster-Jira-Update</span></li>
          </ul>
          <p className="text-blue-900">
            Our working hours are between 9 AM to 6 PM (GMT+8). Once we've resolved the issue, we'll tag you in the respective thread. 
            For further information you can communicate with the team in ticket.
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
