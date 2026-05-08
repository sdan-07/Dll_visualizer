// eslint-disable-next-line no-unused-vars
const DisplayNodes = ({ nodes, head, highlightedId }) => {

  return (
    <>
      <div className="w-full bg-white rounded-lg px-4 py-5 sm:py-6 border-slate-200 shadow-lg">
        <div className="py-14 sm:py-18 md:py-32 w-auto flex flex-col items-center justify-center">
        {nodes.length === 0 
          ? (
            <>
              <p className='text-gray-400 text-[22px] sm:text-[24px]'>No Nodes in the list</p>
              <p className='mt-3 text-gray-400 text-base sm:text-lg'>Add a node to get started!</p>         
            </>
        ) : (
          <div className='w-full flex items-center md:justify-center gap-0 sm:gap-3 md:gap-4 mx-auto overflow-x-auto whitespace-nowrap px-5'>
            {nodes.map((node, idx)=>(
              <div
                key={node.id} 
                className="flex items-center justify-center shrink-0 gap-0 sm:gap-3 md:gap-4"
              >
                {/* node box */}
                <div
                  className={`px-5 py-3 rounded-lg relative `}
                >
                  <div className={`bg-indigo-500 text-white rounded-lg px-10 py-4 sm:p-5 md:px-16 md:py-7 shadow-md w-20 sm:w-24 md:w-32 relative transition-all duration-300 ${
                    node.id === highlightedId
                      ? "scale-105 sm:scale-110 ring-2 sm:ring-4 ring-green-400"
                      : ""
                  }`}>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-[10px] sm:text-base text-indigo-100 mb-0.5 sm:mb-1">Value</div>
                      <div className="text-lg sm:text-xl md:text-2xl font-semibold">{node.val}</div>
                    </div>
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 text-[10px] sm:text-sm text-indigo-100">
                          {node.prev ? <span className="text-[13px] sm:text-2xl">←</span> : 'null'}
                        </div>
                        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 text-[10px] sm:text-sm text-indigo-100">
                          {node.next ? <span className="text-[13px] sm:text-2xl">→</span> : 'null'}
                        </div>
                  </div>

                </div>
                {idx < nodes.length-1 && (
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      {/* right arrow */}
                        <div className="flex items-center">
                          <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-indigo-600"></div>
                          <div className="w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-b-[5px] sm:border-b-[6px] border-b-transparent border-l-[6px] sm:border-l-8 border-l-indigo-300"></div>
                        </div>
                        {/* left arrow */}
                        <div className="flex items-center">
                          <div className="w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-b-[5px] sm:border-b-[6px] border-b-transparent border-r-[6px] sm:border-r-8 border-r-indigo-300"></div>
                          <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-indigo-600"></div>
                        </div>
                      </div>
                )}
              </div>
            ))}
          </div>
        )}
        </div>

      </div>

    </>
  )
}

export default DisplayNodes