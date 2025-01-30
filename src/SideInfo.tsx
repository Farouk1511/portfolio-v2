import myAvatar from "./assets/images/me-rep.png";
import {
  MailUnreadOutline,
  LocationOutline,
  LogoLinkedin,
  FileTrayFullOutline,
} from "react-ionicons";
import Contact from "./Contact";

const SideInfo = () => {
  return (
    <div className="w-full bg-[#1e1e1f] text-white rounded-2xl flex p-4 lg:flex lg:flex-col lg:items-center lg:h-[75vh] lg:w-[320px] overflow-hidden max-w-[900px] ">
      <div className="flex items-center flex-row w-full  lg:mb-5 lg:flex-col">
        {/* image */}
        <div className="flex items-center bg-[#383838] rounded-3xl w-24 h-24 mr-5 md:w-36 md:h-36 ">
          <img
            src={myAvatar}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
            Farouk Kazeem
          </div>

          <div className="bg-[#2b2b2c] rounded-lg w-auto px-3 py-1 md:px-4 font-extralight text-sm md:text-base">
            Full Stack Developer
          </div>
        </div>
      </div>

      <hr className="border-[#383838] w-10/12 mb-4 md:mb-5 hidden lg:block" />

      {/* Contacts */}
      <div className="hidden lg:flex flex-col gap-6 md:gap-8 text-sm md:text-base">
        <Contact
          type="Email"
          detail="kazeem.faroukk@gmail.com"
          icon={MailUnreadOutline}
        />
        {/* <Contact
          type="Phone"
          detail="+1 6479783403"
          icon={PhonePortraitOutline}
        /> */}
        <Contact
          type="Location"
          detail="Ontario, Canada"
          icon={LocationOutline}
        />
      </div>

      {/* Other socials - Linkedin and resume */}
      <div className="hidden lg:flex gap-3 items-center justify-center mt-10 md:mt-12">
        <LogoLinkedin color={"#ffdb70"} width="24px" height="24px" />
        <FileTrayFullOutline color={"#ffdb70"} width="24px" height="24px" />
      </div>
    </div>
  );
};

export default SideInfo;
