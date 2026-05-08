import axios from "axios";
import { useEffect } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Deletion = ({ deletionArr, fetchNodesData, head }) => {
  
  const handleNodeOperation = async (deleteFunc, position) => {
    try {
      const deletedValue = head?.val;

      deleteFunc();

      await axios
        .post(`${backendUrl}/api/activity/add`, {
          action: `Deleted node ${deletedValue} at ${position}`,
          details: `Node deleted at the ${position} of the list`,
        })
        .then(() => {
          fetchNodesData();
          console.log("delete opr- success");
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
      <p className="text-gray-600 mb-2 mt-5 sm:mt-0 text-center">
        Delete Operations
      </p>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        {deletionArr.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className={`${item.bgcolor} ${item.hoverColor} px-7 py-2 md:py-2.5 flex justify-center items-center rounded-xl text-white gap-4 cursor-pointer`}
              onClick={() => handleNodeOperation(item.deleteFunc, item.position)}
            >
              <Icon color="white" size={20} />
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Deletion;
