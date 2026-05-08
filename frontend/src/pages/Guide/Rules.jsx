import React from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

const Rules = () => {
  const rules = [
    {
      title: "Insert at Front",
      subtitle: "Add node to the beginning",
      headcolor: "bg-blue-500",
      subpoints: [
        { text: "Create new node with prev = null", color: "blue" },
        { text: "Set new node's next = current head", color: "blue" },
        { text: "Update old head's prev to new node", color: "blue" },
        { text: "Update head pointer to new node", color: "blue" },
      ],
    },
    {
      title: "Insert at Last",
      subtitle: "Add node to the end",
      headcolor: "bg-indigo-500",
      subpoints: [
        { text: "Traverse to the last node", color: "indigo" },
        { text: "Create new node with next = null", color: "indigo" },
        { text: "Set new node's prev = last node", color: "indigo" },
        { text: "Update last node's next to new node", color: "indigo" },
      ],
    },
    {
      title: "Delete from Front",
      subtitle: "Remove from node",
      headcolor: "bg-red-500",
      subpoints: [
        { text: "Move head to the next node", color: "red" },
        { text: "If new head exists, set prev = null", color: "red" },
        { text: "Free the old head node", color: "red" },
      ],
    },
    {
      title: "Delete from Last",
      subtitle: "Remove last node",
      headcolor: "bg-red-600",
      subpoints: [
        { text: "Traverse to the last node", color: "red" },
        { text: "Set second-to-last node's next = null", color: "red" },
        { text: "Free the last node", color: "red" },
      ],
    },
    {
      title: "Reverse List",
      subtitle: "Reverse node order",
      headcolor: "bg-purple-500",
      subpoints: [
        { text: "Traverse through all nodes", color: "purple" },
        { text: "Swap next and prev pointers for each", color: "purple" },
        { text: "Update head to point to old tail", color: "purple" },
      ],
    },
    {
      title: "Traverse",
      subtitle: "Visit all nodes sequentially",
      headcolor: "bg-green-500",
      subpoints: [
        { text: "Start at the head node", color: "green" },
        { text: "Visit/process the current node", color: "green" },
        { text: "Move to next using next pointer", color: "green" },
        { text: "Repeat until next is null", color: "green" },
      ],
    },
    {
      title: "Sort List",
      subtitle: "Sort all the nodes in increasing order",
      headcolor: "bg-amber-500",
      subpoints: [
        { text: "Compare adjacent node values", color: "orange" },
        { text: "Swap data if out of order", color: "orange" },
        { text: "Repeat passes until no swaps occur", color: "orange" },
        { text: "Use both next and prev pointers to traverse", color: "orange" },
      ],
    },
  ];

  return (
    <div className="w-full px-8 md:px-16 py-5 md:py-8 mt-6 md:mt-15 bg-white rounded-lg overflow-hidden border-slate-200 shadow-lg">
      {/* heading */}
      <div className="flex gap-3">
        <ArrowRight size={30} color="blue" className="hidden md:block mt-1" />
        <ArrowRight size={23} color="blue" className="block md:hidden " />
        <h1 className="text-xl! md:text-[28px]! text-indigo-500 font-semibold!">
          Rules and Operations
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
            <div className="p-5">
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

export default Rules;
