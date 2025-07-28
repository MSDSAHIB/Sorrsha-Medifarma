import { Link } from "react-router-dom";
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-primary-glow" />
              <span className="text-xl font-bold">Sorrsha Medifarma</span>
            </Link>
            <p className="text-muted-foreground">
              Advancing healthcare through innovative medical solutions for hospitals and military operations worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-glow">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary-glow">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary-glow transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary-glow transition-colors">Products</Link></li>
              <li><Link to="/why-us" className="text-muted-foreground hover:text-primary-glow transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary-glow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Categories</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Hospital Equipment</li>
              <li className="text-muted-foreground">Surgical Instruments</li>
              <li className="text-muted-foreground">Military Medical Kits</li>
              <li className="text-muted-foreground">Emergency Supplies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  1234 Medical Center Drive<br />
                  Healthcare District, HD 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-muted-foreground">info@sorrshamed.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Sorrsha Medifarma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary-glow transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary-glow transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary-glow transition-colors text-sm">
              Quality Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;