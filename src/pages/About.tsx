
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-6">About PortfolioBuilder</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              PortfolioBuilder was created to help professionals, developers, designers, and 
              creatives showcase their work and skills without needing to code. We believe that 
              everyone deserves a professional online presence, regardless of their technical skills.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to democratize portfolio creation by providing an easy-to-use platform 
              that generates beautiful, responsive, and professional portfolios. We want to help 
              you stand out in a competitive job market and showcase your talents to the world.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Easy-to-use form-based portfolio creation</li>
              <li>Real-time preview of your portfolio</li>
              <li>Multiple themes and customization options</li>
              <li>Responsive design that works on all devices</li>
              <li>Deploy directly to the web with one click</li>
              <li>No coding knowledge required</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">How It Started</h2>
            <p className="mb-6">
              PortfolioBuilder began as a project to help bootcamp graduates showcase their 
              projects and skills to potential employers. We noticed that while many graduates 
              had impressive technical skills, they often lacked the time or design expertise 
              to create a compelling portfolio. Our platform filled that gap, and has since 
              grown to serve professionals across many industries.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Get Started Today</h2>
            <p className="mb-6">
              Creating your professional portfolio is just a few clicks away. Our intuitive 
              builder guides you through the process, and you can have a deployed portfolio 
              in minutes. Join thousands of professionals who have used PortfolioBuilder to 
              advance their careers.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
