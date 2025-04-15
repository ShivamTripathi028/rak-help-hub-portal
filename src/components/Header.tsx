
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-b from-blue-700 to-blue-600 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 w-full">
          <img 
            src="/city-skyline.svg" 
            alt="City Skyline" 
            className="w-full h-32 object-cover" 
          />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 mt-8 md:mt-0">
            Welcome to the RAKWireless Help Center
          </h1>
          
          <div className="w-full max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search for information" 
              className="w-full py-3 px-4 pl-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
