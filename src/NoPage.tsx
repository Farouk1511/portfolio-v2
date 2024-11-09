import NavBar from "./NavBar";

const NoPage = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-full flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-10">
        <div className="text-3xl font-bold">No Page Found</div>

        <NavBar />
      </div>

      <div className="px-10">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />
      </div>
    </main>
  );
};

export default NoPage;
