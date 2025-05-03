
import { PortfolioData } from "./PortfolioForm";
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Globe, ExternalLink, Github, Linkedin } from "lucide-react";

interface PortfolioPreviewProps {
  portfolioData: PortfolioData;
  theme: string;
}

const PortfolioPreview = ({ portfolioData, theme }: PortfolioPreviewProps) => {
  // Determine theme classes based on selected theme
  const getThemeClasses = () => {
    switch (theme) {
      case "blue":
        return {
          header: "bg-blue-600",
          accent: "bg-blue-500",
          badge: "bg-blue-100 text-blue-800",
          button: "bg-blue-600 hover:bg-blue-700",
          highlight: "text-blue-600",
        };
      case "purple":
        return {
          header: "bg-purple-600",
          accent: "bg-purple-500",
          badge: "bg-purple-100 text-purple-800",
          button: "bg-purple-600 hover:bg-purple-700",
          highlight: "text-purple-600",
        };
      case "green":
        return {
          header: "bg-green-600",
          accent: "bg-green-500",
          badge: "bg-green-100 text-green-800",
          button: "bg-green-600 hover:bg-green-700",
          highlight: "text-green-600",
        };
      case "orange":
        return {
          header: "bg-orange-600",
          accent: "bg-orange-500",
          badge: "bg-orange-100 text-orange-800",
          button: "bg-orange-600 hover:bg-orange-700",
          highlight: "text-orange-600",
        };
      default:
        return {
          header: "bg-blue-600",
          accent: "bg-blue-500",
          badge: "bg-blue-100 text-blue-800",
          button: "bg-blue-600 hover:bg-blue-700",
          highlight: "text-blue-600",
        };
    }
  };

  const themeClasses = getThemeClasses();
  const avatarUrl = portfolioData.avatarUrl || "https://via.placeholder.com/150";

  return (
    <div className="h-full overflow-y-auto pb-10">
      <div className="preview-container">
        {/* Website Navigation */}
        <nav className={`${themeClasses.header} text-white px-6 py-4 sticky top-0 z-10 shadow-md`}>
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">
              {portfolioData.name || "Your Name"}
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-white/80 transition">About</a>
              <a href="#projects" className="hover:text-white/80 transition">Projects</a>
              <a href="#skills" className="hover:text-white/80 transition">Skills</a>
              <a href="#education" className="hover:text-white/80 transition">Education</a>
              <a href="#experience" className="hover:text-white/80 transition">Experience</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
              <img 
                src={avatarUrl} 
                alt={portfolioData.name || "Profile"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {portfolioData.name || "Your Name"}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                {portfolioData.title || "Your Title"}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {portfolioData.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{portfolioData.email}</span>
                  </div>
                )}
                {portfolioData.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{portfolioData.location}</span>
                  </div>
                )}
                {portfolioData.website && (
                  <div className="flex items-center gap-2">
                    <Globe size={16} />
                    <span>{portfolioData.website}</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex gap-3 justify-center md:justify-start">
                <a href="#" className="flex items-center gap-2">
                  <Github size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center gap-2">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 ${themeClasses.highlight} border-b pb-2`}>About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              {portfolioData.bio || "Your bio will appear here. Add information about yourself, your background, and what you're passionate about."}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-8 ${themeClasses.highlight} border-b pb-2`}>Skills</h2>
            {portfolioData.skills.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`px-4 py-2 rounded-full ${themeClasses.badge} border border-gray-200`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Add your skills to see them here.</p>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-8 ${themeClasses.highlight} border-b pb-2`}>Projects</h2>
            {portfolioData.projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map(project => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-100 relative">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          Project Image
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      {project.link && (
                        <a 
                          href={project.link} 
                          className={`inline-flex items-center gap-2 ${themeClasses.button} text-white px-4 py-2 rounded-md text-sm`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Project
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Add projects to see them here.</p>
            )}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-8 ${themeClasses.highlight} border-b pb-2`}>Education</h2>
            {portfolioData.education.length > 0 ? (
              <div className="space-y-8">
                {portfolioData.education.map(edu => (
                  <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl">{edu.institution}</h3>
                    <p className={`${themeClasses.highlight} font-medium`}>{edu.degree}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                    {edu.description && (
                      <p className="text-gray-700">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Add education to see it here.</p>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-8 ${themeClasses.highlight} border-b pb-2`}>Experience</h2>
            {portfolioData.experience.length > 0 ? (
              <div className="space-y-8">
                {portfolioData.experience.map(exp => (
                  <div key={exp.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl">{exp.company}</h3>
                    <p className={`${themeClasses.highlight} font-medium`}>{exp.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                    {exp.description && (
                      <p className="text-gray-700">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Add experience to see it here.</p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className={`${themeClasses.header} text-white px-6 py-8`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-bold text-xl mb-4">
              {portfolioData.name || "Your Name"}
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <a href="#" className="hover:opacity-75 transition">
                <Github size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} {portfolioData.name || "Your Name"}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioPreview;
