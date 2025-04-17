
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-claims-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ClaimResolutionHub</h3>
            <p className="text-white/70 mb-4">
              Expert assistance for auto insurance claim disputes, helping you receive fair compensation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-claims-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-claims-purple transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-claims-purple transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-claims-purple transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                  Vehicle Damage Claims
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                  Policy Review & Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                  Dealer Dispute Resolution
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-claims-purple transition-colors">
                  Appeals & Denials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-white/70 mb-2">123 Insurance Boulevard</p>
            <p className="text-white/70 mb-2">Claim City, CL 78901</p>
            <p className="text-white/70 mb-2">support@claimresolution.com</p>
            <p className="text-white/70 mb-2">(555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} ClaimResolutionHub. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-claims-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-claims-purple transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
