
import { Car, FileText, Building, Users, MessageSquare, Gavel } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const servicesList = [
    {
      icon: <Car size={24} />,
      title: "Vehicle Damage Claims",
      description: "We handle complex vehicle damage assessments and ensure fair compensation for repairs or total loss."
    },
    {
      icon: <FileText size={24} />,
      title: "Policy Review & Analysis",
      description: "Our experts thoroughly analyze your insurance policy to identify all available coverage options."
    },
    {
      icon: <Building size={24} />,
      title: "Dealer Dispute Resolution",
      description: "We mediate and resolve conflicts between car owners and dealerships regarding warranty issues."
    },
    {
      icon: <Users size={24} />,
      title: "Third-Party Liability Claims",
      description: "We represent your interests when dealing with third-party liability issues and insurance companies."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Claim Communication",
      description: "We handle all communication with insurance companies, allowing you to focus on your daily life."
    },
    {
      icon: <Gavel size={24} />,
      title: "Appeals & Denials",
      description: "Our specialists fight against wrongful claim denials and navigate the appeals process successfully."
    }
  ];

  return (
    <section id="services" className="py-20 bg-claims-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-claims-navy mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-claims-purple mx-auto mb-6"></div>
          <p className="text-lg text-claims-gray max-w-3xl mx-auto">
            We offer comprehensive solutions for all types of auto insurance claim disputes, 
            specializing in complex cases other firms avoid.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <Card key={index} className="p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-claims-navy/10 p-3 rounded-full text-claims-navy">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-claims-navy mb-2">{service.title}</h3>
                  <p className="text-claims-gray">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
