'use client';

import React from 'react';
import { Heart, Star, ArrowRight } from 'lucide-react';

// Product type definition
interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  discountBadge?: string;
  image: string;
}

// Sample Data using your local image folder paths
const SPECIAL_ITEMS: Product[] = [
  {
    id: 's1',
    category: 'Kids Furniture',
    title: 'Harbors: Where Young Musicians Find Melody!',
    price: '$33.00',
    originalPrice: '$54.00',
    rating: 5,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Furniture.png',
  },
  {
    id: 's2',
    category: 'Playshouse',
    title: 'Wondear Dolls: Where Imagination Plays',
    price: '$33.00 – $72.00',
    rating: 5,
    reviewCount: 5,
    image: '/assets/split_vantage_images/kids_playsHouse.png',
  },
  {
    id: 's3',
    category: 'Trampoline',
    title: 'Galore: Rev Up The Playtimes Joy',
    price: '$30.00',
    rating: 5,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
  {
    id: 's4',
    category: 'Kids Furniture',
    title: 'Echwizs Marvels: Electronic Playtime Fun',
    price: '$56.00',
    rating: 5,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Furniture.png',
  },
];

const HOT_DEALS: Product[] = [
  {
    id: 'h1',
    category: 'Trampoline',
    title: 'Becca: Rev Up the Playtime Excitement!',
    price: '$54.00',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
  {
    id: 'h2',
    category: 'Playshouse',
    title: 'Culinary Creations: Where Mini Chefs Cook...',
    price: '$42.00',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/kids_playsHouse.png',
  },
  {
    id: 'h3',
    category: 'Kids Furniture',
    title: 'EchWiz Marvels: Electronic Playtime...',
    price: '$56.00',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Furniture.png',
  },
  {
    id: 'h4',
    category: 'Trampoline',
    title: 'Harbors: Where Young Musicians Find Melody!',
    price: '$33.00',
    originalPrice: '$54.00',
    discountBadge: '-39%',
    rating: 4.0,
    reviewCount: 4,
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
  {
    id: 'h5',
    category: 'Playshouse',
    title: 'Enchanted Dolls: A World of Glamour and...',
    price: '$58.00',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/kids_playsHouse.png',
  },
  {
    id: 'h6',
    category: 'Kids Furniture',
    title: 'Galore: Rev Up the Playtime Excitement!',
    price: '$47.00',
    originalPrice: '$51.00',
    discountBadge: '-8%',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Furniture.png',
  },
  {
    id: 'h7',
    category: 'Trampoline',
    title: 'Wondear Dolls: Where Imagination Comes to...',
    price: '$33.00 – $72.00',
    discountBadge: '-25%',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/Kids_Trampoline.png',
  },
  {
    id: 'h8',
    category: 'Playshouse',
    title: 'Enchanted Dolls: A World of Glamour and...',
    price: '$58.00',
    rating: 5.0,
    reviewCount: 5,
    image: '/assets/split_vantage_images/kids_playsHouse.png',
  },
];

export const DealsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8 font-quicksand text-slate-800">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ═══ LEFT COLUMN: SPECIAL ITEMS ═══ */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 pr-0 lg:pr-4">
          <h2 className="text-2xl font-black text-[#1E293B] tracking-tight">
            Special Items
          </h2>

          <div className="flex flex-col gap-4">
            {SPECIAL_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                {/* Large Thumbnail Box */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 overflow-hidden shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 overflow-hidden">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#00C4B5] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-base font-black text-[#00C4B5]">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs font-bold text-slate-400 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT COLUMN: HOT DEAL GRID ═══ */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <h2 className="text-2xl font-black text-[#1E293B] tracking-tight">
                Hot Deal
              </h2>
            </div>

            <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 hover:text-slate-900 transition-all">
              <span>Explore all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {HOT_DEALS.map((deal) => (
              <div 
                key={deal.id}
                className="bg-white rounded-2xl border border-slate-100 p-4 flex flex-col justify-between relative hover:shadow-xl hover:border-slate-200 transition-all duration-300 group cursor-pointer"
              >
                {/* Discount Badge */}
                {deal.discountBadge && (
                  <span className="absolute top-4 left-4 bg-[#FF4D4F] text-white text-[10px] font-black px-2 py-0.5 rounded-md z-10">
                    {deal.discountBadge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white shadow-sm transition-all z-10">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Product Image Area */}
                <div className="w-full h-44 bg-slate-100 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Meta */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {deal.category}
                  </span>

                  <h3 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-cyan-600 transition-colors h-10">
                    {deal.title}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < Math.floor(deal.rating) ? 'fill-current' : 'text-slate-200'}`} 
                      />
                    ))}
                    <span className="text-slate-400 text-[11px] font-semibold ml-1">
                      ({deal.rating.toFixed(2)})
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-extrabold text-[#00C4B5]">
                      {deal.price}
                    </span>
                    {deal.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {deal.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DealsSection;