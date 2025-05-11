const Footer = () => {
  return (
    <footer className="py-6 border-t border-neutral-700/80">
      <div className="container-custom flex gap-2 flex-col items-center justify-center">
              <span className="font-heading font-bold text-lg">Buildfolio.io</span>
            <p className="text-muted-foreground">
              MADE WITH ❤️ BY <span className="font-bold">MUHAMMAD FAHAD  </span>
            </p>

            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Buildfolio. All rights reserved.
            </p>
      </div>
    </footer>
  );
};

export default Footer;
