import React from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

const Advantages = () => {
  const rules = [
    {
      title: "Advantages",
      headcolor: "bg-purple-500",
      subpoints: [
        { text: "Bidirectional traversal", color: "purple" },
        { text: "O(1) deletion with node pointer", color: "purple" },
        { text: "No need to traverse to insert before a node", color: "purple" },
        { text: "Ideal for deques & browser history", color: "purple" },

      ],
    },
    {
      title: "Disadvantages",
      headcolor: "bg-green-500",
      subpoints: [
        { text: "Extra prev pointer memory per node", color: "green" },
        { text: "More pointer updates on insert/delete", color: "green" },
        { text: "Complex vs singly linked list", color: "green" },
        { text: "Prone to null/dangling pointer bugs", color: "green" },
      ]
    }
  ];

  return (
    <div className="w-full px-8 md:px-16 py-5 md:py-8 mt-6 md:mt-15 bg-white rounded-lg overflow-hidden border-slate-200 shadow-lg">
      {/* heading */}
      <div className="flex gap-3">
        <ArrowRight size={30} color="blue" className="hidden md:block mt-1" />
        <ArrowRight size={23} color="blue" className="block md:hidden " />
        <h1 className="text-xl! md:text-[28px]! text-indigo-500 font-semibold!">
          Advantages and Disadvantages
        </h1>
      </div>

      {/* para body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7 md:mt-10 text-sm md:text-[18px]">
        {/* boxes */}
        {rules.map((rule) => (
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all scale-95">
            <div className={`${rule.headcolor} p-1`}>
              <h1 className=" text-xl! px-3 py-4 font-semibold text-white">
                {rule.title}
              </h1>
            </div>
            {/* points body */}
            <div className="p-6">
              {rule.subpoints.map((point) => (
                <div className="flex gap-3 mb-3">
                  <CircleCheck color={point.color} />
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
