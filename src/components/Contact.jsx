import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessDetails } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-600 font-semibold tracking-wide uppercase mb-3">Visit Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h3>
            <p className="text-lg text-slate-600 mb-10">
              We're here to help you make informed property decisions. Book an appointment or drop by for a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Office Location</h4>
                  <p className="text-slate-600">{businessDetails.address}</p>
                  <p className="text-slate-600">{businessDetails.city}</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Phone / WhatsApp</h4>
                  <p className="text-slate-600">{businessDetails.phone}</p>
                  {businessDetails.secondaryPhone && (
                    <p className="text-slate-600">{businessDetails.secondaryPhone}</p>
                  )}
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">{businessDetails.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://wa.me/${businessDetails.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/30 w-full sm:w-auto text-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.223075210287!2d88.40697925!3d22.5855685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c6020556e7%3A0xc6c4297a7a92dfb3!2sSector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
