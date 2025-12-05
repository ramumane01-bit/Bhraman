import React from 'react';
import { Globe, ShieldCheck, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/800/800?random=10" 
              alt="About Bhraman" 
              className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-xs">
                <p className="font-serif text-4xl text-brand-teal font-bold mb-1">10k+</p>
                <p className="text-slate-600 text-sm font-medium">Happy travelers sent to over 50 destinations worldwide.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-base font-semibold text-brand-teal tracking-wide uppercase mb-2">About Us</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">Making the World <br/>Your Comfort Zone</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At <span className="font-bold text-brand-orange">Bhraman</span>, we believe travel is more than just moving from place to place. It's about the stories you collect and the memories you create. Started in 2024, we aim to modernize the Indian travel experience by combining human expertise with cutting-edge AI technology.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Globe, title: "Global Reach", desc: "Expertise in 50+ countries with local partners." },
                { icon: ShieldCheck, title: "100% Secure", desc: "Transparent pricing and secure booking processes." },
                { icon: HeartHandshake, title: "Personalized Care", desc: "24/7 support during your entire journey." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-teal">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;