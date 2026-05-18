import { motion } from 'framer-motion';
import { features } from '../data';
import { Play } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-500/20 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-400 font-semibold tracking-wide uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A True Passion for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200">
                Real Estate Excellence
              </span>
            </h3>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Founded and operated by <strong className="text-white">Afaque Ahmed</strong>, Gk Realty is built on a foundation of genuine commitment to client success. We aren't just an agency; we are local consultants dedicated to providing transparent, stress-free property guidance.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-400 border border-white/5">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Video/Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
              <video 
                src="/remove_the_person_only_the_roo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              ></video>
              <div className="absolute inset-0 bg-blue-950/20 pointer-events-none transition-colors duration-300"></div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 glass-dark rounded-2xl p-6 hidden md:block bg-slate-800/80 backdrop-blur border border-white/10">
              <div className="text-red-400 font-bold text-4xl mb-1">5.0<span className="text-xl">⭐</span></div>
              <div className="text-slate-300 text-sm font-medium">Top Rated in Kolkata</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
