import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        className={`flex items-start px-4 py-2 font-bold rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out ${
          isActive ? "bg-white text-black" : "text-white"
        }`}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav
      className="sticky top-1.5 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container px-4 mx-auto relatiive text-sm">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="font-heading font-bold text-white text-2xl">
              Buildfolio.io
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/how-it-works" label="The Flow" />
            <NavLink to="/about" label="About App" />
          </ul>

          {/* CTA Button */}
          <Link
            to="/builder"
            className="py-2 px-3 rounded-md text-white border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Let's Build
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
