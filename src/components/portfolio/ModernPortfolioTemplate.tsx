
import { PortfolioData } from "@/components/builder/PortfolioForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

interface PortfolioTemplateProps {
  portfolioData: PortfolioData;
  theme: string;
}

const ModernPortfolioTemplate = ({ portfolioData, theme }: PortfolioTemplateProps) => {
  // Theme classes based on selected theme
  const getThemeClasses = () => {
    switch (theme) {
      case "blue":
        return {
          primary: "bg-blue-600",
          gradient: "from-blue-700 to-blue-500",
          accent: "bg-blue-500",
          text: "text-blue-500",
          button: "bg-blue-600 hover:bg-blue-700",
          buttonOutline: "border-blue-500 text-blue-500 hover:bg-blue-50",
          highlight: "border-blue-500",
          cardHover: "hover:border-blue-300",
        };
      case "purple":
        return {
          primary: "bg-purple-600",
          gradient: "from-purple-700 to-indigo-600",
          accent: "bg-purple-500",
          text: "text-purple-500",
          button: "bg-purple-600 hover:bg-purple-700",
          buttonOutline: "border-purple-500 text-purple-500 hover:bg-purple-50",
          highlight: "border-purple-500",
          cardHover: "hover:border-purple-300",
        };
      case "green":
        return {
          primary: "bg-emerald-600",
          gradient: "from-emerald-700 to-emerald-500",
          accent: "bg-emerald-500",
          text: "text-emerald-500",
          button: "bg-emerald-600 hover:bg-emerald-700",
          buttonOutline: "border-emerald-500 text-emerald-500 hover:bg-emerald-50",
          highlight: "border-emerald-500",
          cardHover: "hover:border-emerald-300",
        };
      case "orange":
        return {
          primary: "bg-orange-600",
          gradient: "from-orange-600 to-amber-500",
          accent: "bg-orange-500",
          text: "text-orange-500",
          button: "bg-orange-600 hover:bg-orange-700",
          buttonOutline: "border-orange-500 text-orange-500 hover:bg-orange-50",
          highlight: "border-orange-500",
          cardHover: "hover:border-orange-300",
        };
      case "dark":
        return {
          primary: "bg-slate-800",
          gradient: "from-slate-900 to-slate-700",
          accent: "bg-slate-700",
          text: "text-slate-300",
          button: "bg-slate-800 hover:bg-slate-700",
          buttonOutline: "border-slate-600 text-slate-300 hover:bg-slate-800",
          highlight: "border-slate-600",
          cardHover: "hover:border-slate-600",
        };
      case "neon":
        return {
          primary: "bg-fuchsia-600",
          gradient: "from-fuchsia-600 to-pink-600",
          accent: "bg-pink-500",
          text: "text-fuchsia-500",
          button: "bg-fuchsia-600 hover:bg-fuchsia-700",
          buttonOutline: "border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-50",
          highlight: "border-fuchsia-500",
          cardHover: "hover:border-fuchsia-300",
        };
      default:
        return {
          primary: "bg-blue-600",
          gradient: "from-blue-700 to-blue-500",
          accent: "bg-blue-500",
          text: "text-blue-500",
          button: "bg-blue-600 hover:bg-blue-700",
          buttonOutline: "border-blue-500 text-blue-500 hover:bg-blue-50",
          highlight: "border-blue-500",
          cardHover: "hover:border-blue-300",
        };
    }
  };

  const themeClasses = getThemeClasses();
  const avatarUrl = portfolioData.avatarUrl || "https://via.placeholder.com/150";

  return (
    <div className="modern-portfolio">
      {/* Hero Section with Glassmorphism */}
      <header className={`bg-gradient-to-br ${themeClasses.gradient} text-white py-20 relative overflow-hidden`}>
        {/* Abstract shapes for modern look */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute top-[40%] right-[30%] w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <nav className="flex justify-between items-center mb-12">
            <div className="font-bold text-xl glass px-4 py-2 rounded-lg">
              {portfolioData.name?.split(' ')[0] || "Portfolio"}
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">About</a>
              <a href="#projects" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Projects</a>
              <a href="#skills" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Skills</a>
              <a href="#contact" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Contact</a>
            </div>
          </nav>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur flex-shrink-0 shadow-xl">
              <img 
                src={avatarUrl} 
                alt={portfolioData.name || "Profile"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {portfolioData.name || "Your Name"}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-6 animate-fade-in">
                {portfolioData.title || "Your Title"}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <a 
                  href="#contact" 
                  className="glass px-6 py-3 text-white rounded-full font-medium hover:bg-white/30 transition"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-transparent border-2 border-white/50 rounded-full font-medium hover:bg-white/10 transition"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section with Card Style */}
      <section id="about" className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="glass p-8 rounded-2xl">
                <p className="text-lg leading-relaxed mb-6">
                  {portfolioData.bio || "Your bio will appear here. Add information about yourself, your background, and what you're passionate about."}
                </p>
                {portfolioData.location && (
                  <p className="mb-2 flex items-center gap-2">
                    <MapPin size={18} className={themeClasses.text} />
                    <span className={`font-medium ${themeClasses.text}`}>Location:</span> {portfolioData.location}
                  </p>
                )}
                {portfolioData.email && (
                  <p className="flex items-center gap-2">
                    <Mail size={18} className={themeClasses.text} />
                    <span className={`font-medium ${themeClasses.text}`}>Email:</span> {portfolioData.email}
                  </p>
                )}
                {portfolioData.website && (
                  <p className="flex items-center gap-2 mt-2">
                    <Globe size={18} className={themeClasses.text} />
                    <span className={`font-medium ${themeClasses.text}`}>Website:</span> {portfolioData.website}
                  </p>
                )}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full ${themeClasses.primary} opacity-20`}></div>
                <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full ${themeClasses.primary} opacity-20`}></div>
                
                {/* Main image container */}
                <div className={`w-80 h-80 rounded-2xl bg-gradient-to-br ${themeClasses.gradient} p-1 shadow-xl relative z-10`}>
                  <div className="w-full h-full glass rounded-xl overflow-hidden border border-white/10">
                    {/* This could be a second profile image or an illustration */}
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img 
                        src="https://via.placeholder.com/400x400?text=Your+Image" 
                        alt="Portfolio visual" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Modern Cards */}
      <section id="skills" className="py-16 md:py-24 bg-black/30 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
          
          {portfolioData.skills && portfolioData.skills.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`glass rounded-xl p-6 hover:shadow-md transition text-center hover-lift ${themeClasses.cardHover} border border-white/10`}
                >
                  <div className={`w-12 h-12 ${themeClasses.primary} rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold">{skill.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-10 glass rounded-xl border border-dashed border-white/20">
              <p className="text-muted-foreground">Add your skills to see them here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section with Hover Effects */}
      <section id="projects" className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          
          {portfolioData.projects && portfolioData.projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <Card key={project.id} className="group overflow-hidden glass border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-transparent text-white">
                  <div className="h-48 relative overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-black/30 flex items-center justify-center">
                        Project Image
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="mb-4 line-clamp-3 text-gray-300">
                      {project.description}
                    </p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        className={`inline-flex items-center gap-2 ${themeClasses.text} font-medium group-hover:underline`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-10 glass rounded-xl border border-dashed border-white/20">
              <p className="text-muted-foreground">Add projects to see them here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Education & Experience Sections with Timeline Design */}
      <section className="py-16 md:py-24 bg-black/30 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              {portfolioData.education && portfolioData.education.length > 0 ? (
                <div className="space-y-8">
                  {portfolioData.education.map((edu) => (
                    <div key={edu.id} className={`relative pl-8 border-l-2 ${themeClasses.highlight} py-4 hover-lift`}>
                      <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${themeClasses.primary} shadow-md`}></div>
                      <div className="glass p-4 rounded-lg border-white/10">
                        <h3 className="font-bold text-xl">{edu.institution}</h3>
                        <p className={`font-medium ${themeClasses.text}`}>{edu.degree}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                        {edu.description && (
                          <p className="text-gray-300">{edu.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-10 glass rounded-xl border border-dashed border-white/20">
                  <p className="text-muted-foreground">Add education to see it here.</p>
                </div>
              )}
            </div>
            
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              {portfolioData.experience && portfolioData.experience.length > 0 ? (
                <div className="space-y-8">
                  {portfolioData.experience.map((exp) => (
                    <div key={exp.id} className={`relative pl-8 border-l-2 ${themeClasses.highlight} py-4 hover-lift`}>
                      <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full ${themeClasses.primary} shadow-md`}></div>
                      <div className="glass p-4 rounded-lg border-white/10">
                        <h3 className="font-bold text-xl">{exp.company}</h3>
                        <p className={`font-medium ${themeClasses.text}`}>{exp.role}</p>
                        <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
                        {exp.description && (
                          <p className="text-gray-300">{exp.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-10 glass rounded-xl border border-dashed border-white/20">
                  <p className="text-muted-foreground">Add experience to see it here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Glassmorphism Card */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Interested in working together or have any questions? Feel free to reach out.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="glass rounded-xl p-8 border-white/10">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                {portfolioData.email && (
                  <p className="flex items-center gap-3 mb-3">
                    <Mail size={20} className={themeClasses.text} />
                    {portfolioData.email}
                  </p>
                )}
                {portfolioData.location && (
                  <p className="flex items-center gap-3 mb-3">
                    <MapPin size={20} className={themeClasses.text} />
                    {portfolioData.location}
                  </p>
                )}
                {portfolioData.website && (
                  <p className="flex items-center gap-3">
                    <Globe size={20} className={themeClasses.text} />
                    <a href={portfolioData.website} target="_blank" rel="noopener noreferrer" className={themeClasses.text}>
                      {portfolioData.website}
                    </a>
                  </p>
                )}
              </div>
              
              <div className="flex justify-center gap-4">
                <a href="#" className={`${themeClasses.primary} text-white p-3 rounded-full hover:opacity-90 transition shadow-md`}>
                  <Github size={20} />
                </a>
                <a href="#" className={`${themeClasses.primary} text-white p-3 rounded-full hover:opacity-90 transition shadow-md`}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className={`${themeClasses.primary} text-white p-3 rounded-full hover:opacity-90 transition shadow-md`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer with Gradient */}
      <footer className={`bg-gradient-to-r ${themeClasses.gradient} text-white py-12`}>
        <div className="container-custom text-center">
          <div className="font-bold text-xl mb-4">
            {portfolioData.name || "Your Name"}
          </div>
          <p className="opacity-80 mb-6">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition">Github</a>
            <a href="#" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition">LinkedIn</a>
            <a href="#" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition">Twitter</a>
            <a href="#" className="glass px-4 py-2 rounded-lg hover:bg-white/20 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolioTemplate;
