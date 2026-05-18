import { Building } from 'lucide-react';
import { businessDetails, navLinks } from '../data';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white">
                <Building size={24} />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Gk <span className="text-red-500">Realty</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Providing expert real estate advisory, strategic buying, selling, and property loan consultancy in Kolkata.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors border border-slate-800 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors border border-slate-800 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors border border-slate-800 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-red-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>{businessDetails.phone}</li>
              {businessDetails.secondaryPhone && (
                <li>{businessDetails.secondaryPhone}</li>
              )}
              <li>{businessDetails.address}</li>
              <li>{businessDetails.city}</li>
              <li className="mt-4 pt-4 border-t border-slate-800 text-red-500 font-medium">
                {businessDetails.hours}
              </li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Gk Realty. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Concept Mockup by</span>
            <span className="font-bold text-slate-300">Pantechsoft</span>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-slate-700 max-w-2xl mx-auto">
          Disclaimer: This is a concept mockup created by Pantechsoft for demonstration purposes and is not officially affiliated with Gk Realty.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
