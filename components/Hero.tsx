import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Travel Background" 
          className="w-full h-full object-cover"
        />
        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/80 to-brand-orange/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold mb-6 animate-fade-in-up">
          Explore the Unseen
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg tracking-tight">
          Your Journey Begins with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200">Bhraman</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Discover curated international packages, custom itineraries, and unforgettable experiences tailored just for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#planner" 
            className="group bg-brand-orange hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/30 flex items-center gap-2 transform hover:-translate-y-1"
          >
            Plan My Trip
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#packages" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            View Packages
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
