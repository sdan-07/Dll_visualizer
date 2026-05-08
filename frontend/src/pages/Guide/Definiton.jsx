import React from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

const Definiton = () => {
  const dllPoints = [
    {
      title: "Data",
      desc: "The value stored in the node",
    },
    {
      title: "Next Pointer",
      desc: "A reference to the next node in the sequence",
    },
    {
      title: "Previous Pointer",
      desc: "A reference to the previous node in the sequence",
    },
  ];
  return (
    <div className="w-full px-8 md:px-16 py-5 md:py-8 bg-white rounded-lg overflow-hidden border-slate-200 shadow-lg">
      {/* heading */}
      <div className="flex gap-3">
        <ArrowRight size={30} color="blue" className="hidden md:block mt-1" />
        <ArrowRight size={23} color="blue" className="block md:hidden mt-3" />
        <h1 className="text-xl! md:text-[28px]! text-indigo-500 font-semibold!">
          What is a Doubly Linked List?
        </h1>
      </div>
      {/* paragraph */}
      <div className="mt-5 md:mt-7 text-sm md:text-[18px] md:mr-26 leading-5.75 md:leading-8">
        <p className="tracking-wide mb-6 md:mb-7">
          A <span className="font-bold">Doubly Linked List</span> is a data
          structure consisting of a sequence of nodes. Each node contains three
          main components:
        </p>

        {dllPoints.map((point) => (
          <div className="ml-8 md:ml-13 flex gap-3 mb-3">
            <CircleCheck size={19} color="green" className="block md:hidden" />
            <CircleCheck size={24} color="green" className="hidden md:block mt-1" />
            <p>
              <span className="font-bold">{point.title}: </span> {point.desc}
            </p>
          </div>
        ))}

        <p className="tracking-wide mt-5 md:mt-7 mb-6 md:mb-7 leading-5.75 md:leading-8">
          Unlike a singly linked list, a doubly linked list allows traversal in
          both forward and backward directions, making certain operations more
          efficient.
        </p>
      </div>
    </div>
  );
};

export default Definiton;
