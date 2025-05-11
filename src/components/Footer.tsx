
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container-custom flex gap-2 flex-col items-center justify-center">
              <span className="font-heading font-bold text-lg">Buildfolio.io</span>
            <p className="text-muted-foreground">
              MADE WITH ❤️ BY <span className="font-bold">MUHAMMAD FAHAD  </span>
            </p>
      </div>
    </footer>
  );
};

export default Footer;
