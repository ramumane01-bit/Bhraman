import React from 'react';
import { Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="bg-brand-teal p-1.5 rounded-lg">
                <Plane className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tighter">Bhraman</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your trusted partner for international travel. Creating memories one trip at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="hover:text-brand-orange transition-colors">Destinations</a></li>
              <li><a href="#packages" className="hover:text-brand-orange transition-colors">Packages</a></li>
              <li><a href="#offers" className="hover:text-brand-orange transition-colors">Offers</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Newsletter</h4>
             <p className="text-xs text-slate-400 mb-3">Subscribe for travel deals and updates.</p>
             <div className="flex gap-2">
                 <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-brand-teal outline-none" />
                 <button className="bg-brand-orange hover:bg-orange-600 text-white px-3 py-2 rounded text-sm font-bold transition-colors">Go</button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Bhraman Travel Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;