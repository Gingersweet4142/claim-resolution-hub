
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Roberts",
      role: "Car Owner",
      text: "After my insurance company denied my claim for hail damage, ClaimResolution stepped in and not only got my claim approved but secured 40% more than the initial estimate. Their expertise was invaluable.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      text: "When our company vehicles were damaged in a flood, our insurance offered a settlement that wouldn't cover half the repairs. The team fought relentlessly and got us fair compensation within 3 weeks.",
      image: "/placeholder.svg"
    },
    {
      name: "David Chen",
      role: "Car Dealership Manager",
      text: "We've partnered with ClaimResolution for customer claim assistance, and they've helped maintain our excellent reputation by ensuring our customers receive fair treatment from insurers.",
      image: "/placeholder.svg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-claims-navy mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 bg-claims-purple mx-auto mb-6"></div>
          <p className="text-lg text-claims-gray max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our clients about how we've helped them
            navigate complex insurance claims.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={prev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-claims-light transition-colors"
            >
              <ChevronLeft size={24} className="text-claims-navy" />
            </button>
          </div>
          
          <div className="bg-claims-light rounded-xl p-8 md:p-12 shadow-sm">
            <Quote className="text-claims-purple/20 w-20 h-20 mb-6" />
            <p className="text-xl text-claims-navy mb-8 italic">
              "{testimonials[current].text}"
            </p>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-claims-navy">{testimonials[current].name}</h4>
                <p className="text-claims-gray">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={next}
              className="bg-white rounded-full p-2 shadow-md hover:bg-claims-light transition-colors"
            >
              <ChevronRight size={24} className="text-claims-navy" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-claims-purple" : "bg-claims-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
