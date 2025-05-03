
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { User, Briefcase, GraduationCap, Code, Plus, X } from "lucide-react";
import { Label } from "@/components/ui/label";

// Types for our portfolio data
export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  email?: string;
  location?: string;
  website?: string;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
}

interface PortfolioFormProps {
  portfolioData: PortfolioData;
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const PortfolioForm = ({ portfolioData, setPortfolioData }: PortfolioFormProps) => {
  // Helper function to update portfolio data
  const updateData = (field: keyof PortfolioData, value: any) => {
    setPortfolioData(prev => ({ ...prev, [field]: value }));
  };

  // Helper function to generate a unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Add a new project
  const addProject = () => {
    const newProject = {
      id: generateId(),
      title: "",
      description: "",
    };
    updateData("projects", [...portfolioData.projects, newProject]);
  };

  // Remove a project
  const removeProject = (id: string) => {
    updateData("projects", portfolioData.projects.filter(project => project.id !== id));
  };

  // Update a project field
  const updateProject = (id: string, field: keyof Project, value: any) => {
    updateData("projects", portfolioData.projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  // Add a new skill
  const addSkill = () => {
    const newSkill = {
      name: "",
      level: 3,
    };
    updateData("skills", [...portfolioData.skills, newSkill]);
  };

  // Remove a skill
  const removeSkill = (index: number) => {
    const updatedSkills = [...portfolioData.skills];
    updatedSkills.splice(index, 1);
    updateData("skills", updatedSkills);
  };

  // Update a skill
  const updateSkill = (index: number, field: keyof Skill, value: any) => {
    const updatedSkills = [...portfolioData.skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    updateData("skills", updatedSkills);
  };

  // Add a new education entry
  const addEducation = () => {
    const newEducation = {
      id: generateId(),
      institution: "",
      degree: "",
      year: "",
    };
    updateData("education", [...portfolioData.education, newEducation]);
  };

  // Remove an education entry
  const removeEducation = (id: string) => {
    updateData("education", portfolioData.education.filter(edu => edu.id !== id));
  };

  // Update an education field
  const updateEducation = (id: string, field: keyof Education, value: any) => {
    updateData("education", portfolioData.education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  // Add a new experience entry
  const addExperience = () => {
    const newExperience = {
      id: generateId(),
      company: "",
      role: "",
      duration: "",
    };
    updateData("experience", [...portfolioData.experience, newExperience]);
  };

  // Remove an experience entry
  const removeExperience = (id: string) => {
    updateData("experience", portfolioData.experience.filter(exp => exp.id !== id));
  };

  // Update an experience field
  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    updateData("experience", portfolioData.experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="h-full overflow-y-auto pb-10">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User size={16} /> Profile
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <Code size={16} /> Projects
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap size={16} /> Education
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase size={16} /> Experience
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Enter your basic information to personalize your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={portfolioData.name} 
                  onChange={(e) => updateData("name", e.target.value)} 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input 
                  id="title" 
                  value={portfolioData.title} 
                  onChange={(e) => updateData("title", e.target.value)} 
                  placeholder="Full-Stack Developer"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={portfolioData.email || ""} 
                  onChange={(e) => updateData("email", e.target.value)} 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={portfolioData.location || ""} 
                  onChange={(e) => updateData("location", e.target.value)} 
                  placeholder="New York, USA"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Personal Website</Label>
                <Input 
                  id="website" 
                  value={portfolioData.website || ""} 
                  onChange={(e) => updateData("website", e.target.value)} 
                  placeholder="https://johndoe.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  value={portfolioData.bio} 
                  onChange={(e) => updateData("bio", e.target.value)} 
                  placeholder="Write a short bio about yourself..."
                  className="min-h-32"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>
                Add your technical and professional skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 mb-3">
                  <Input 
                    value={skill.name} 
                    onChange={(e) => updateSkill(index, "name", e.target.value)} 
                    placeholder="Skill name"
                    className="flex-1"
                  />
                  <select
                    value={skill.level}
                    onChange={(e) => updateSkill(index, "level", parseInt(e.target.value))}
                    className="bg-background border rounded-md px-3 py-1 text-sm"
                  >
                    <option value={1}>Beginner</option>
                    <option value={2}>Intermediate</option>
                    <option value={3}>Advanced</option>
                    <option value={4}>Expert</option>
                    <option value={5}>Master</option>
                  </select>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeSkill(index)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-2" 
                onClick={addSkill}
              >
                <Plus size={16} className="mr-2" /> Add Skill
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>
                Showcase your work and achievements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {portfolioData.projects.map(project => (
                <div key={project.id} className="mb-6 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Project Details</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeProject(project.id)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`project-title-${project.id}`}>Project Title</Label>
                      <Input 
                        id={`project-title-${project.id}`}
                        value={project.title} 
                        onChange={(e) => updateProject(project.id, "title", e.target.value)} 
                        placeholder="Project Title"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`project-description-${project.id}`}>Description</Label>
                      <Textarea 
                        id={`project-description-${project.id}`}
                        value={project.description} 
                        onChange={(e) => updateProject(project.id, "description", e.target.value)} 
                        placeholder="Describe your project..."
                        className="min-h-24"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`project-link-${project.id}`}>Project Link</Label>
                      <Input 
                        id={`project-link-${project.id}`}
                        value={project.link || ""} 
                        onChange={(e) => updateProject(project.id, "link", e.target.value)} 
                        placeholder="https://project-link.com"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-2" 
                onClick={addProject}
              >
                <Plus size={16} className="mr-2" /> Add Project
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
                Add your academic background.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {portfolioData.education.map(edu => (
                <div key={edu.id} className="mb-6 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Education Details</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeEducation(edu.id)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`edu-institution-${edu.id}`}>Institution</Label>
                      <Input 
                        id={`edu-institution-${edu.id}`}
                        value={edu.institution} 
                        onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} 
                        placeholder="University or School Name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`edu-degree-${edu.id}`}>Degree/Certification</Label>
                      <Input 
                        id={`edu-degree-${edu.id}`}
                        value={edu.degree} 
                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} 
                        placeholder="Bachelor of Science in Computer Science"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`edu-year-${edu.id}`}>Year</Label>
                      <Input 
                        id={`edu-year-${edu.id}`}
                        value={edu.year} 
                        onChange={(e) => updateEducation(edu.id, "year", e.target.value)} 
                        placeholder="2019 - 2023"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`edu-description-${edu.id}`}>Description (Optional)</Label>
                      <Textarea 
                        id={`edu-description-${edu.id}`}
                        value={edu.description || ""} 
                        onChange={(e) => updateEducation(edu.id, "description", e.target.value)} 
                        placeholder="Additional details about your education..."
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-2" 
                onClick={addEducation}
              >
                <Plus size={16} className="mr-2" /> Add Education
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>
                Add your professional experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {portfolioData.experience.map(exp => (
                <div key={exp.id} className="mb-6 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Experience Details</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeExperience(exp.id)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`exp-company-${exp.id}`}>Company</Label>
                      <Input 
                        id={`exp-company-${exp.id}`}
                        value={exp.company} 
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)} 
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`exp-role-${exp.id}`}>Role/Position</Label>
                      <Input 
                        id={`exp-role-${exp.id}`}
                        value={exp.role} 
                        onChange={(e) => updateExperience(exp.id, "role", e.target.value)} 
                        placeholder="Software Engineer"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`exp-duration-${exp.id}`}>Duration</Label>
                      <Input 
                        id={`exp-duration-${exp.id}`}
                        value={exp.duration} 
                        onChange={(e) => updateExperience(exp.id, "duration", e.target.value)} 
                        placeholder="Jan 2020 - Present"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`exp-description-${exp.id}`}>Description</Label>
                      <Textarea 
                        id={`exp-description-${exp.id}`}
                        value={exp.description || ""} 
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)} 
                        placeholder="Describe your responsibilities and achievements..."
                        className="min-h-24"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-2" 
                onClick={addExperience}
              >
                <Plus size={16} className="mr-2" /> Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioForm;
