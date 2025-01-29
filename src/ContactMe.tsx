import NavBar from "./NavBar";

const ContactMe = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-8">
        <div className="text-3xl font-bold">Contact Me</div>

        <NavBar />
      </div>

      <div className="px-10">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />

        <div className="flex gap-3 flex-col mt-5 text-[#d6d6d6] min-h-[75vh]">
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
      </div>
    </main>
  );
};

export default ContactMe;
