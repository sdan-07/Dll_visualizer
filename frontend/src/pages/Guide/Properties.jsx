import React from "react";
import { ArrowRight } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      title: "Head",
      desc: "The first node in the list (its prev pointer is null)",
      bgColor: "bg-gray-200",
    },
    {
      title: "Tail",
      desc: "The last node in the list (its next pointer is null)",
      bgColor: "bg-red-100",
    },
    {
      title: "Bidirectional Traversal",
      desc: "You can move forward (using next) or backward (using prev)",
      bgColor: "bg-green-100",
    },
  ];
  return (
    <div className="w-full px-8 md:px-16 py-5 md:py-8 mt-6 md:mt-15 bg-white rounded-lg overflow-hidden border-slate-200 shadow-lg">
      {/* heading */}
      <div className="flex gap-3">
        <ArrowRight size={30} color="blue" className="hidden md:block mt-1" />
        <ArrowRight size={23} color="blue" className="block md:hidden " />
        <h1 className="text-xl! md:text-[28px]! text-indigo-500 font-semibold!">
          Key Properties
        </h1>
      </div>
      {/* paragraph */}
      <div className="mt-5 md:mt-7 text-sm md:text-[18px] leading-5.75 md:leading-8">
        {properties.map((item) => (
          <div className={`${item.bgColor} p-2.5 md:p-5 w-full mb-3`}>
            <p>
              <span className="font-bold">{item.title}: </span> {item.desc}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
