import React from 'react';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { TravelPackage } from '../types';

const PACKAGES: TravelPackage[] = [
  {
    id: '1',
    title: 'Majestic Maldives',
    destination: 'Maldives',
    duration: '4 Nights / 5 Days',
    price: 85000,
    rating: 4.8,
    image: 'https://picsum.photos/600/400?random=1',
    featured: true
  },
  {
    id: '2',
    title: 'Swiss Alps Escape',
    destination: 'Switzerland',
    duration: '6 Nights / 7 Days',
    price: 150000,
    rating: 4.9,
    image: 'https://picsum.photos/600/400?random=2',
    featured: true
  },
  {
    id: '3',
    title: 'Vietnam Vibes',
    destination: 'Vietnam',
    duration: '5 Nights / 6 Days',
    price: 45000,
    rating: 4.7,
    image: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: '4',
    title: 'Dubai Delights',
    destination: 'UAE',
    duration: '4 Nights / 5 Days',
    price: 65000,
    rating: 4.6,
    image: 'https://picsum.photos/600/400?random=4'
  }
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-orange tracking-wide uppercase">Popular Destinations</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Trending International Packages
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Handpicked experiences at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-slate-800 shadow-sm">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  {pkg.rating}
                </div>
                {pkg.featured && (
                  <div className="absolute top-3 left-3 bg-brand-orange text-white px-2 py-1 rounded text-xs font-bold shadow-sm">
                    Best Seller
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-3">
                  <Clock className="w-3 h-3" />
                  {pkg.duration}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-teal transition-colors">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  {pkg.destination}
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Starts from</span>
                    <div className="text-lg font-bold text-brand-dark">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <button className="p-2 rounded-full bg-slate-100 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-teal bg-teal-50 hover:bg-teal-100 transition-colors">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
