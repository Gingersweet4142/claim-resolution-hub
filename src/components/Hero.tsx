
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-claims-navy/70 z-10"></div>
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg"
        >
          {/* Video sources would be added here in production */}
          {/* Using a placeholder for now */}
        </video>
      </div>
      
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Expert Insurance Claim Resolution
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
          We help resolve disputes between car owners, showrooms, and insurance companies
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button className="bg-white text-claims-navy hover:bg-white/90 text-lg py-6 px-8">
            Get a Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
            Learn How We Work
          </Button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
