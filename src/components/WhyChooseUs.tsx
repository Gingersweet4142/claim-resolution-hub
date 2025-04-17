
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "95% success rate in resolving complex auto insurance claims",
    "No fees unless we successfully resolve your claim",
    "Direct communication with senior claim specialists",
    "Deep understanding of insurance company tactics",
    "Proven track record with major insurance providers",
    "Transparent process with regular status updates"
  ];

  return (
    <section id="why-us" className="py-20 bg-claims-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Claim Resolution Services?</h2>
            <div className="w-20 h-1 bg-claims-purple mb-8"></div>
            <p className="text-lg mb-8 text-white/90">
              When your insurance claim is denied or underpaid, you need an advocate who understands the 
              complexities of auto insurance policies and has the expertise to challenge unfair decisions.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-claims-purple mr-3 flex-shrink-0" size={24} />
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-claims-purple mb-2">1,200+</div>
              <p className="text-xl">Claims Successfully Resolved</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-claims-purple mb-2">$15M+</div>
                <p>Recovered for Our Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-claims-purple mb-2">15+</div>
                <p>Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-claims-purple mb-2">48hrs</div>
                <p>Average Response Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-claims-purple mb-2">95%</div>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
