import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { businessDetails } from '../data';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-amber-50/30">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-emerald-100 mb-6 text-sm font-medium text-emerald-800">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Trusted South Kolkata Property Advisor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Trusted Property Guidance Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-900">
                Rash Behari &amp; South Kolkata
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
              For buyers and sellers across South Kolkata — honest, unhurried, relationship-led property consultation anchored in deep local knowledge and genuine community trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href={`https://wa.me/${businessDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                id="hero-services-link"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 border border-slate-200 hover:border-emerald-300 font-semibold text-lg transition-all hover:bg-emerald-50 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex items-center gap-6 justify-center md:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-medium text-slate-700">5.0</span>
              </div>
              <span className="text-slate-300">|</span>
              <span>100% Referral-driven reputation</span>
              <span className="text-slate-300">|</span>
              <span>South Kolkata specialist</span>
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
                alt="South Kolkata residential property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 flex items-center gap-4 bg-white/95 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Krishna Pada Mandal</p>
                  <p className="text-sm text-emerald-700 font-medium">Rash Behari Avenue · Dover Lane · South Kolkata</p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-6 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-xl hidden md:block"
            >
              <p className="text-2xl font-extrabold">Hyperlocal</p>
              <p className="text-sm font-medium opacity-90">South Kolkata Expert</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
