
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-white text-lg">P</span>
              </div>
              <span className="font-heading font-bold text-lg">PortfolioBuilder</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Build your personal portfolio in minutes — no code needed.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/builder" className="hover:text-primary transition-colors">Portfolio Builder</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PortfolioBuilder. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
