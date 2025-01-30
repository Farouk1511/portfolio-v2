import "./App.css";
import { BookOutline, DocumentTextOutline } from "react-ionicons";
import InfoContainer from "./InfoContainer";
const Resume = () => {
  return (
    <InfoContainer name="Resume">
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
              <h3 className="text-lg font-bold mb-1.5">University of Ottawa</h3>
              <span className="text-[#ffdb70] font-light text-sm">
                2018-2022
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                Bachelor of Science in Computer Science
              </p>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                Awards and scholarships: Cum Laude, Dean’s Honors list
              </p>
            </li>
            {/* <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Education</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li> */}
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
                Feb 2023 - June 2023
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                Backend developer
              </p>
            </li>
            <li className="timeline-item relative mb-5 last:mb-0 ml-6">
              <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
              <span className="text-[#ffdb70] font-light text-sm">
                June 2023 - Present
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                Full Stack React developer
              </p>
            </li>
            {/* <li className="timeline-item relative mb-5 last:mb-0 ml-6">
                <h3 className="text-lg font-bold mb-1.5">Versaterm</h3>
                <span className="text-[#ffdb70] font-light text-sm">
                  2021-2024
                </span>
                <p className="timeline-text text-light-gray font-light leading-[1.6]">
                  Info about whatever we writing here
                </p>
              </li> */}
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
              <h3 className="text-lg font-bold mb-1.5">
                Glasstree Marketplace
              </h3>
              <span className="text-[#ffdb70] font-light text-sm">
                July 2022 - Present
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                Developed a fullstack service marketplace application using
                Next.js, Node.js, and MongoDB
              </p>
            </li>
            <li className="timeline-item relative mb-5 last:mb-0 ml-6">
              <h3 className="text-lg font-bold mb-1.5">
                Project Management Tool
              </h3>
              <span className="text-[#ffdb70] font-light text-sm">
                June 2024 - Present
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                About A simple project management tool using nextjs, typescript,
                apollo client, monogodb and ant design
              </p>
            </li>
            <li className="timeline-item relative mb-5 last:mb-0 ml-6">
              <h3 className="text-lg font-bold mb-1.5">
                Solana Contract Address Forwarder
              </h3>
              <span className="text-[#ffdb70] font-light text-sm">
                July 6 - Sept 2024
              </span>
              <p className="timeline-text text-light-gray font-light leading-[1.6]">
                A telegram bot that listens to group chat for contract address
                and forwards it into a telegeram bot that auto buys the token.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </InfoContainer>
  );
};

export default Resume;
