import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-200/40 blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-red-100 mb-6 text-sm font-medium text-red-700">
              <Star className="w-4 h-4 fill-red-500 text-red-500" />
              <span>Trusted Salt Lake Property Advisory</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Trusted Salt Lake Property Guidance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-950">Buyers & Sellers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
              Your trusted Real Estate Consultants in Kolkata. From strategic property buying to seamless selling and leasing, we provide transparent and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="https://wa.me/919606295389"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
              >
                Book Property Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 border border-slate-200 hover:border-red-300 font-semibold text-lg transition-all hover:bg-red-50 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern property interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4 bg-white/90 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-red-600 fill-red-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Expert Care</p>
                  <p className="text-sm text-slate-600">Led by Afaque Ahmed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
