import {
  MoveLeft,
  MoveRight,
  Trash2,
  RefreshCcw,
  CirclePlay,
  ArrowDown01,
} from "lucide-react";
import Insertion from "./Insertion";
import Deletion from "./Deletion";
import OtherMethods from "./OtherMethods";

const Operations = ({
  ListFunc,
  head,
  activityData,
  setActivityData,
  inputValue,
  fetchNodesData
}) => {
  //operation objects
  const insertOperations = [
    {
      name: "Insert Front",
      icon: MoveLeft,
      bgcolor: "bg-sky-500",
      hoverColor: "hover:bg-sky-600",
      insertFunc: ListFunc.insertAtFront,
      position: "front",
    },
    {
      name: "Insert Last",
      icon: MoveRight,
      bgcolor: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      insertFunc: ListFunc.insertAtLast,
      position: "end",
    },
  ];

  const deleteOperations = [
    {
      name: "Delete Front",
      icon: Trash2,
      bgcolor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      deleteFunc: ListFunc.deleteAtFront,
      position: "front",
    },
    {
      name: "Delete Last",
      icon: Trash2,
      bgcolor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      deleteFunc: ListFunc.deleteAtLast,
      position: "end",
    },
  ];

  const otherOperations = [
    {
      name: "Reverse List",
      icon: RefreshCcw,
      bgcolor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      otherOp: ListFunc.reverseList,
      headCond: !head || !head.next,
      actionMessage: "List reversed",
      detailsMessage: "List has been reversed"
    },
    {
      name: "Traverse",
      icon: CirclePlay,
      bgcolor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      otherOp: ListFunc.traverse,
      headCond: !head,
      actionMessage: "List traversed",
      detailsMessage: "List has been traversed"
    },
    {
      name: "Sort List",
      icon: ArrowDown01,
      bgcolor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      otherOp: ListFunc.selectionSort,
      headCond: !head || !head.next,
      actionMessage: "List sorted",
      detailsMessage: "List has been sorted"
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center md:flex-row md:justify-around">
        <Insertion
          insertionArr={insertOperations}
          activityData={activityData}
          setActivityData={setActivityData}
          inputValue={inputValue}
          fetchNodesData={fetchNodesData}
        />
        <Deletion
          deletionArr={deleteOperations}
          activityData={activityData}
          setActivityData={setActivityData}
          fetchNodesData={fetchNodesData}
          head={head}
        />
      </div>

      <div className="flex flex-col justify-center md:flex-row mt-4 sm:mt-6">
        <OtherMethods 
          otherOpArr={otherOperations}
          fetchNodesData={fetchNodesData}
        />
      </div>
    </>
  );
};

export default Operations;
