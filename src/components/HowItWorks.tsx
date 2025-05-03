
import { ArrowRight, Edit, Layout, Upload } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 shadow-md">
        {icon}
      </div>
      <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mb-4 text-primary font-semibold shadow-sm">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs mx-auto">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="section bg-gradient-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating your portfolio is simple with our intuitive three-step process designed to get you online quickly and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <Step
            number={1}
            title="Enter Your Info"
            description="Fill out a simple form with your personal details, skills, projects, and experience."
            icon={<Edit size={24} className="text-primary" />}
          />
          
          {/* Desktop arrows */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight size={24} className="text-muted-foreground" />
          </div>

          <Step
            number={2}
            title="Customize"
            description="Choose colors, layout, and adjust the look and feel to match your personal style."
            icon={<Layout size={24} className="text-primary" />}
          />
          
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight size={24} className="text-muted-foreground" />
          </div>

          <Step
            number={3}
            title="Deploy"
            description="Preview your portfolio and deploy it to the web with a single click."
            icon={<Upload size={24} className="text-primary" />}
          />
          
          {/* Mobile arrows */}
          <div className="md:hidden flex justify-center w-full">
            <ArrowRight size={24} className="text-muted-foreground transform rotate-90" />
          </div>
          
          <div className="md:hidden flex justify-center w-full">
            <ArrowRight size={24} className="text-muted-foreground transform rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
