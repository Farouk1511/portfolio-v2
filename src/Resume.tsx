import NavBar from "./NavBar";
import "./App.css";
import { BookOutline,DocumentTextOutline } from "react-ionicons";
const Resume = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-10">
        <div className="text-3xl font-bold">Resume</div>

        <NavBar />
      </div>
      <div className="px-10">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />

        <div className="flex gap-3 flex-col mt-5 text-[#d6d6d6]">
          <div className="timeline mb-8">
            
            <div className="flex items-center gap-5 mb-5">
              <div className="title-wrapper flex items-center justify-center w-12 h-12 rounded-xl bg-[#383838]">
                <BookOutline color={"#ffdb70"} />
              </div>
              <div className="text-xl font-bold">Education</div>
            </div>
            <ul className="timeline-list text-base ml-11">
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Education</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Education</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
            </ul>
          </div>
          {/* experience */}
          <div className="timeline mb-8">
            
            <div className="flex items-center gap-5 mb-5">
              <div className="title-wrapper flex items-center justify-center w-12 h-12 rounded-xl bg-[#383838]">
                <DocumentTextOutline color={"#ffdb70"} />
              </div>
              <div className="text-xl font-bold">Experience</div>
            </div>
            <ul className="timeline-list text-base ml-11">
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
            </ul>
          </div>

          <div className="timeline mb-8">
            
            <div className="flex items-center gap-5 mb-5">
              <div className="title-wrapper flex items-center justify-center w-12 h-12 rounded-xl bg-[#383838]">
                <DocumentTextOutline color={"#ffdb70"} />
              </div>
              <div className="text-xl font-bold">Projects</div>
            </div>
            <ul className="timeline-list text-base ml-11">
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
              <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
