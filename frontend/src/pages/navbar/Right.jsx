import React from "react";
import { Logs, History, BookOpen } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const navigation = [
  { name: "Visualizer", path: "/", icon: Logs },
  { name: "Activity Log", path: "/activity", icon: History },
  { name: "Guide", path: "/guide", icon: BookOpen }
];

const Right = () => {
  const location = useLocation();
  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div className="flex gap-3 sm:gap-7 sm:scale-90">
      {navigation.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.path}
          >
          <div className={classNames(
            isActive 
              ? "bg-indigo-500"
              : "bg-white",
              "right flex gap-3 px-3 sm:px-5 py-2 rounded-xl"
          )}
          >
            <Icon className={`${isActive ? 'text-white' : 'text-black'} sm:hidden mt-1`} size={19}  />
            <Icon className={`${isActive ? 'text-white' : 'text-black'} hidden sm:block mt-1`} size={23}  />
             <p className={`${isActive ? 'text-white' : 'text-black'} hidden md:block text-xl sm:text-xl`}>
              {item.name}
            </p>
            
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Right;
