import React from 'react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'Money Return',
      subtitle: 'Back guarantee under 7 days.',
      bgColor: 'bg-[#FFF8F0]',
      borderColor: 'hover:border-[#F49C14]/40',
      icon: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-[-10deg] group-hover:scale-110">
          <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28" stroke="#F8C88A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4" stroke="#F8C88A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 6"/>
          <path d="M4 12L4 16L8 16" stroke="#F8C88A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 20L28 16L24 16" stroke="#F8C88A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 9C14.3431 9 13 10.3431 13 12V13C11.3431 13 10 14.3431 10 16V20C10 21.6569 11.3431 23 13 23H19C20.6569 23 22 21.6569 22 20V16C22 14.3431 20.6569 13 19 13V12C19 10.3431 17.6569 9 16 9Z" fill="#F49C14"/>
          <path d="M13 12H19" stroke="#F49C14" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 9L18 9" stroke="#F49C14" strokeWidth="3" strokeLinecap="round"/>
          <text x="16" y="19.5" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">$</text>
        </svg>
      )
    },
    {
      title: 'Member Discount',
      subtitle: 'On every order over $2000',
      bgColor: 'bg-[#F0F5FA]',
      borderColor: 'hover:border-[#3B82F6]/40',
      icon: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-120 group-hover:rotate-12">
          <path d="M16 3C16 3 8 10.5 8 18.5C8 23.1944 11.5817 27 16 27C20.4183 27 24 23.1944 24 18.5C24 10.5 16 3 16 3Z" fill="#F88C00"/>
          <text x="16" y="21.5" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">%</text>
        </svg>
      )
    },
    {
      title: 'Home Delivery',
      subtitle: 'Free delivery to your home',
      bgColor: 'bg-[#EBFBF7]',
      borderColor: 'hover:border-[#00B8A9]/40',
      icon: (
        <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110">
          <path d="M5 12C5 10.8954 5.89543 10 7 10H17V20H7C5.89543 20 5 19.1046 5 18V12Z" fill="#00B8A9"/>
          <path d="M17 12H21.5L24 15.5V20H17V12Z" fill="#0D1E3E"/>
          <path d="M2 13H5" stroke="#F49C14" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1 16H4" stroke="#F49C14" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 19H5" stroke="#F49C14" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="21" r="2.5" fill="#0D1E3E"/>
          <circle cx="20" cy="21" r="2.5" fill="#0D1E3E"/>
          <circle cx="10" cy="21" r="1" fill="white"/>
          <circle cx="20" cy="21" r="1" fill="white"/>
        </svg>
      )
    },
    {
      title: '24/7 Support',
      subtitle: 'Dedicated support in 24hrs',
      bgColor: 'bg-[#FFF0F3]',
      borderColor: 'hover:border-[#EC4899]/40',
      icon: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110">
          <path d="M16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28" stroke="#F88C00" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 6"/>
          <path d="M25 7L28 4L29 8" stroke="#F88C00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.2792 10.3802C11.5177 9.14173 12.8711 9.4796 13.9234 10.5319L14.733 11.3415C15.8239 12.4324 15.6983 13.8055 14.5126 14.9912L13.7828 15.721C14.7211 17.5186 16.2759 18.9959 18.1504 19.8524L18.8471 19.1557C20.0329 17.97 21.4059 17.8444 22.4969 18.9353L23.3065 19.7449C24.3588 20.7972 24.6966 22.1506 23.4582 23.3891C22.5034 24.3439 20.8933 24.8143 19.0601 24.3298C15.7483 23.4545 11.528 20.2157 9.69976 17.1517C8.68536 15.4516 8.56708 13.6844 9.13524 12.4172C9.44439 11.7278 9.84365 11.2332 10.2792 10.3802Z" fill="#00B8A9"/>
          <text x="12" y="15" fill="#0D1E3E" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">24H</text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-white px-6 lg:px-12 py-8 font-fredoka overflow-hidden">
      
      {/* ═══ SUBTLE FLOATING UMBRELLA ACCENT (NO WHITE BOX BACKGROUND) ═══ */}
      <div className="absolute top-6 lg:top-8 right-8 lg:right-16 z-20 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
        <div className="relative animate-bounce duration-1000">
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-6 hover:rotate-0 transition-transform duration-300 drop-shadow-md">
            {/* Umbrella Canopy Panels */}
            <path d="M32 8C16.536 8 4 20.536 4 36H18C18 32.686 24.284 30 32 30C39.716 30 46 32.686 46 36H60C60 20.536 47.464 8 32 8Z" fill="#FF6B6B" />
            {/* Panel 1 */}
            <path d="M18 36C18 20.536 24.284 8 32 8C24.284 8 18 20.536 18 36Z" fill="#4ECDC4" />
            {/* Panel 2 */}
            <path d="M46 36C46 20.536 39.716 8 32 8C39.716 8 46 20.536 46 36Z" fill="#FFE66D" />
            {/* Top Tip */}
            <path d="M32 4V8" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            {/* Umbrella Handle Stick */}
            <path d="M32 36V50C32 53.3137 29.3137 56 26 56C22.6863 56 20 53.3137 20 50" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Tiny Water Drops */}
            <circle cx="8" cy="46" r="1.8" fill="#38BDF8" />
            <circle cx="56" cy="44" r="2" fill="#38BDF8" />
          </svg>
        </div>
      </div>

      {/* Full-width Container matching navbar max-w */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative flex items-center gap-4 sm:gap-5 rounded-2xl px-6 py-6 border-2 border-transparent ${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${feature.bgColor}`}
            >
              {/* Icon Circle with Hover Effects */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-black/5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[17.5px] font-extrabold text-[#1E293B] tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[14px] font-semibold text-[#64748B] leading-snug">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default FeaturesGrid;
