import webDevIcon from "./assets/images/icon-dev.svg";
import mobileDevIcon from "./assets/images/icon-app.svg";
import NavBar from "./NavBar";

const MainInfo = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-10">
        <div className="text-3xl font-bold">About me</div>

        <NavBar />
      </div>

      <div className="px-10">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />

        <div className="flex gap-3 flex-col mt-5 text-[#d6d6d6]">
          <div>
            I'm a full-stack developer based in Ottawa, Canada, with a passion
            for creating dynamic, efficient, and user-friendly web applications.
            Skilled in both front-end and back-end technologies, I build
            complete solutions that are visually appealing, intuitive, and
            highly functional.
          </div>
          <div>
            My expertise includes working with modern JavaScript frameworks for
            the front end, like React and Next.js, alongside powerful back-end
            technologies like Node.js, Express, and MongoDB. This full-stack
            skill set allows me to develop and deploy applications from scratch,
            manage complex data flows, and optimize performance across all
            layers of the stack.
          </div>
          <div>
            I enjoy solving complex problems and transforming ideas into digital
            experiences that provide real value to users. With a focus on clean
            code, scalability, and responsiveness, I’m committed to delivering
            high-quality applications that exceed expectations. Staying
            up-to-date with the latest industry trends and best practices, I
            continuously refine my skills to build efficient, maintainable, and
            forward-thinking solutions.
          </div>
        </div>
        {/* What i am doing */}
        <section className="my-5">
          <div className="text-xl md:text-2xl font-bold mb-5">What I'm doing</div>

          <div className="w-full flex flex-col md:flex-row gap-3 flex-wrap items-center">
            {/* Web Development */}
            <div className="bg-[#2b2b2cbf] w-full md:w-[22rem] h-auto rounded-2xl p-5 flex items-center gap-5">
              <img src={webDevIcon} alt="web development icon" className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg md:text-xl">Front-End Development</div>
                <div className="font-light text-xs md:text-sm mt-1">
                  Skilled in building responsive, user-friendly interfaces with React and Next.js.
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-[#2b2b2cbf] w-full md:w-[22rem] h-auto rounded-2xl p-5 flex items-center gap-5">
              <img src={mobileDevIcon} alt="mobile development icon" className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg md:text-xl">Back-End Development</div>
                <div className="font-light text-xs md:text-sm mt-1">
                  Proficient in creating secure, scalable back-end systems with Node.js and Express.
                </div>
              </div>
            </div>

            {/* Full-Stack Architecture */}
            <div className="bg-[#2b2b2cbf] w-full md:w-[22rem] h-auto rounded-2xl p-5 flex items-center gap-5">
              <img src={mobileDevIcon} alt="full-stack development icon" className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg md:text-xl">Full-Stack Application Architecture</div>
                <div className="font-light text-xs md:text-sm mt-1">
                  Experienced in designing applications with seamless integration across front-end and back-end.
                </div>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="bg-[#2b2b2cbf] w-full md:w-[22rem] h-auto rounded-2xl p-5 flex items-center gap-5">
              <img src={mobileDevIcon} alt="continuous learning icon" className="w-12 h-12" />
              <div>
                <div className="font-bold text-lg md:text-xl">Continuous Learning & Adaptation</div>
                <div className="font-light text-xs md:text-sm mt-1">
                  Dedicated to staying current with new technologies and best practices in full-stack development.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainInfo;
