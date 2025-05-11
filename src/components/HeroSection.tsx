
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section mt-16 md:mt-20 relative overflow-hidden ">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build your personal portfolio <span className="gradient-text">in minutes</span> — no code needed
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-xl">
              Create a professional portfolio website without writing a single line of code. Customize, preview, and deploy in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" asChild>
                <Link to="/builder" className="flex items-center gap-2">
                  Build Your Portfolio <ChevronRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative mt-8 lg:mt-0">
            <img
              src="src\assets\hero-banner.png"
              alt="Hero Image"
              className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
