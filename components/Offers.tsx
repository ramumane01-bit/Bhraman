import React from 'react';
import { Tag, Gift } from 'lucide-react';

const Offers: React.FC = () => {
  const offers = [
    {
      title: "Honeymoon Special",
      description: "Get 20% off and a free candlelight dinner on all Maldives and Bali packages.",
      code: "HONEY20",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Early Bird Deal",
      description: "Book 60 days in advance and save flat ₹10,000 on European tours.",
      code: "EARLY10K",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Group Discount",
      description: "Traveling with 6+ people? Enjoy complimentary visa assistance and airport transfers.",
      code: "GROUPFUN",
      color: "from-brand-orange to-orange-400"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-red-100 text-red-600 rounded-full">
                <Gift className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark">Exclusive Offers</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className={`rounded-2xl p-6 text-white bg-gradient-to-br ${offer.color} shadow-lg relative overflow-hidden transform hover:-translate-y-1 transition-transform`}>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-white/80 text-sm font-semibold uppercase tracking-wider">
                  <Tag className="w-4 h-4" /> Limited Time
                </div>
                <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">{offer.description}</p>
                
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 flex justify-between items-center border border-white/20">
                  <span className="font-mono text-sm font-bold tracking-wider">{offer.code}</span>
                  <button className="text-xs bg-white text-brand-dark px-3 py-1.5 rounded font-bold hover:bg-slate-100">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;