import project1 from "./assets/images/project-magement-app-desktop-preview.png";
import project2 from "./assets/images/glass-tree-desktop-preview.png";
import project3 from "./assets/images/fylo-dark-desktop-preview.jpg";
import project4 from "./assets/images/social-media-desktop-preview.jpg";
import project5 from "./assets/images/huddle-desktop-preview.jpg";
import project6 from "./assets/images/job-listing-desktop-preview.jpg";
import project7 from "./assets/images/insure-desktop-preview.jpg";
import project8 from "./assets/images/clipboard-desktop-preview.jpg";
import project9 from "./assets/images/ping-desktop-preview.jpg";
import InfoContainer from "./InfoContainer";
import { useState } from "react";

const Portfolio = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [dropdownName, setDropdownName] = useState("All");

  const handleDropdown = (name?: string) => {
    setToggleDropdown(!toggleDropdown);

    if (name) {
      setDropdownName(name);
    }
  };

  return (
    <InfoContainer name="Portfolio">
      <div className="hidden md:flex gap-3 text-[#d6d6d6] mt-5">
        <div className="cursor-pointer hover:text-[#ffdb70] transition-colors">
          All
        </div>
        <div className="cursor-pointer hover:text-[#ffdb70] transition-colors">
          Web Development
        </div>
        <div className="cursor-pointer hover:text-[#ffdb70] transition-colors">
          Mobile Development
        </div>
        <div className="cursor-pointer hover:text-[#ffdb70] transition-colors">
          Applications
        </div>
      </div>

      {/* source flowbite */}
      <div className="w-full md:hidden mt-5">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center border-2 border-[#383838] w-full"
          type="button"
          onClick={() => handleDropdown()}
        >
          <div>{dropdownName}</div>
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className={`${
            toggleDropdown ? "sticky" : "hidden"
          } w-full mt-3 z-40  divide-y divide-gray-100 rounded-lg shadow-sm border-2 border-[#383838]`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li onClick={() => handleDropdown("All")}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[] dark:hover:bg-gray-600 dark:hover:text-white"
              >
                All
              </a>
            </li>
            <li onClick={() => handleDropdown("Web Development")}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Web Development
              </a>
            </li>
            <li onClick={() => handleDropdown("Mobile Development")}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mobile Development
              </a>
            </li>
            <li onClick={() => handleDropdown("Applications")}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Applications
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Porfolio filler */}
      {/* To-do: Create an object with all the info so we can easily update the content without touching the code */}
      <div className="flex flex-wrap gap-5 my-5 items-center justify-center">
        {/* porfoilio box */}
        <div>
          <a
            href="https://project-management-tool-rust.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64  ">
              <img
                className=" object-fill h-full w-full"
                src={project1}
                alt="Project Management Tool"
              />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Project Management Tool</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://glass-tree.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project2} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">GlassTree Marketplace</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://fylo-dark-theme-landing-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project3} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Fylo</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://farouk1511.github.io/social-media-dashboard-with-theme-switcher/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project4} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Social Media Tracker</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://farouk1511.github.io/huddle-landing-page-with-curved-sections/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project5} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Huddle</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://farouk1511.github.io/static-job-lisiting/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project6} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Job Listing</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://farouk1511.github.io/insure-landing-page/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project7} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Insure</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://farouk1511.github.io/clipboard-landing-page/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project8} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Clipboard</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
        {/* porfoilio box */}
        <div>
          <a
            href="https://ping-coming-sonn-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-48 w-64 ">
              <img className=" object-fill h-full w-full" src={project9} />
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Ping</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </a>
        </div>
      </div>
    </InfoContainer>
  );
};

export default Portfolio;
