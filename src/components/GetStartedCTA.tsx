
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const GetStartedCTA = () => {
  return (
    <div className="section bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to showcase your skills to the world?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Join thousands of professionals who have created stunning portfolios with our easy-to-use platform.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          asChild
          className="hover-lift font-semibold px-8 py-6 text-base"
        >
          <Link to="/builder" className="flex items-center gap-2">
            Build Your Portfolio <ChevronRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GetStartedCTA;
