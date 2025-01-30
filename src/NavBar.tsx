import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full h-16 z-40 bg-[#2b2b2c] text-[#d6d6d6] flex justify-evenly items-center rounded-t-xl md:static md:h-20 md:w-3/5 md:rounded-none md:rounded-tr-xl md:rounded-bl-xl "
      aria-label="Main navigation"
    >
      {["/", "/resume", "/portfolio", "/blog", "/contact"].map(
        (path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `cursor-pointer hover:text-[#ffdb70] transition-colors ${
                isActive ? "text-[#ffdb70]" : ""
              }`
            }
          >
            {path === "/"
              ? "About"
              : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default NavBar;
