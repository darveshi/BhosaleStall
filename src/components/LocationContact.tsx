import React from "react";
import { CONTACT_INFO } from "../data";
import { MapPin, Phone, HelpCircle, ArrowRight, Train, Navigation, Users } from "lucide-react";
import { motion } from "motion/react";

export default function LocationContact() {
  return (
    <section id="location" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            How to Reach Us
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Find Our Shop Stall
          </h2>
          <p className="text-stone-500 mt-2 text-sm sm:text-base">
            Conveniently situated for daily train commuters and local residents. Stop by for a quick, hot morning bite!
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Directions Card */}
          <div className="lg:col-span-7 bg-amber-50/40 border border-amber-100 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Main Address Block */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-amber-600 text-white rounded-2xl shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-800">Shop Location</span>
                  <h3 className="text-xl font-bold text-stone-900">
                    {CONTACT_INFO.location.stallName}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed max-w-md">
                    Near {CONTACT_INFO.location.landmark}, {CONTACT_INFO.location.stationDetail}, {CONTACT_INFO.location.platform}, {CONTACT_INFO.location.city}
                  </p>
                </div>
              </div>

              {/* Transit/Commuter Guide */}
              <div className="border-t border-amber-200/50 pt-5 space-y-4">
                <h4 className="text-xs font-extrabold text-stone-400 uppercase tracking-widest">
                  Commuter Commute Guide
                </h4>
                
                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-amber-200/50 text-amber-900 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      De-board the local train at <strong>Badlapur Railway Station</strong>.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-amber-200/50 text-amber-900 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Head towards the exit of <strong>Platform No. 1</strong>.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-amber-200/50 text-amber-900 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Walk a few steps near <strong>Vaishali Talkies</strong>—you will find our corner stall ready with hot, steaming food!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt for commuters */}
            <div className="p-4 bg-white/80 rounded-2xl border border-amber-200/30 flex items-center gap-3">
              <Train className="w-5 h-5 text-amber-700" />
              <p className="text-xs text-stone-600">
                <strong>Catching the morning local?</strong> Let us know your order in advance and we will pack it in double-layered hot foil, so you can grab-and-go in 30 seconds!
              </p>
            </div>

          </div>

          {/* Contact Numbers & Proprietor Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <div>
                <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider">Proprietor Care</span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">Komal Bhosle</h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Call us directly to place morning catering orders, corporate breakfast breakfast packs, or check item availability for fast pickups.
                </p>
              </div>

              {/* Direct Phone Buttons */}
              <div className="space-y-3 pt-2">
                {CONTACT_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-stone-800 hover:bg-stone-700/80 border border-stone-800 hover:border-stone-700 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-amber-500 text-stone-950 rounded-xl font-bold">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[10px] text-stone-400 uppercase font-semibold">Phone line {idx + 1}</span>
                        <span className="text-sm sm:text-base font-bold font-mono tracking-wider text-white">
                          +91 {phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="border-t border-stone-800 pt-5 mt-6 flex items-center gap-3.5">
              <div className="p-2 bg-stone-800 text-amber-400 rounded-xl">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-[11px] text-stone-400 leading-normal">
                Loved by daily train travelers and Badlapur commuters. We guarantee pure ingredients, robust hygiene, and rich authentic taste.
              </p>
            </div>

          </div>

        </div>

        {/* Interactive Google Map Embed */}
        <div className="mt-8 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm h-[380px] sm:h-[450px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.643643682095!2d73.239702!3d19.16707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzAxLjUiTiA3M8KwMTQnMjIuOSJF!5e0!3m2!1sen!2sin!4v1784089981676!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Bhosle Breakfast Corner Location Map"
            className="w-full h-full"
          />
        </div>

        {/* Digital Menu Flyer Card */}
        <div className="mt-12 bg-amber-50/20 rounded-3xl border border-stone-200/50 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left text column */}
            <div className="p-6 sm:p-10 md:col-span-7 space-y-4 text-left">
              <span className="inline-block text-[10px] uppercase font-extrabold tracking-wider text-amber-800 bg-amber-100/60 px-2.5 py-1 rounded-md border border-amber-200/30">
                Official Flyer
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Our Traditional Marathi Menu Card
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-lg">
                View our official Bhosle Breakfast Corner digital poster. Share it with fellow commuters on WhatsApp, or keep it saved to quickly reference items and pricing during your morning train run!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-2xl border border-stone-100/80 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-stone-800">Authentic Marathi Flavor</span>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-stone-100/80 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-stone-800">Double foil packaging</span>
                </div>
              </div>
            </div>

            {/* Right image column */}
            <div className="md:col-span-5 relative h-[320px] overflow-hidden group border-t md:border-t-0 md:border-l border-stone-100">
              <img
                src="/src/assets/images/menu_flyer_20_10_1784090648046.jpg"
                alt="Bhosle Breakfast Corner Menu Poster"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/20 to-transparent flex items-end justify-center p-6">
                <a
                  href="/src/assets/images/menu_flyer_20_10_1784090648046.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 text-stone-950 text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-1.5"
                >
                  <span>Open Full Size Poster</span>
                  <span className="text-stone-400">↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
