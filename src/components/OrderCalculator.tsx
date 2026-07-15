import React, { useState } from "react";
import { MENU_ITEMS, CONTACT_INFO } from "../data";
import { 
  ShoppingBag, Trash2, Clipboard, Check, Calendar, Clock, 
  MessageSquare, User, Phone, Sparkles, Plus, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface OrderCalculatorProps {
  cart: Record<string, number>;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
}

export default function OrderCalculator({ cart, updateQuantity, clearCart }: OrderCalculatorProps) {
  const [customerName, setCustomerName] = useState("");
  const [pickupTime, setPickupTime] = useState("08:00 AM");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [copied, setCopied] = useState(false);

  const getCartItems = () => {
    return MENU_ITEMS.map(item => ({
      ...item,
      quantity: cart[item.id] || 0
    })).filter(item => item.quantity > 0);
  };

  const cartItems = getCartItems();
  
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  // Quick preset handlers
  const applyPreset = (preset: Record<string, number>) => {
    clearCart();
    Object.entries(preset).forEach(([id, qty]) => {
      updateQuantity(id, qty);
    });
  };

  const presets = [
    {
      name: "Commuter Combo",
      description: "Poha + Hot Chai",
      price: 30,
      items: { poha: 1, chai: 1 }
    },
    {
      name: "Konkan Special",
      description: "2 Ghavane + Chai",
      price: 50,
      items: { ghavane: 2, chai: 1 }
    },
    {
      name: "Sago & Tea Fast",
      description: "Sabudana + Chai",
      price: 30,
      items: { "sabudana-khichdi": 1, chai: 1 }
    }
  ];

  // Helper to construct WhatsApp message text
  const generateOrderText = () => {
    let text = `*New Breakfast Order - Bhosle Breakfast Corner*\n`;
    text += `-----------------------------------------\n`;
    text += `*Customer:* ${customerName || "Commuter"}\n`;
    text += `*Pickup Time:* ${pickupTime}\n`;
    if (specialInstructions) {
      text += `*Instructions:* "${specialInstructions}"\n`;
    }
    text += `-----------------------------------------\n`;
    text += `*Items Ordered:*\n`;
    
    cartItems.forEach(item => {
      text += `• ${item.name} x ${item.quantity} (₹${item.price * item.quantity})\n`;
    });
    
    text += `-----------------------------------------\n`;
    text += `*Grand Total:* ₹${grandTotal}\n\n`;
    text += `_Please prepare this for my arrival near Platform No. 1._`;
    return text;
  };

  const handleCopy = () => {
    const text = generateOrderText();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const getWhatsAppLink = (phoneNumber: string) => {
    const text = encodeURIComponent(generateOrderText());
    return `https://api.whatsapp.com/send?phone=91${phoneNumber}&text=${text}`;
  };

  return (
    <section id="calculator" className="py-16 bg-stone-50 border-y border-stone-200/60 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-orange-700 font-bold text-xs uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            Pre-Order & Save Time
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 tracking-tight">
            Morning Order Builder
          </h2>
          <p className="text-stone-500 mt-2 text-sm sm:text-base">
            Commuting via Badlapur Station? Build your breakfast plates below, check the pricing, and send your order to Komal Bhosle to keep it ready!
          </p>
        </div>

        {/* Builder Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Combos & Order details */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Quick Combos Presets */}
            <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-bold text-stone-800">Commuter Combos (Quick Load)</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => applyPreset(preset.items)}
                    className="p-3 bg-stone-50/50 hover:bg-amber-50 hover:border-amber-300 border border-stone-100 rounded-2xl text-left transition-all duration-200 group cursor-pointer flex flex-col justify-between h-full"
                  >
                    <div>
                      <span className="block text-xs font-bold text-stone-800 group-hover:text-amber-800">
                        {preset.name}
                      </span>
                      <span className="block text-[10px] text-stone-400 mt-0.5 leading-snug">
                        {preset.description}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100/50 w-full">
                      <span className="text-xs font-black text-amber-700">₹{preset.price}</span>
                      <span className="text-[9px] font-bold bg-amber-100/50 text-amber-800 px-1.5 py-0.5 rounded-md">
                        Load
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Pickup details */}
            <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-xs space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-bold text-stone-800">Pickup Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter name (e.g. Rahul)"
                    className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                  />
                </div>

                {/* Pickup Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all cursor-pointer"
                  >
                    <option value="06:30 AM">06:30 AM (Early commute)</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="07:30 AM">07:30 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="08:30 AM">08:30 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM (Late breakfast)</option>
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-400" />
                  Custom Notes (e.g. "Spicy", "Less Sugar")
                </label>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Any preferences (e.g., 'Please make Poha spicy', 'Keep Chai extra hot')"
                  rows={2}
                  className="w-full px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                />
              </div>

              {/* Custom orders callout info */}
              <div className="p-3.5 bg-amber-50/50 rounded-2xl border border-amber-100 flex gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-800 leading-normal">
                  <strong>Notice:</strong> We accept morning party orders, office group packs, and special family caterings. Place larger orders at least 1 day in advance via call.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-order Cart Summary */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-3xl border-2 border-stone-200/80 shadow-md overflow-hidden sticky top-6">
              
              {/* Header */}
              <div className="px-5 py-4 bg-stone-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm tracking-tight">Pre-Order Basket</span>
                </div>
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-stone-400 hover:text-rose-400 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10 space-y-3"
                    >
                      <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-stone-800 text-sm">Basket is empty</p>
                        <p className="text-stone-400 text-[11px] max-w-[200px] mx-auto leading-relaxed">
                          Add hot breakfast plates directly from the menu above, or choose a Commuter Combo!
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="divide-y divide-stone-100 max-h-[220px] overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="py-3 flex justify-between items-center first:pt-0"
                        >
                          <div>
                            <span className="font-bold text-stone-800 text-xs sm:text-sm block">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono">
                              ₹{item.price} each
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-stone-500">
                              Qty: {item.quantity}
                            </span>
                            <span className="font-bold text-stone-900 text-xs font-mono min-w-[45px] text-right">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                {/* Subtotal and Total */}
                {cartItems.length > 0 && (
                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <div className="flex justify-between items-center text-xs text-stone-500">
                      <span>Total Plates</span>
                      <span className="font-bold text-stone-700 font-mono">
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-dashed border-stone-200">
                      <span className="font-bold text-stone-900 text-sm">Estimated Total</span>
                      <span className="font-black text-amber-700 text-lg sm:text-xl font-mono">
                        ₹{grandTotal}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {cartItems.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    {/* Send to Komal (WhatsApp Button 1) */}
                    <a
                      href={getWhatsAppLink(CONTACT_INFO.phones[0])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-100" />
                      Send Order to Komal Bhosle (WA)
                    </a>

                    {/* Copy Order Details Button */}
                    <button
                      onClick={handleCopy}
                      className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-xs border border-stone-200"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600 animate-bounce" />
                          <span className="text-emerald-700">Order Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="w-4 h-4 text-stone-500" />
                          <span>Copy Order Text Details</span>
                        </>
                      )}
                    </button>

                    <div className="text-center pt-2">
                      <p className="text-[10px] text-stone-400 font-medium">
                        Payment accepted at stall via UPI QR or Cash on pickup.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      disabled
                      className="w-full py-3 bg-stone-100 text-stone-400 font-bold rounded-2xl text-xs cursor-not-allowed border border-stone-200 text-center"
                    >
                      Select breakfast plates to order
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
