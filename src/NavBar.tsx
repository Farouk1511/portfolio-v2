import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="flex justify-evenly items-center rounded-tr-2xl rounded-bl-2xl bg-[#2b2b2cbf] w-full sm:w-3/5 h-20 text-[#d6d6d6] p-4"
      aria-label="Main navigation"
    >
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `cursor-pointer hover:text-[#ffdb70] transition-colors ${
            isActive ? "text-[#ffdb70]" : ""
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/resume"}
        className={({ isActive }) =>
          `cursor-pointer hover:text-[#ffdb70] transition-colors ${
            isActive ? "text-[#ffdb70]" : ""
          }`
        }
      >
        Resume
      </NavLink>
      <NavLink
        to={"/portfolio"}
        className={({ isActive }) =>
          `cursor-pointer hover:text-[#ffdb70] transition-colors ${
            isActive ? "text-[#ffdb70]" : ""
          }`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          `cursor-pointer hover:text-[#ffdb70] transition-colors ${
            isActive ? "text-[#ffdb70]" : ""
          }`
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `cursor-pointer hover:text-[#ffdb70] transition-colors ${
            isActive ? "text-[#ffdb70]" : ""
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
