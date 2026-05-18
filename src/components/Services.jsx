import { motion } from 'framer-motion';
import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-700 font-semibold tracking-wide uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">End-to-End Property Consultancy</h3>
          <p className="text-lg text-slate-600">
            From the first conversation to final possession — every service is designed around your unique situation, not a generic checklist.
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
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            id="services-consultation-cta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-800 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg text-lg"
          >
            Start Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
