'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, ArrowRight, ShoppingBag, MessageCircle, Cloud } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 1.94 2.89 2.89 0 0 1 5.66-1.94V9.4a6.84 6.84 0 0 0-5.66 5.63 6.81 6.81 0 0 0 13.6 0 58.3 58.3 0 0 0 5.25-5.63z" />
  </svg>
);

const Footer2 = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Hide when near top (on 1st hero banner component), show when scrolled down > 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-white pt-16 pb-48 md:pb-60 lg:pb-72 font-quicksand text-gray-600 overflow-hidden">
      
      {/* ═══ TOP SCALLOPED FLUFFY CLOUD WAVE DIVIDER ═══ */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[98%] text-white">
        <svg 
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24" 
          viewBox="0 0 283.5 25" 
          preserveAspectRatio="none" 
        >
          <path 
            className="fill-white" 
            d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z"
          />
        </svg>
      </div>

      {/* ═══ FLOATING BACKGROUND CLOUDS (LEFT TO RIGHT) ═══ */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <motion.div
          animate={{ x: ['-20vw', '115vw'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-0 text-[#38BDF8]/20"
        >
          <Cloud className="w-20 h-20 stroke-[1.8] fill-[#38BDF8]/5" />
        </motion.div>

        <motion.div
          animate={{ x: ['-25vw', '115vw'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear', delay: 10 }}
          className="absolute top-28 left-0 text-[#00C4B5]/15"
        >
          <Cloud className="w-28 h-28 stroke-[1.8] fill-[#00C4B5]/5" />
        </motion.div>
      </div>


      
      {/* --- Top Content Section --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-5">
            {/* Logo */}
            <a href="/" className="inline-block -mt-3 sm:-mt-5 mb-1">
              <img 
                src="/assets/clean_logo_toypark.webp" 
                alt="ToyPark Logo" 
                className="h-24 sm:h-28 md:h-34 w-auto max-w-[320px] object-contain transform hover:scale-105 transition-transform" 
              />
            </a>

            {/* Contact Info */}
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-600 hover:text-[#00C4B5] transition-colors">
                <MapPin size={18} className="text-[#00C4B5] flex-shrink-0 mt-0.5" />
                <span className="font-semibold">6391 Elgin St. Celina, Delaware 10299</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-[#00C4B5] transition-colors">
                <Phone size={18} className="text-[#00C4B5] flex-shrink-0" />
                <span className="font-semibold">+000-1234-456789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-[#00C4B5] transition-colors">
                <Mail size={18} className="text-[#00C4B5] flex-shrink-0" />
                <span className="font-semibold">toypark@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-[#00C4B5] transition-colors">
                <Printer size={18} className="text-[#00C4B5] flex-shrink-0" />
                <span className="font-semibold">+000-1234-55000</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links / Navigation */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Navigation</h3>
            <div className="w-10 h-1 bg-[#FF6B6B] mb-6 rounded-full"></div>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Gallery Showcase', href: '/gallery' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Story', href: '/ourstory' },
                { name: 'Who We Are', href: '/whoweare' },
                { name: 'Exhibition', href: '/exhibition' },
                { name: 'Blogs & Journal', href: '/blogs' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-[#FF6B6B] font-extrabold transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Customer Support</h3>
            <div className="w-10 h-1 bg-[#00C4B5] mb-6 rounded-full"></div>
            <ul className="space-y-3 text-sm">
              {['Contact Us', 'Store List', 'Opening Hours', 'Returns & Exchanges', 'Refund and Returns', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-[#00C4B5] font-bold transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Subscribe Our NewsLetter</h3>
            <div className="w-10 h-1 bg-orange-500 mb-6 rounded-full"></div>
            <p className="text-sm mb-6 text-gray-500 leading-relaxed">
              With our newsletter, you'll never miss an important update.
            </p>
            
            {/* Input Form */}
            <div className="relative flex items-center w-full mb-6">
              <div className="absolute left-4 text-gray-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full py-3.5 pl-12 pr-14 rounded-full border border-gray-200 focus:outline-none focus:border-orange-500 bg-white text-sm shadow-sm transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-full transition-all flex items-center justify-center shadow-sm hover:scale-105 active:scale-95">
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {[FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, TiktokIcon].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-md transition-all duration-200">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Animated Section --- */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        
        {/* Animated Child 1 */}
        <motion.img 
          src="/assets/Footer_images/Child1.svg" 
          alt="Child on left"
          className="absolute z-20 left-[3%] lg:left-[5%] bottom-[40px] sm:bottom-[60px] md:bottom-[70px] lg:bottom-[83px] w-24 sm:w-32 md:w-36 lg:w-[177px]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Animated Child 2 */}
        <motion.img 
          src="/assets/Footer_images/child2.svg" 
          alt="Child on right"
          className="absolute z-20 right-[3%] sm:right-[5%] lg:right-[6%] bottom-[50px] sm:bottom-[70px] md:bottom-[85px] lg:bottom-[100px] w-24 sm:w-32 md:w-36 lg:w-[147px]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Animated Grass Background */}
        <motion.img 
          src="/assets/Footer_images/greengrass.png" 
          alt="Grass Background"
          className="w-full object-cover object-top h-[160px] sm:h-[220px] md:h-[300px] lg:h-[435px]"
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Copyright Bar */}
        <div className="absolute bottom-3 w-full text-center z-30 pointer-events-auto text-white/90 text-xs sm:text-sm font-medium px-4">
          © 2024 toyup. All Rights Reserved by RadiusTheme
        </div>
      </div>

    </footer>
  );
};

export default Footer2;