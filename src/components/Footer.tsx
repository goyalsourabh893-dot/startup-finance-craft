import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SF</span>
              </div>
              <span className="text-xl font-bold">StrategicFinance</span>
            </div>
            <p className="text-background/70">
              Expert financial advisory services for growing startups. From seed to scale.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Financial Modeling</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Fundraising Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Budget & Planning</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Investor Relations</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/70" />
                <span className="text-background/70">hello@strategicfinance.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/70" />
                <span className="text-background/70">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="bg-background/10 p-4 rounded-lg">
              <p className="text-sm text-background/70 mb-2">Ready to grow?</p>
              <p className="text-sm font-semibold">Schedule your free consultation today.</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/70 text-sm">
            © 2024 Strategic Finance Advisory. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;