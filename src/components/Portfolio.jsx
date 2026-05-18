import { motion } from 'framer-motion';
import { portfolio } from '../data';
import { MapPin } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-300 font-semibold tracking-wide uppercase mb-3">South Kolkata Areas</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Localities We Know Deeply</h3>
            <p className="text-emerald-200 mt-4 max-w-lg">
              Hyperlocal knowledge of every micro-market — from pricing and demand to the lanes, neighbours, and hidden gems that only a true local knows.
            </p>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-800 border border-emerald-600 text-emerald-100 text-sm font-medium">
            <MapPin size={16} />
            <span>Rash Behari · Dover Lane · Ballygunge · Gariahat</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden h-80 w-full shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
