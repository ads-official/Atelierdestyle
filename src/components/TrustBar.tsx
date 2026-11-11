"use client";
import React from 'react';
import { RotateCcw, Truck, ShieldCheck, CreditCard } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#EED9CE]/40 border-y border-[#E3C8BA]/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#9B5B3E]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                7-Day Easy Returns
              </h4>
              <p className="text-xs text-[#6F6760] font-light mt-0.5">
                Hassle-free doorstep exchanges across India
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#9B5B3E]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                Express Pan-India
              </h4>
              <p className="text-xs text-[#6F6760] font-light mt-0.5">
                Air express delivery in 2-4 business days
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#9B5B3E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                240+ GSM Standard
              </h4>
              <p className="text-xs text-[#6F6760] font-light mt-0.5">
                Small-batch artisanal precision guarantee
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#9B5B3E]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]">
                COD & Instant UPI
              </h4>
              <p className="text-xs text-[#6F6760] font-light mt-0.5">
                Encrypted checkout via Razorpay & PayU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};