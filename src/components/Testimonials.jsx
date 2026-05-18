import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-red-50/50 -skew-y-3 transform origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Trusted by Clients</h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here's what buyers, sellers, and investors across Kolkata have to say about our advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-red-700 text-white rounded-3xl p-8 shadow-xl border border-red-800 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-8 right-8 text-red-800/50 group-hover:text-red-800/70 transition-colors">
                <Quote size={48} className="fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-white text-white" />
                ))}
              </div>
              
              <p className="text-red-50 mb-8 relative z-10 text-lg italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-700 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-red-200">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
