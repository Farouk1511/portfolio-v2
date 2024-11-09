import NavBar from "./NavBar";
import project1 from "./assets/images/project-1.jpg"
import project2 from "./assets/images/project-2.png"
import project3 from "./assets/images/project-3.jpg"
import project4 from "./assets/images/project-4.png"
import project5 from "./assets/images/project-5.png"
import project6 from "./assets/images/project-6.png"
import project7 from "./assets/images/project-7.png"
import project8 from "./assets/images/project-8.jpg"
import project9 from "./assets/images/project-9.png"

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
        {/* Porfolio container */}
        <div className="flex flex-wrap gap-5 my-5">
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project1}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project2}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project3}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project4}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project5}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project6}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
                <img className="rounded-2xl" src={project7}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
            <img className="rounded-2xl" src={project8}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>
          {/* porfoilio box */}
          <div>
            <div className="h-48 w-64 rounded-2xl bg-slate-500">
            <img className="rounded-2xl" src={project9}/>
            </div>
            <div className="flex flex-col mt-3 px-2">
              <h1 className="font-bold">Finance</h1>
              <p className="text-[#d6d6d6]">Web development</p>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
