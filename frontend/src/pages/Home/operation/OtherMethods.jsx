import axios from "axios";
import { useEffect } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const OtherMethods = ({otherOpArr, fetchNodesData}) => {

    const handleNodeOperation = async (otherOp, item) => {
      try {
        otherOp();
        await axios
          .post(`${backendUrl}/api/activity/add`, {
            action: item.actionMessage,
            details: item.detailsMessage,
          })
          .then(()=>{
            console.log("other operation success");
          })

      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(() => {
      fetchNodesData();
    }, []);

  return (
    <div className='mb-2 mt-5'>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        {otherOpArr.map((item)=>{
          const Icon = item.icon;
          return(
            <button 
            className={`${item.bgcolor} ${item.hoverColor} px-7 py-2 md:py-2.5 flex justify-center items-center rounded-xl text-white gap-4 cursor-pointer`}
            onClick={() => handleNodeOperation(item.otherOp, item)}
            disabled={item.headCond}
            >
              <Icon color='white' size={22}/>
              <p>{item.name}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OtherMethods