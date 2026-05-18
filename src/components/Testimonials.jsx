import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-emerald-50/50 -skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-700 font-semibold tracking-wide uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Words from South Kolkata Families</h3>
          <p className="text-lg text-slate-600">
            A reputation built entirely on referrals — here is what buyers and sellers across the South Kolkata belt have to say.
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
              className="bg-emerald-800 text-white rounded-3xl p-8 shadow-xl border border-emerald-700 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-8 right-8 text-emerald-700/50 group-hover:text-emerald-700/70 transition-colors">
                <Quote size={48} className="fill-current" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-emerald-50 mb-8 relative z-10 text-lg italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-emerald-300">{testimonial.role}</p>
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
