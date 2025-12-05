import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Patel',
    location: 'Mumbai',
    comment: 'Bhraman planned our Switzerland trip perfectly. The hotels were central and the itinerary was paced just right. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: '2',
    name: 'Sneha Gupta',
    location: 'Delhi',
    comment: 'The Bali honeymoon package was a dream come true. Everything was taken care of, from transfers to candlelight dinners. Thank you Bhraman!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: '3',
    name: 'Rohan Mehta',
    location: 'Bangalore',
    comment: 'Great service and very responsive team. They customized our Vietnam trip exactly how we wanted it. Good value for money.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-orange tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Stories from Happy Travelers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="absolute top-6 right-6 text-slate-100">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-teal ring-offset-2" />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < t.rating ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-sm">"{t.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;