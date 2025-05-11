import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="section relative overflow-hidden">
      <div className="container-custom">
        <div
          className="flex flex-col lg:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              data-aos="fade-right"
            >
              Your work deserves better than a GitHub README.
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-xl"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Turn your projects into a polished portfolio without writing a
              single line of code. Customize, preview, and deploy in minutes.
            </p>
            <div className="max-w-max" data-aos="zoom-in" data-aos-delay="200">
              <Button size="lg" asChild>
                <Link
                  to="/builder"
                  className="flex items-center gap-2 hover:bg-transparent border-2 border-primary hover:text-white"
                >
                  Create Portfolio Now <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="flex-1 relative mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="src/assets/hero-banner.png"
              alt="Hero Image"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
