import { ElementType } from "react";

const Contact = ({
  icon: Icon, 
  type,
  detail,
}: {
  icon: ElementType; 
  type: string;
  detail: string;
}) => {
  return (
    <div className="flex gap-5 items-center">
      {/* icon */}
      <div>
        <Icon color={"#ffdb70"} /> 
      </div>
      <div>
        {/* contact type */}
        <div className="text-[#d6d6d6b3]">{type}</div>
        <div className="text-[#fafafa]">{detail}</div>
      </div>
    </div>
  );
};

export default Contact;
