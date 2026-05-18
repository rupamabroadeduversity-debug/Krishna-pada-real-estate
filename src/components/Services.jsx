import { motion } from 'framer-motion';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Real Estate Services</h3>
          <p className="text-lg text-slate-600">
            From finding your dream home to securing the best commercial deals, we offer a comprehensive range of services tailored to your property goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-red-600 transition-colors shadow-lg">
            Book a Consultation
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
