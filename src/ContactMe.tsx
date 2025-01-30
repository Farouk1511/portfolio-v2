import InfoContainer from "./InfoContainer";

const ContactMe = () => {
  return (
    <InfoContainer name="Contact Me">
      <div className="flex gap-3 flex-col mt-5 text-[#d6d6d6] ">
        <div>
          <h1>Contact Form</h1>
          <p>Feel free to contact me for any queries or suggestions.</p>

          <form
            action="https://formspree.io/f/maylqzqk"
            method="POST"
            className="flex flex-col gap-3 w-full jussify-between items-center mt-5"
          >
            <div className="flex flex-row gap-3 justify-between w-full">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="w-[45%] h-[40px] bg-transparent border-[#383838] border-2 text-white rounded-xl p-3"
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-[45%] h-[40px] bg-transparent border-[#383838] border-2 text-white rounded-xl p-3"
              />
            </div>
            <div className="w-full">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message"
                className="w-full  bg-transparent border-[#383838] border-2 text-white rounded-xl p-3"
              />
            </div>

            <button
              type="submit"
              className="rounded-2xl text-[#ffdb70] w-48 p-4 border-[#383838] bg-[#2b2b2cbf] "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </InfoContainer>
  );
};

export default ContactMe;
