import myAvatar from "./assets/images/me-rep.png";
import {
  MailUnreadOutline,
  PhonePortraitOutline,
  LocationOutline,
  LogoLinkedin,
  FileTrayFullOutline,
} from "react-ionicons";
import Contact from "./Contact";

const SideInfo = () => {
  return (
    <div className="w-full lg:w-[300px] bg-[#1e1e1f] text-white rounded-2xl max-h-[100vh] h-auto lg:h-full flex flex-col items-center pt-16 border-[#383838] border-2 pb-10 mb-10 lg:mb-0">
      <div className="flex items-center flex-col mb-5">
        {/* image */}
        <div className="bg-[#383838] rounded-3xl w-24 h-24 md:w-36 md:h-36 flex items-center mb-4 md:mb-5">
          <img src={myAvatar} className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Farouk Kazeem</div>

        <div className="bg-[#2b2b2c] rounded-lg w-auto px-3 py-1 md:px-4 font-extralight text-sm md:text-base">
          Full Stack Developer
        </div>
      </div>

      <hr className="border-[#383838] w-10/12 mb-4 md:mb-5" />
      
      {/* Contacts */}
      <div className="flex flex-col gap-6 md:gap-8 text-sm md:text-base">
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
      <div className="flex gap-3 items-center justify-center mt-10 md:mt-12">
        <LogoLinkedin color={"#ffdb70"} width="24px" height="24px" />
        <FileTrayFullOutline color={"#ffdb70"} width="24px" height="24px" />
      </div>
    </div>
  );
};

export default SideInfo;
