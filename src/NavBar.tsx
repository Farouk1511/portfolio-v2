import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="fixed sm:static bottom-0 left-0 sm:left-0 z-40 w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-20 bg-[#2b2b2c] text-[#d6d6d6] flex justify-evenly items-center p-4 sm:p-0 rounded-t-xl sm:rounded-t-xl md:rounded-tr-2xl md:rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-bl-2xl xl:rounded-tr-2xl xl:rounded-bl-2xl"
      aria-label="Main navigation"
    >
      {["/", "/resume", "/portfolio", "/blog", "/contact"].map((path, index) => (
      <NavLink
        key={index}
        to={path}
        className={({ isActive }) =>
        `cursor-pointer hover:text-[#ffdb70] transition-colors ${
          isActive ? "text-[#ffdb70]" : ""
        }`
        }
      >
        {path === "/" ? "About" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
      </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
