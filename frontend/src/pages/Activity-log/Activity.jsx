import React, { useEffect } from "react";
import { Clock, Trash2 } from "lucide-react";

const Activity = ({ activityData, fetchNodesData, clearAllData }) => {
  const handleClearAll = () => {
    if (clearAllData) {
      clearAllData();
    }
  };

  useEffect(()=>{
    fetchNodesData();
  },[])
  
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="heading text-[30px]! sm:text-[42px]! font-semibold! mb-2 text-gray-800">
          Activity Log
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-8 sm:mb-11">
          History of recent actions performed on the linked list
        </p>

        <div className={`${activityData.length === 0 ? 'hidden' : 'flex'} w-full justify-end mb-4 scale-75 md:scale-100 origin-top-right md:text-2xl md:mr-22`}>
            <button
              onClick={handleClearAll}
              className="mb-6 mt-2 px-4 md:px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2"
            >
              <Trash2 size={18} className="block md:hidden" />
              <Trash2 size={22} className="hidden md:block" />
              Clear All
            </button>
        </div>

        <div className="w-full bg-white rounded-lg overflow-hidden border-slate-200 shadow-lg md:scale-95">
          {/* desktop table view */}
          <table className="hidden md:table w-full">
            {activityData.length === 0 ? (
              <tbody>
                <tr>
                  <td className="bg-slate-300/20">
                    <div className="p-40 text-gray-400 text-center">
                      <p className="text-2xl tracking-wide">No activity yet</p>
                      <p className="text-xl mt-4 tracking-tight">Try some operations</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <>
                <thead className="text-left">
                  <tr>
                    <th className="theaders">#</th>
                    <th className="theaders">Action</th>
                    <th className="theaders">Timestamp</th>
                    <th className="theaders">Details</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  {activityData.map((log) => (
                    <tr key={log.id}>
                      <td>{log.id}</td>
                      <td>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-base bg-indigo-100 text-indigo-700">
                          {log.action}
                        </span>
                      </td>
                      <td className="flex gap-4">
                        <Clock className="text-gray-500 mt-1" size={20} />
                        <span className="text-gray-500">
                          {log.timestampDate} {log.timestampTime}
                        </span>
                      </td>
                      <td className="text-gray-600">{log.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>

          {/* mobile table view */}
          <div className="grid grid-cols-[9fr_1fr] gap-4 md:hidden w-full p-4 bg-white-100">
            {activityData.length === 0 ? (
              <div className="col-span-2 text-gray-400 p-5 text-center">
                <p className="text-base tracking-wide">No activity yet</p>
                <p className="text-sm mt-0.5 tracking-tight">Try some operations</p>
              </div>
            ) : (
              activityData.map((log) => (
                <React.Fragment key={log.id}>
                  <div className="left-part flex flex-col gap-2.5 text-sm mb-3">
                    <div className="flex items-start">
                      <div className="inline-flex items-center px-4 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                        {log.action}
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <Clock className="text-gray-500 mt-1" size={13} />
                      <span className="text-gray-500">
                        {log.timestampDate} {log.timestampTime}
                      </span>
                    </div>
                    <div className="text-gray-600">{log.detail}</div>
                  </div>
                  <div className="right-part text-gray-600 text-sm mb-2">
                    #{log.id}
                  </div>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
