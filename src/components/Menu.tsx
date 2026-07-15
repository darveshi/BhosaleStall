import React, { useState } from "react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";
import { Plus, Minus, Flame, Sparkles, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MenuProps {
  cart: Record<string, number>;
  updateQuantity: (id: string, qty: number) => void;
}

export default function Menu({ cart, updateQuantity }: MenuProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const getQuantity = (id: string) => cart[id] || 0;

  return (
    <section id="menu" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
            Fresh & Steaming
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Our Morning Specialties
          </h2>
          <p className="text-stone-500 mt-2 text-sm sm:text-base">
            Every dish is prepared early in the morning using freshly sourced local ingredients. Clean, hygienic, and authentic flavors.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item) => {
            const quantity = getQuantity(item.id);
            const isSelected = selectedItem === item.id;

            return (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                className={`group rounded-3xl border transition-all duration-300 bg-white flex flex-col justify-between overflow-hidden ${
                  quantity > 0
                    ? "border-amber-400 shadow-md ring-1 ring-amber-400/20"
                    : "border-stone-100 shadow-sm hover:shadow-md hover:border-stone-200"
                }`}
              >
                {/* Product Image Banner */}
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100 border-b border-stone-100/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {item.isPopular && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-amber-500 text-stone-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md border border-amber-400">
                        <Flame className="w-3 h-3 fill-stone-950" />
                        <span>POPULAR CHOICE</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-4 flex-grow">
                  {/* Card Header (Tags & Price) */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-stone-50 text-stone-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-stone-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-stone-900">
                        ₹{item.price}
                      </span>
                      <span className="text-[10px] text-stone-400 font-medium font-mono">per plate</span>
                    </div>
                  </div>

                  {/* Card Name & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Quick Ingredient list toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedItem(isSelected ? null : item.id)}
                      className="text-amber-700 hover:text-amber-800 text-[11px] font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      {isSelected ? "Hide ingredients" : "View ingredients & prep"}
                    </button>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden mt-3 pt-3 border-t border-dashed border-stone-100"
                        >
                          <div className="space-y-2">
                            <div>
                              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                                Ingredients
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {item.ingredients.map((ing, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[10px] bg-amber-50/70 text-amber-900 px-2 py-0.5 rounded-md border border-amber-100/30 font-medium"
                                  >
                                    {ing}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] text-stone-500 bg-stone-50 p-2 rounded-xl border border-stone-100">
                              <span className="font-semibold">Prep style:</span>
                              <span className="font-mono text-stone-700 font-medium">{item.prepTime}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Footer (Add to Pre-Order Button) */}
                <div className="p-4 bg-stone-50/70 border-t border-stone-100 rounded-b-3xl flex items-center justify-between">
                  {quantity === 0 ? (
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-full py-2.5 bg-white hover:bg-amber-600 hover:text-white text-amber-800 text-xs font-bold rounded-2xl border border-amber-200 hover:border-amber-600 shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Pre-Order
                    </button>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1.5 bg-amber-100 text-amber-950 px-2.5 py-1 rounded-xl border border-amber-200">
                        <Check className="w-3.5 h-3.5 text-amber-700" />
                        <span className="text-xs font-bold">{quantity} added</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="p-1.5 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 text-stone-700 cursor-pointer shadow-2xs"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-stone-800 font-mono">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="p-1.5 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 text-stone-700 cursor-pointer shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
