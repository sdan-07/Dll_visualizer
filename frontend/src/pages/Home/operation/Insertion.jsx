import axios from "axios";
import { useEffect } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Insertion = ({ insertionArr, fetchNodesData, inputValue }) => {
  const handleNodeOperation = async (insertFunc, position) => {
    try {
      insertFunc();
      await axios
        .post(`${backendUrl}/api/activity/add`, {
          action: `Inserted node ${inputValue} at ${position}`,
          details: `New node added at the ${position} of the list`,
        })
        .then(() => {
          fetchNodesData();
          console.log("insert opr- success");
        });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNodesData();
  }, []);

  return (
    <div>
      <p className="text-gray-600 mb-2 text-center">Insert Operations</p>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        {insertionArr.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={`${item.bgcolor} ${item.hoverColor} px-7 py-2 md:py-2.5 flex justify-center items-center rounded-xl text-white gap-4 cursor-pointer`}
              onClick={() => handleNodeOperation(item.insertFunc, item.position)}
            >
              <Icon color="white" size={22} />
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Insertion;
