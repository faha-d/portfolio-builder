
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const GetStartedCTA = () => {
  return (
    <div className="section text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to showcase your skills to the world?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Join thousands of developers building standout portfolios <br/> no coding, no setup, just results.
        </p>
        <Button 
          size="lg" 
          asChild
          className="font-semibold px-8 py-6 text-base bg-white text-black hover:bg-transparent border-2 border-white hover:text-white transition duration-300"
        >
          <Link to="/builder" className="flex items-center gap-2">
            Create Portfolio Now <ChevronRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GetStartedCTA;
