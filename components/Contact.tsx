import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-5/12 bg-gradient-to-br from-brand-teal to-teal-800 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-teal-100 mb-8">Have a question or ready to book? We'd love to hear from you.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200 uppercase tracking-wider">Call Us</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200 uppercase tracking-wider">Email Us</p>
                    <p className="font-semibold">hello@bhraman.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-teal-200 uppercase tracking-wider">Visit Us</p>
                    <p className="font-semibold">Cyber City, Gurugram, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
               <div className="flex gap-4">
                 {/* Social placeholders */}
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-10 bg-white">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send a Message</h3>
            <form 
              action="https://formspree.io/f/xyzrpdle" 
              method="POST" 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-teal outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-teal outline-none transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-teal outline-none transition-all" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <select 
                    name="subject" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Package Booking">Package Booking</option>
                    <option value="Custom Itinerary">Custom Itinerary</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-teal outline-none transition-all" 
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg transition-all flex justify-center items-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;