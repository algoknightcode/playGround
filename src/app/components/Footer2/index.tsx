'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Printer, ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';

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
    <footer className="relative bg-white pt-16 pb-48 md:pb-60 lg:pb-72 overflow-hidden font-sans text-gray-600">
      
      {/* --- Top Content Section --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-1 mb-3">
              <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight">Toy</span>
              <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight">Ü</span>
              <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight">p</span>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-gray-500 font-normal">
              Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-600 hover:text-orange-500 transition-colors">
                <MapPin size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="font-medium">6391 Elgin St. Celina, Delaware 10299</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors">
                <Phone size={18} className="text-teal-500 flex-shrink-0" />
                <span className="font-medium">+000-1234-456789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors">
                <Mail size={18} className="text-teal-500 flex-shrink-0" />
                <span className="font-medium">toyup@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors">
                <Printer size={18} className="text-teal-500 flex-shrink-0" />
                <span className="font-medium">+000-1234-55000</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Services</h3>
            <div className="w-10 h-1 bg-orange-500 mb-6 rounded-full"></div>
            <ul className="space-y-3 text-sm">
              {['Service Offerings', 'How It Works', 'Pricing Table', 'Service Areas', 'Service FAQs', 'Contact Information'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Support</h3>
            <div className="w-10 h-1 bg-orange-500 mb-6 rounded-full"></div>
            <ul className="space-y-3 text-sm">
              {['Contact Us', 'Store List', 'Opening Hours', 'Returns & Exchanges', 'Refund and Returns', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Subscribe Our NewsLetter</h3>
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