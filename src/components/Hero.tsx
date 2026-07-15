import React from "react";
import { MapPin, Phone, User, Clock, Utensils } from "lucide-react";
import { CONTACT_INFO } from "../data";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative overflow-hidden bg-amber-50/50 border-b border-amber-100">
      {/* Decorative Warm Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Text Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wider uppercase shadow-xs border border-amber-200"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Platform No. 1, Badlapur Station</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-tight">
                Bhosle <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                  Breakfast Corner
                </span>
              </h1>
              <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Fuel your busy morning with authentic, steaming hot, and delicious Maharashtrian breakfast. Freshly handmade everyday with love and quality ingredients.
              </p>
            </motion.div>

            {/* Quick Details Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0"
            >
              <div className="bg-white p-3.5 rounded-2xl border border-stone-100 shadow-xs flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Proprietor</span>
                  <span className="font-semibold text-stone-800 text-xs sm:text-sm">{CONTACT_INFO.proprietor}</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-100 shadow-xs flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Fresh Start</span>
                  <span className="font-semibold text-stone-800 text-xs sm:text-sm">Early Morning</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-100 shadow-xs flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 bg-orange-50 rounded-xl text-orange-700">
                  <Utensils className="w-4 h-4 text-orange-600" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-semibold">Price starts at</span>
                  <span className="font-semibold text-stone-800 text-xs sm:text-sm">Just ₹10</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("menu")}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Hot Menu</span>
                <span className="text-white/80 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 font-medium rounded-2xl border border-stone-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Pre-Order Breakfast</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Visual Banner (Generated Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container with Custom Framing */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100">
              <img
                src="/src/assets/images/breakfast_hero_1784088753516.jpg"
                alt="Steaming Poha and cutting Chai at Bhosle Breakfast Corner"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Live badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center justify-between border border-amber-100 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-stone-800">Fresh Batches Ready!</span>
                </div>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                  Morning Breakfast
                </span>
              </div>
            </div>

            {/* Decorative background visual blob */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </header>
  );
}
