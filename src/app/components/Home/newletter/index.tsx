'use client';

import React from 'react';

// Sample data to keep the component clean and DRY
const articles = [
  {
    id: 1,
    date: 'FEBRUARY 17, 2024',
    title: "The Latest Trends In Kids' Fashion For The Upcoming Summer Season",
    excerpt: 'Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus, auctor vehicula metus. Phasellus turpis sapien, elementum et est nec, ultrices lobortis est.',
    imageUrl: '/assets/newLetter/newletter2.jpg',
  },
  {
    id: 2,
    date: 'FEBRUARY 17, 2024',
    title: "Stylish And Comfortable: Kids' Clothing For Christmas & New Year",
    excerpt: 'Lacus vel facilisis volutpat est velit egestas. Enim blandit volutpat maecenas volutpat. Et netus et malesuada fames ac turpis turpis sapien, elementum et est nec, ultrices lobortis est.',
    imageUrl: '/assets/newLetter/newletter2.jpg',
  },
  {
    id: 3,
    date: 'MARCH 05, 2024',
    title: "Top 10 Educational Toys For Toddlers This Spring",
    excerpt: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    imageUrl: '/assets/newLetter/newletter2.jpg',
  }
];

const KidsNewsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#fcf9f2] font-sans text-gray-900 flex flex-col w-full relative">
      
      {/* Header Area */}
      <header className="px-6 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 z-10 relative bg-[#fcf9f2]">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Kids News Articles
        </h1>
        <button className="bg-[#5f46a0] text-white text-sm md:text-xs font-bold tracking-wider px-6 py-3 rounded-full uppercase shadow-[4px_4px_0px_#111] border border-[#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111] transition-all whitespace-nowrap">
          Explore More Blogs
        </button>
      </header>

      {/* Main Content Grid with Borders */}
      <div className="border-t border-gray-400 flex flex-col lg:flex-row w-full flex-grow relative">
        
        {/* Left Sidebar (Poster / Image) - NOW STICKY ON DESKTOP */}
        <aside className="w-full lg:w-[35%] border-b lg:border-b-0 lg:border-r border-gray-400 p-6 md:p-12 lg:sticky lg:top-0 lg:h-screen lg:self-start">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-xl overflow-hidden border border-gray-200">
            {/* Substituting the specific poster with a relevant toy image */}
            <img 
              src="/assets/newLetter/newletter1.jpg" 
              alt="Be a volunteer, join our events" 
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Overlay to mimic the poster feel if needed */}
            <div className="absolute inset-0 bg-teal-400/20 mix-blend-multiply rounded-xl"></div>
          </div>
        </aside>

        {/* Right Articles List (Scrollable area) */}
        <div className="w-full lg:w-[65%] flex flex-col relative">
          
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={`p-6 md:p-12 flex flex-col xl:flex-row gap-8 ${
                index !== articles.length - 1 ? 'border-b border-gray-400' : ''
              }`}
            >
              {/* Article Image & Date Badge */}
              <div className="relative w-full xl:w-[45%] flex-shrink-0">
                <div className="absolute top-4 left-4 z-10 bg-[#fde047] text-black text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                  {article.date}
                </div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-64 xl:h-full object-cover rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col justify-center w-full xl:w-[55%]">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div>
                  <button className="bg-[#5f46a0] text-white text-xs font-bold tracking-wider px-8 py-3 rounded-full uppercase shadow-[4px_4px_0px_#111] border border-[#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111] transition-all">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
          
        </div>
      </div>
      
      {/* Floating Back to Top Button (Fixed to bottom right of screen) */}
      <button 
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 w-16 h-16 bg-[#5f46a0] text-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_#111] border border-[#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111] transition-all z-50 group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        {/* Decorative dots to mimic the circle text in the original image */}
        <div className="absolute inset-1 border-[1px] border-dashed border-white/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
      </button>

    </section>
  );
};

export default KidsNewsSection;