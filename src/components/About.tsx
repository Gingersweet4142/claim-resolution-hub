
import { FileText, Shield, Handshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-claims-navy mb-4">About Our Expertise</h2>
          <div className="w-20 h-1 bg-claims-purple mx-auto mb-6"></div>
          <p className="text-lg text-claims-gray max-w-3xl mx-auto">
            With over 15 years of experience, we've successfully resolved hundreds of complex insurance claims, 
            helping our clients receive the fair treatment and compensation they deserve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-claims-light p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="bg-claims-navy w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FileText className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-claims-navy text-center mb-4">Expert Assessment</h3>
            <p className="text-claims-gray text-center">
              Our team thoroughly evaluates your case, identifying all potential avenues for a successful resolution.
            </p>
          </div>
          
          <div className="bg-claims-light p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="bg-claims-navy w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-claims-navy text-center mb-4">Strong Representation</h3>
            <p className="text-claims-gray text-center">
              We advocate aggressively on your behalf, ensuring your voice is heard throughout the claims process.
            </p>
          </div>
          
          <div className="bg-claims-light p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="bg-claims-navy w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Handshake className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-claims-navy text-center mb-4">Successful Settlements</h3>
            <p className="text-claims-gray text-center">
              Our proven negotiation strategies consistently deliver favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
