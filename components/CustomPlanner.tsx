import React, { useState } from 'react';
import { Calendar, Users, Map, Loader2, Wand2, CheckCircle, BedDouble, Coffee, Phone } from 'lucide-react';
import { BookingDetails, GeneratedItinerary } from '../types';
import { generateCustomItinerary } from '../services/gemini';

const CustomPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedItinerary | null>(null);
  const [formData, setFormData] = useState<BookingDetails>({
    destination: '',
    startDate: '',
    days: 5,
    travelers: 2,
    tripType: 'Leisure',
    phoneNumber: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'days' || name === 'travelers' ? parseInt(value) || 0 : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.destination || !formData.startDate) {
      setError("Please fill in all required fields.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const itinerary = await generateCustomItinerary(formData);
      setResult(itinerary);
    } catch (err) {
      setError("We couldn't generate your plan right now. Please check your connection or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="planner" className="py-20 relative overflow-hidden bg-brand-dark text-white">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-orange rounded-xl">
                    <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">AI Trip Planner</h2>
                    <p className="text-white/60 text-sm">Design your perfect itinerary instantly.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Destination</label>
                  <div className="relative">
                    <Map className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="e.g. Paris, Bali, Tokyo"
                      className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-1">Start Date</label>
                        <div className="relative">
                            <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-teal outline-none transition-all [color-scheme:dark]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-1">Duration (Days)</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                            <input
                            type="number"
                            name="days"
                            min="1"
                            max="30"
                            value={formData.days}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-white/80 mb-1">Travelers</label>
                        <div className="relative">
                            <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                            <input
                            type="number"
                            name="travelers"
                            min="1"
                            max="20"
                            value={formData.travelers}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                            />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-white/80 mb-1">Trip Type</label>
                        <select
                            name="tripType"
                            value={formData.tripType}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-teal outline-none transition-all appearance-none"
                        >
                            <option value="Leisure" className="bg-slate-800">Leisure</option>
                            <option value="Adventure" className="bg-slate-800">Adventure</option>
                            <option value="Honeymoon" className="bg-slate-800">Honeymoon</option>
                            <option value="Family" className="bg-slate-800">Family</option>
                            <option value="Budget" className="bg-slate-800">Budget</option>
                        </select>
                    </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-teal to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Generating Plan...
                    </>
                  ) : (
                    "Create My Itinerary"
                  )}
                </button>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              </form>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
             {!result && !loading && (
                 <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-3xl min-h-[400px]">
                     <div className="bg-white/5 p-6 rounded-full mb-6">
                        <Map className="w-16 h-16 text-white/20" />
                     </div>
                     <h3 className="text-2xl font-semibold text-white mb-2">Ready to plan?</h3>
                     <p className="text-white/50 max-w-md">Enter your trip details on the left, and our AI will craft a custom day-by-day itinerary, suggest hotels, and list inclusions just for you.</p>
                 </div>
             )}

             {loading && (
                 <div className="h-full flex flex-col items-center justify-center min-h-[400px]">
                     <div className="w-24 h-24 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-8"></div>
                     <h3 className="text-2xl font-bold animate-pulse">Curating your {formData.destination || 'dream'} experience...</h3>
                     <p className="text-white/60 mt-4">Finding the best spots and hotels.</p>
                 </div>
             )}

             {result && (
                 <div className="bg-white rounded-3xl p-8 text-slate-800 h-full overflow-y-auto shadow-2xl max-h-[800px] hide-scrollbar">
                    <div className="border-b border-slate-100 pb-6 mb-6">
                        <h2 className="text-3xl font-bold text-brand-dark mb-2">{result.title}</h2>
                        <p className="text-slate-600 leading-relaxed">{result.overview}</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-brand-orange uppercase tracking-wide mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" /> Day by Day Plan
                        </h3>
                        <div className="space-y-6">
                            {result.dailyPlan.map((day) => (
                                <div key={day.day} className="relative pl-8 border-l-2 border-slate-200">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-teal ring-4 ring-white"></div>
                                    <h4 className="font-bold text-lg text-brand-dark mb-2">Day {day.day}: {day.title}</h4>
                                    <ul className="space-y-2">
                                        {day.activities.map((activity, idx) => (
                                            <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></span>
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-brand-orange uppercase tracking-wide mb-4 flex items-center gap-2">
                                <BedDouble className="w-5 h-5" /> Recommended Stays
                            </h3>
                            <div className="space-y-4">
                                {result.hotelSuggestions.map((hotel, idx) => (
                                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-brand-dark">{hotel.name}</h4>
                                            <span className="text-xs font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500">{hotel.type}</span>
                                        </div>
                                        <p className="text-sm text-slate-500">{hotel.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-brand-orange uppercase tracking-wide mb-4 flex items-center gap-2">
                                <Coffee className="w-5 h-5" /> Package Inclusions
                            </h3>
                            <ul className="space-y-3">
                                {result.inclusions.map((inc, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm bg-green-50 p-3 rounded-lg border border-green-100">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 bg-brand-teal/10 rounded-xl p-4 text-center">
                                <p className="text-brand-teal font-semibold text-sm mb-3">Like this itinerary?</p>
                                <form action="https://formspree.io/f/xyzrpdle" method="POST">
                                    <input type="hidden" name="form_type" value="custom_planner_booking" />
                                    <input type="hidden" name="destination" value={formData.destination} />
                                    <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />
                                    <input type="hidden" name="startDate" value={formData.startDate} />
                                    <input type="hidden" name="days" value={formData.days} />
                                    <input type="hidden" name="travelers" value={formData.travelers} />
                                    <input type="hidden" name="tripType" value={formData.tripType} />
                                    <input type="hidden" name="itinerary_title" value={result.title} />
                                    <button type="submit" className="w-full bg-brand-teal hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors">
                                        Book This Custom Trip
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlanner;