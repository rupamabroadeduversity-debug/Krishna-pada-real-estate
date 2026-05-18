import { motion } from 'framer-motion';
import { portfolio } from '../data';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-200 font-semibold tracking-wide uppercase mb-3">Featured Localities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Prime Property Listings</h3>
          </div>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-full bg-red-800 border border-red-600 text-red-50 font-medium hover:bg-white hover:text-red-700 transition-colors shadow-sm"
          >
            Follow on Instagram
          </a>
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
                <span className="inline-block px-3 py-1 rounded-full bg-white text-red-700 border border-red-200 text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-md">
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
