import React, { useState } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderCalculator from "./components/OrderCalculator";
import LocationContact from "./components/LocationContact";
import Testimonials from "./components/Testimonials";
import { Coffee, ShoppingBag, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[id];
      } else {
        next[id] = qty;
      }
      return next;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const totalItemsCount = (Object.values(cart) as number[]).reduce((sum, qty) => sum + qty, 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-amber-500/20 selection:text-amber-900 font-sans">
      
      {/* Visual Ambient Blur */}
      <div className="absolute top-0 right-0 w-full max-w-7xl h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] left-[-15%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Simple Top Sticky Header for Brand Polish */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-stone-100 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500 bg-stone-950 flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src="/src/assets/images/vk_gold_logo_dark_1784091400459.jpg"
                  alt="Bhosle VK Gold Logo"
                  className="w-full h-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold text-stone-900 tracking-tight text-sm sm:text-base">
                Bhosle Breakfast Corner
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection("menu")}
                className="text-stone-500 hover:text-amber-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Our Menu
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-stone-500 hover:text-amber-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer hidden md:inline-block"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-stone-500 hover:text-amber-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Location & Call
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
                <span>Pre-Order ({totalItemsCount})</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Core Layout Sections */}
        <main className="flex-grow">
          <Hero />
          <Menu cart={cart} updateQuantity={updateQuantity} />
          <OrderCalculator cart={cart} updateQuantity={updateQuantity} clearCart={clearCart} />
          <LocationContact />
          <Testimonials />
        </main>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800/80">
          <div className="max-w-6xl mx-auto px-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 border-b border-stone-800/50">
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 bg-stone-950 flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="/src/assets/images/vk_gold_logo_dark_1784091400459.jpg"
                    alt="Bhosle VK Gold Logo"
                    className="w-full h-full object-cover scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-extrabold text-lg tracking-tight">
                    Bhosle Breakfast Corner
                  </h4>
                  <p className="text-xs text-stone-400 max-w-sm">
                    Delicious, freshly made traditional breakfast served right near Badlapur Railway Station. Dedicated to hygiene, speed, and flavor.
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-right text-xs space-y-1">
                <p className="text-stone-300 font-bold">Proprietor: Komal Bhosle</p>
                <p className="text-stone-500 font-mono">Stall at Vaishali Talkies, Near Badlapur Station Platform 1</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs text-stone-500">
              <p>© {new Date().getFullYear()} Bhosle Breakfast Corner. All morning rights reserved.</p>
              <p className="font-medium text-amber-500/80">Fresh Poha, Upma, Ghavane, Sabudana Khichdi, & Chai</p>
            </div>
          </div>
        </footer>

        {/* Floating Cart & Scroll to Top indicator */}
        <AnimatePresence>
          {totalItemsCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 right-6 z-40"
            >
              <button
                onClick={() => scrollToSection("calculator")}
                className="px-5 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2.5 cursor-pointer ring-4 ring-white"
              >
                <ShoppingBag className="w-4 h-4 text-amber-200" />
                <span>Ready to Pre-Order ({totalItemsCount} items)</span>
                <span className="text-white/60">→</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
