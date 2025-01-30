import NavBar from "./NavBar";

import { ReactNode } from "react";

const InfoContainer = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <main className="pt-5 md:pt-0 w-full bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2 max-w-[900px] lg:min-w-[900px] min-h-[850px] overflow-hidden">
      <div className="flex justify-between w-full items-end pl-10">
      <div className="text-3xl font-bold sm:hidden md:block">{name}</div>

        <NavBar />
      </div>

      <div className="px-10">
      <div className="hidden text-3xl font-bold sm:block md:hidden sm:mt-3">{name}</div>
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />
        {children}
      </div>
    </main>
  );
};

export default InfoContainer;
