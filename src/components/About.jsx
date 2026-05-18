import { motion } from 'framer-motion';
import { features } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px]"></div>
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
            <h2 className="text-amber-400 font-semibold tracking-wide uppercase mb-3">About</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A Local Consultant <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                You Can Truly Trust
              </span>
            </h3>

            <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
              <strong className="text-white">Krishna Pada Mandal</strong> is an independent property consultant operating across the South Kolkata belt — from Rash Behari Avenue and Dover Lane to Ballygunge, Lansdowne, and Gariahat.
            </p>

            <p className="text-emerald-200 text-base mb-8 leading-relaxed">
              Built entirely on referrals and repeat clients, this practice is relationship-led, not commission-driven. Every engagement starts with listening — understanding your family's needs, your budget realities, and your timeline — before any property is ever suggested.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400 border border-white/10">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                      <p className="text-emerald-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Image Showcase */}
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
              <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 rounded-2xl p-6 hidden md:block bg-amber-500 shadow-2xl">
              <div className="text-white font-bold text-4xl mb-1">South<span className="text-xl"> Kolkata</span></div>
              <div className="text-amber-100 text-sm font-medium">Hyper-local Specialist</div>
            </div>

            {/* Second accent card */}
            <div className="absolute -top-6 -right-4 rounded-2xl p-4 hidden md:block bg-white/10 backdrop-blur border border-white/20 shadow-xl">
              <div className="text-emerald-200 text-sm font-medium">Operating in</div>
              <div className="text-white font-bold text-lg">Rash Behari · Dover Lane</div>
              <div className="text-emerald-300 text-sm">Ballygunge · Lansdowne · Gariahat</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
