
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortfolioData } from "@/components/builder/PortfolioForm";
import { Button } from "@/components/ui/button";
import { Edit, Upload, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import ModernPortfolioTemplate from "@/components/portfolio/ModernPortfolioTemplate";

const PortfolioPreview = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  // Default state in case no data is passed
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [theme, setTheme] = useState<string>("blue");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if data was passed via location state
    if (location.state?.portfolioData) {
      setPortfolioData(location.state.portfolioData);
      setTheme(location.state.theme || "blue");
    } else {
      // Try to load from localStorage as fallback
      const savedData = localStorage.getItem("portfolioData");
      const savedTheme = localStorage.getItem("portfolioTheme");
      
      if (savedData) {
        setPortfolioData(JSON.parse(savedData));
        setTheme(savedTheme || "blue");
      }
    }
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.state]);

  const handleDeploy = (platform: string) => {
    toast({
      title: `Deploying to ${platform}`,
      description: "Preparing your portfolio for deployment...",
    });
    
    // In a real application, this would handle the deployment process
    setTimeout(() => {
      toast({
        title: "Deployment initiated",
        description: `Your portfolio is being deployed to ${platform}. This may take a few minutes.`,
      });
    }, 2000);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-dark">
        <div className="text-center">
          <div className="inline-block">
            <Loader size={40} className="text-primary animate-spin mb-4" />
          </div>
          <p className="text-muted-foreground text-lg">Loading your portfolio preview...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-dark">
        <div className="text-center max-w-md mx-auto px-4 glass p-8 rounded-2xl">
          <h1 className="text-2xl font-bold mb-4 gradient-text">No Portfolio Data Found</h1>
          <p className="mb-6 text-muted-foreground">
            It seems you haven't created your portfolio yet or the data couldn't be loaded.
          </p>
          <Link to="/builder">
            <Button className="bg-gradient-blue hover:opacity-90">Create Your Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-dark min-h-screen">
      {/* Fixed top bar with controls */}
      <div className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md z-50">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center py-3 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-heading font-bold text-white">P</span>
            </div>
            <span className="font-heading font-medium text-white">Portfolio Preview</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/builder">
              <Button variant="outline" className="glass-dark border-white/10 flex items-center gap-2 hover:bg-white/10">
                <Edit size={16} />
                Edit Portfolio
              </Button>
            </Link>
            <Button 
              onClick={() => handleDeploy("Netlify")}
              className="flex items-center gap-2 bg-[#20C6B7] hover:bg-[#20C6B7]/90"
            >
              <Upload size={16} />
              Deploy to Netlify
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleDeploy("GitHub Pages")}
              className="glass-dark border-white/10 flex items-center gap-2 hover:bg-white/10"
            >
              <Upload size={16} />
              GitHub Pages
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio content with proper spacing */}
      <div className="pt-16">
        <ModernPortfolioTemplate portfolioData={portfolioData} theme={theme} />
      </div>
    </div>
  );
};

export default PortfolioPreview;
