import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import DisplayNodes from "./DisplayNodes";
import Operations from "./operation/Operations";

const Visualizer = ({ activityData, setActivityData, fetchNodesData, clearAllData }) => {

  const [inputValue, setInputValue] = useState(``);
  const [head, setHead] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);

  const handleClearAll = () => {
    // Clear visualizer nodes
    setHead(null);
    localStorage.removeItem("dllVisualizerNodes");
    
    // Clear activity logs
    if (clearAllData) {
      clearAllData();
    }
  };

  //saving nodes data to localstorage
  const saveListToStorage = (nodes) => {
    try {
      localStorage.setItem(
        "dllVisualizerNodes",
        JSON.stringify(
          nodes.map((node) => ({ id: node.id, val: node.val }))
        )
      );
    } catch (err) {
      console.error("Saving list failed:", err);
    }
  };

  const restoreListFromStorage = () => {
    try {
      const stored = localStorage.getItem("dllVisualizerNodes");
      if (!stored) return null;
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed) || parsed.length === 0) return null;

      let restoredHead = null;
      let prevNode = null;

      parsed.forEach((item) => {
        const node = {
          id: item.id || Date.now(),
          val: item.val,
          next: null,
          prev: null,
        };

        if (!restoredHead) restoredHead = node;

        if (prevNode) {
          prevNode.next = node;
          node.prev = prevNode;
        }

        prevNode = node;
      });

      return restoredHead;
    } catch (err) {
      console.error("Restoring list failed:", err);
      return null;
    }
  };

  const getList = () => {
    try {
      const nodes = [];
      const visited = new Set();
      let ptr = head;
      while (ptr) {
        if (!ptr.id || visited.has(ptr.id)) break;
        nodes.push(ptr);
        visited.add(ptr.id);
        ptr = ptr.next;
      }
      return nodes;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const storedHead = restoreListFromStorage();
    if (storedHead) {
      setHead(storedHead);
    }
  }, []);

  useEffect(() => {
    saveListToStorage(getList());
  }, [head]);

  //Insert at last
  const insertAtLast = () => {
    const val = parseInt(inputValue);
    if (isNaN(val)) return;

    const newNode = {
      id: Date.now(),
      val,
      next: null,
      prev: null,
    };

    if (!head) setHead({...newNode});
    //more than one node exist
    else {
      let ptr = head;
      while (ptr.next) ptr = ptr.next;
      ptr.next = newNode;
      newNode.prev = ptr;
      setHead({...head})
    }
    setInputValue(``);
  };

  //insert at front
  const insertAtFront = () => {
    const val = parseInt(inputValue);
    if (isNaN(val)) return;

    const newNode = {
      id: Date.now(),
      val,
      next: null,
      prev: null,
    };

    if (!head) setHead(newNode);
    else {
      head.prev = newNode;
      newNode.next = head;
      setHead({...newNode});
    }
    setInputValue(``);
  };

  //delete at front
  const deleteAtFront = () => {
    if (!head) return;

    const next = head.next;
    if (next) 
      next.prev = null;
    setHead(next ? { ...next } : null); 
  };

  //delete at last
  const deleteAtLast = () => {
    if (!head) return;
    if (!head.next) {
      setHead(null);
      return;
    }
    let ptr = head;
    while (ptr.next.next) ptr = ptr.next;
    ptr.next.prev = null;
    ptr.next = null;
    setHead({ ...head });
  };

  //traverse
  const traverse = async () => {
    if (!head) return;
    let ptr = head;
    while (ptr) {
      setHighlightedId(ptr.id);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      ptr = ptr.next;
    }
    setHighlightedId(null);
  };

  //reverse list
  const reverseList = ()=>{
    if(!head || !head.next) return;
    let curr = head;
    let prev = null;

    while (curr) {
      const next = curr.next;

      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    
    setHead(prev);
  };

  //sort list
  const selectionSort = () => {
    if (!head || !head.next) return head;
    let i = head;

    while (i) {
      let minNode = i;
      let j = i.next;

      // find min in remaining list
      while (j) {
        if (j.val < minNode.val) minNode = j;
        j = j.next;
      }

      // swap values (easier than swapping nodes)
      if (minNode !== i) {
        let temp = i.val;
        i.val = minNode.val;
        minNode.val = temp;
      }

      i = i.next;
    }

    setHead({ ...head });
  }

  const nodes = getList();

  const ListFunc = {insertAtLast, insertAtFront, deleteAtLast, deleteAtFront, traverse, reverseList, selectionSort};

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="heading text-[30px]! sm:text-[42px]! font-semibold! mb-2 text-gray-800">
          Visualizer
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-8 sm:mb-11">
          Add, remove, reverse and traverse through nodes
        </p>

        <div className="w-full bg-white rounded-lg px-4 py-5 sm:py-6 border-slate-200 shadow-lg">
          <div className="flex sm:items-center sm:justify-center gap-4">
            <input
              type="number"
              name="node-val"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              
              placeholder="Enter a number"
              className="border-3 border-gray-300 rounded-lg w-full sm:w-auto py-2 sm:py-2 px-6 sm:px-5 mb-6 mt-2"
            />
            <button
              onClick={handleClearAll}
              className="scale-90 mb-6 mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2"
            >
              <Trash2 size={18} />
              Reset
            </button>
          </div>

          <div>
            <Operations 
              inputValue={inputValue} 
              setInputValue={setInputValue} 
              ListFunc={ListFunc} 
              head={head}
              activityData={activityData}
              setActivityData={setActivityData}
              fetchNodesData={fetchNodesData}
            />
          </div>
        </div>
        <div className="w-full mt-8 md:mt-12">
          <DisplayNodes 
            nodes={nodes} 
            head={head} 
            highlightedId={highlightedId}
          />
        </div>
      </div>
    </>
  );
};

export default Visualizer;
