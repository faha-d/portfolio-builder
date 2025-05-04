import { Link } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      className="flex items-start px-7 py-4 text-black font-bold"
      to={to}
    >
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary-50/95">
      <div className="mx-auto max-w-[1440px] px-4 md:px-[34px] flex items-center py-6">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <span className="font-heading font-bold text-black text-2xl">
            Buildfolio.io
          </span>
        </div>

        {/* Navigation Links */}
        <div className="rounded-lg relative z-20 text-lg uppercase leading-[22px] lg:absolute lg:left-10 lg:right-0 lg:top-[23px] lg:mx-auto lg:w-fit xl:left-0 border-2 bg-white border-primary-700">
          <ul className="flex">
            <NavLink to="/" label="Home" />
            <NavLink to="/how-it-works" label="The Flow" />
            <NavLink to="/builder" label="About App" />
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          to="/builder"
          className="rounded-lg font-matter h-[54px] flex items-center justify-center px-8 py-4 font-semibold uppercase bg-primary-700 text-md border-primary-700 border-[2px] leading-none transition-all duration-300 ease-in-out hover:rounded-2xl hidden text-black lg:ml-auto lg:flex hover:bg-black hover:text-white"
        >
          Let's Build
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
