import { MapPin } from 'lucide-react';
import { businessDetails, navLinks } from '../data';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-300 py-16 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-emerald-900 pb-12">
          
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-900 flex items-center justify-center text-white shadow-md">
                <MapPin size={22} />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Krishna Pada <span className="text-amber-400">Mandal</span>
              </span>
            </div>
            <p className="text-emerald-200 mb-6 max-w-sm">
              Providing expert real estate advisory, strategic buying, and seller consultation in South Kolkata.
            </p>
            <div className="flex gap-4">
              <a href={`https://wa.me/${businessDetails.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors border border-emerald-800 text-sm font-medium text-emerald-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-emerald-200">
              <li className="font-semibold text-white">{businessDetails.phone}</li>
              <li>{businessDetails.address}</li>
              <li>{businessDetails.city}</li>
              <li className="mt-4 pt-4 border-t border-emerald-900 text-amber-400 font-medium">
                {businessDetails.hours}
              </li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400">
          <p>&copy; {new Date().getFullYear()} Krishna Pada Mandal. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Concept Mockup by</span>
            <span className="font-bold text-white">Pantechsoft</span>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-emerald-500 max-w-2xl mx-auto">
          Disclaimer: This is a concept mockup created by Pantechsoft for demonstration purposes to showcase modern digital positioning for local independent advisors.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
