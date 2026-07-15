import React from "react";
import { Star, Quote, Train, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  favoriteDish: string;
  avatarColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    role: "Daily Train Commuter (Mumbai Local)",
    comment: "I catch the 7:15 AM local train daily. pre-ordering Bhosle's Poha and Chai has saved me so much time. I just grab my double-layered hot foil packet and get on Platform 1 in seconds. Tastes like home-cooked breakfast!",
    rating: 5,
    favoriteDish: "Poha + Chai combo",
    avatarColor: "bg-amber-100 text-amber-800"
  },
  {
    id: 2,
    name: "Sneha Patil",
    role: "Badlapur Resident / School Teacher",
    comment: "Their Ghavane is so incredibly soft and lace-like! It's very hard to find authentic Konkan-style Ghavane of this quality outside of home. Highly hygienic and incredibly soft even if you eat it after an hour.",
    rating: 5,
    favoriteDish: "Ghavane with Chutney",
    avatarColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 3,
    name: "Vikram Shinde",
    role: "Bank Employee / Regular Commuter",
    comment: "On fasting days, their Sabudana Khichdi is a absolute savior. Rich with roasted peanuts, cooked in pure ghee, and perfectly non-sticky. Truly value for money at just ₹20!",
    rating: 5,
    favoriteDish: "Sabudana Khichdi",
    avatarColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: 4,
    name: "Anand Kulkarni",
    role: "Senior Citizen",
    comment: "The Upma has the perfect traditional blend of mustard, green peas, and cashews. Komal Bhosle takes very good care of hygiene and keeps the food freshly steaming hot throughout the morning hours.",
    rating: 5,
    favoriteDish: "Upma & Hot Ginger Tea",
    avatarColor: "bg-stone-100 text-stone-800"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-stone-50 border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100 inline-flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Loved by Locals
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 tracking-tight">
            What Our Commuters Say
          </h2>
          <p className="text-stone-500 mt-2 text-sm sm:text-base">
            Read authentic experiences from daily train travelers and residents who make Bhosle Breakfast Corner their first morning stop!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-100 shadow-sm flex flex-col justify-between space-y-6 relative group hover:shadow-md transition-all duration-300"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-stone-100 group-hover:text-amber-50/70 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 rotate-180 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{t.comment}"
                </p>
              </div>

              {/* Commuter Bio */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-50">
                <div className="flex items-center gap-3">
                  {/* Avatar Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.avatarColor}`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-stone-400 text-[11px] font-semibold flex items-center gap-1">
                      <Train className="w-3 h-3 text-stone-400" />
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Favorite Tag */}
                <div className="text-right">
                  <span className="text-[9px] uppercase font-black text-stone-400 tracking-wider block">
                    Favorite
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
                    {t.favoriteDish}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Highlight Stats Badge */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-stone-500 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200/50 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span><strong>4.9+ Star</strong> Rating</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200/50 shadow-2xs">
            <Train className="w-4 h-4 text-emerald-500" />
            <span><strong>1,000+</strong> Happy Commuters Daily</span>
          </div>
        </div>

      </div>
    </section>
  );
}
