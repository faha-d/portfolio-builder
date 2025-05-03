
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 bg-white fixed top-0 w-full z-10">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="font-heading font-bold text-white text-lg">P</span>
          </div>
          <span className="font-heading font-bold text-lg text-black">PortfolioBuilder</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors text-black">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors text-black">
            About
          </Link>
          <Link to="/builder">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-md animate-slide-up">
          <div className="container-custom flex flex-col py-4 space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-primary transition-colors px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link to="/builder" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
