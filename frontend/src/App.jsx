import React, { useState } from "react";
import axios from "axios";
import { Clock, Trash2 } from "lucide-react";
import { Route, Routes, useLocation } from "react-router-dom";
import Activity from "./pages/Activity-log/Activity";
import Visualizer from "./pages/Home/Visualizer";
import Guide from "./pages/Guide/Guide";
import Navbar from "./pages/navbar/Navbar";

const App = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const [nodesData, setNodesData] = useState([]);

  const fetchNodesData = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/activity/fetch`);
      console.log(res.data.activities);
      
      const formattedData = res.data.activities.map((node) => ({
        id: node.id,
        action: node.action,
        icon: Clock,
        timestampDate: node.timestamp[0],
        timestampTime: node.timestamp[1],
        detail: node.details,
      }));
      setNodesData(formattedData);
    } catch (err) {
      console.error("Failed to fetch nodes data: ", err);
    }
  };

  const clearAllData = async () => {
    try {
      await axios.delete(`${backendUrl}/api/activity/clear`);

      localStorage.removeItem("dllVisualizerNodes");
      setNodesData([]);

      console.log("All data cleared");
    } catch (err) {
      console.error("Failed to clear data:", err);
    }
  };
  
  return (
    <div className="h-screen scale-80 origin-top-left w-[125%]">
      <Navbar clearAllData={clearAllData} />

      <div className={`${location.pathname === "/activity" ? 'h-screen' : 'h-auto'} px-4 sm:px-32 py-4 sm:py-9 bg-slate-200`}>
        <Routes>
          <Route path="/" element={<Visualizer 
            activityData={nodesData} 
            setActivityData={setNodesData}
            fetchNodesData={fetchNodesData}
            clearAllData={clearAllData}
            />} />
          <Route path="/activity" element={<Activity 
            activityData={nodesData} 
            setActivityData={setNodesData}
            fetchNodesData={fetchNodesData}
            clearAllData={clearAllData}
            />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
