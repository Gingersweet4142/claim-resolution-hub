
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    // Show success message or toast notification
  };

  return (
    <section id="contact" className="py-20 bg-claims-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-claims-navy mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-claims-purple mx-auto mb-6"></div>
          <p className="text-lg text-claims-gray max-w-3xl mx-auto">
            Have a claim dispute? Contact us today for a free consultation and let our experts
            help you get the fair resolution you deserve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-claims-navy mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-3"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full py-3"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your situation"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-claims-navy hover:bg-claims-navy/90 py-6">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-claims-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-claims-purple mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-claims-navy">Phone</p>
                    <p className="text-claims-gray">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-claims-purple mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-claims-navy">Email</p>
                    <p className="text-claims-gray">support@claimresolution.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-claims-purple mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-claims-navy">Office</p>
                    <p className="text-claims-gray">
                      123 Insurance Boulevard<br />
                      Suite 456<br />
                      Claim City, CL 78901
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-claims-navy text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
