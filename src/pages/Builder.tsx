
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioForm, { PortfolioData } from "@/components/builder/PortfolioForm";
import ThemeSelector from "@/components/builder/ThemeSelector";
import { Button } from "@/components/ui/button";
import { Eye, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const defaultPortfolioData: PortfolioData = {
  name: "",
  title: "",
  bio: "",
  skills: [],
  projects: [],
  education: [],
  experience: [],
};

const Builder = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [theme, setTheme] = useState<string>("blue");
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Load saved data on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    const savedTheme = localStorage.getItem("portfolioTheme");
    
    if (savedData) {
      setPortfolioData(JSON.parse(savedData));
    }
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    // Simulate loading for a better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-save data when portfolioData or theme changes
  useEffect(() => {
    const autoSave = () => {
      if (!loading) {
        setIsSaving(true);
        localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
        localStorage.setItem("portfolioTheme", theme);
        
        setTimeout(() => {
          setIsSaving(false);
        }, 800);
      }
    };

    const debounceTimer = setTimeout(() => {
      autoSave();
    }, 1000);
    
    return () => clearTimeout(debounceTimer);
  }, [portfolioData, theme, loading]);

  const handlePreview = () => {
    navigate("/preview", { 
      state: { 
        portfolioData,
        theme
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-dark">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block">
              <Loader size={40} className="text-primary animate-spin mb-4" />
            </div>
            <p className="text-muted-foreground text-lg">Loading your portfolio builder...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-dark">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container-custom py-8">
          <div className="glass p-6 rounded-xl shadow-md border-white/10 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 gradient-text">Portfolio Builder</h1>
                <p className="text-muted-foreground">
                  Create and customize your professional portfolio
                </p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                {isSaving && (
                  <span className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-slow"></div>
                    Auto-saving...
                  </span>
                )}
                <Button 
                  variant="default" 
                  className="bg-gradient-blue hover:opacity-90 flex-1 md:flex-auto"
                  onClick={handlePreview}
                >
                  <Eye size={18} className="mr-2" />
                  Preview Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Main content - Form with glassmorphism styling */}
          <div className="max-w-3xl mx-auto">
            <div className="glass p-6 rounded-xl mb-6">
              <ThemeSelector theme={theme} setTheme={setTheme} />
            </div>
            
            <div className="glass p-6 rounded-xl">
              <PortfolioForm 
                portfolioData={portfolioData} 
                setPortfolioData={setPortfolioData} 
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Builder;
