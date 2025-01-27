import NavBar from "./NavBar";
import project1 from "./assets/images/project-magement-app-desktop-preview.png";
import project2 from "./assets/images/glass-tree-desktop-preview.png";
import project3 from "./assets/images/fylo-dark-desktop-preview.jpg";
import project4 from "./assets/images/social-media-desktop-preview.jpg";
import project5 from "./assets/images/huddle-desktop-preview.jpg";
import project6 from "./assets/images/job-listing-desktop-preview.jpg";
import project7 from "./assets/images/insure-desktop-preview.jpg";
import project8 from "./assets/images/clipboard-desktop-preview.jpg";
import project9 from "./assets/images/ping-desktop-preview.jpg";

const Portfolio = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-8">
        <div className="text-3xl font-bold">Portfolio</div>

        <NavBar />
      </div>

      <div className="px-8">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />

        <div className="flex gap-3 text-[#d6d6d6] mt-5">
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
        {/* Porfolio filler */}
        {/* To-do: Create an object with all the info so we can easily update the content without touching the code */}
        <div className="flex flex-wrap gap-5 my-5">
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
            <a href="https://glass-tree.vercel.app/" target="_blank" rel="noreferrer">
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
            <a href="https://fylo-dark-theme-landing-page.vercel.app/" target="_blank" rel="noreferrer">
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
            <a href="https://farouk1511.github.io/social-media-dashboard-with-theme-switcher/" target="_blank" rel="noreferrer">
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
            <a href="https://farouk1511.github.io/huddle-landing-page-with-curved-sections/" target="_blank" rel="noreferrer">
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
            <a href="https://farouk1511.github.io/static-job-lisiting/" target="_blank" rel="noreferrer">
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
            <a href="https://farouk1511.github.io/insure-landing-page/" target="_blank" rel="noreferrer">
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
            <a href="https://farouk1511.github.io/clipboard-landing-page/" target="_blank" rel="noreferrer">
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
            <a href="https://ping-coming-sonn-page.vercel.app/" target="_blank" rel="noreferrer">
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
      </div>
    </main>
  );
};

export default Portfolio;
