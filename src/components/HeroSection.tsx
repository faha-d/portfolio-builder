
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="section mt-16 md:mt-24 relative overflow-hidden from-white to-blue-50">
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
            <div className="bg-white rounded-xl shadow-lg border p-4">
              <div className="w-full aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white/80 backdrop-blur-sm rounded-lg shadow-md flex flex-col p-4">
                    <div className="h-6 w-24 bg-blue-200 rounded mb-3"></div>
                    <div className="flex-1 flex gap-3">
                      <div className="w-2/5 bg-blue-100 rounded"></div>
                      <div className="w-3/5 flex flex-col gap-2">
                        <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                        <div className="h-4 bg-blue-100 rounded w-1/2"></div>
                        <div className="h-4 bg-blue-100 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-3 justify-end">
                <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                <div className="h-8 w-8 bg-purple-500 rounded-full"></div>
                <div className="h-8 w-8 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-200 rounded-lg -rotate-12 animate-pulse"></div>
            <div className="absolute -bottom-8 right-12 w-20 h-20 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-green-200 rounded-lg rotate-12 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default HeroSection;
