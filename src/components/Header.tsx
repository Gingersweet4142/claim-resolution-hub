import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-claims-navy">
            <span className="text-2xl">Cardust</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-claims-navy hover:text-claims-purple transition-colors">
            About
          </a>
          <a href="#services" className="text-claims-navy hover:text-claims-purple transition-colors">
            Services
          </a>
          <a href="#why-us" className="text-claims-navy hover:text-claims-purple transition-colors">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-claims-navy hover:text-claims-purple transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-claims-navy hover:text-claims-purple transition-colors">
            Contact
          </a>
        </nav>
        <Button className="hidden md:flex bg-claims-navy hover:bg-claims-navy/90">
          <Phone size={16} className="mr-2" />
          <span>Call Now</span>
        </Button>
        <Button className="md:hidden bg-claims-navy hover:bg-claims-navy/90" variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
