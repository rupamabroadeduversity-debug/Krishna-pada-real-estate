import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { businessDetails } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-700 font-semibold tracking-wide uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Schedule Your Property Consultation</h3>
          <p className="text-lg text-slate-600">
            Whether you're buying, selling, or just exploring options — a simple call or WhatsApp message is all it takes to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <Phone size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call / WhatsApp</h4>
                  <a
                    href={`tel:${businessDetails.phone}`}
                    className="text-slate-600 hover:text-emerald-700 transition-colors text-lg font-medium"
                  >
                    {businessDetails.phone}
                  </a>
                  <p className="text-sm text-slate-400 mt-0.5">A direct line — no gatekeepers, no waiting rooms.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <MapPin size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Serving Area</h4>
                  <p className="text-slate-600">{businessDetails.address}</p>
                  <p className="text-slate-600">{businessDetails.city}</p>
                  <p className="text-sm text-slate-400 mt-1">Ballygunge · Dover Lane · Lansdowne · Gariahat</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <Clock size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Availability</h4>
                  <p className="text-slate-600">{businessDetails.hours}</p>
                  <p className="text-sm text-slate-400 mt-0.5">Response times are fast — typically within the hour.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${businessDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-emerald-500/30 text-lg"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${businessDetails.phone}`}
                id="contact-call-cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors shadow-lg text-lg"
              >
                <Phone size={22} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map Integration — South Kolkata / Rash Behari */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[420px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.223075210287!2d88.35!3d22.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271c9e5c6a8e5%3A0x5a6d4bde2b8c54a2!2sRash%20Behari%20Avenue%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Rash Behari Avenue, South Kolkata"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
