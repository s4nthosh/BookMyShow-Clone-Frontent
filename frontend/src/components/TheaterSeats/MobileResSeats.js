import Screen from '../svgs/Screen'
import React,{useRef, useState } from "react";
import {MdKeyboardArrowLeft} from 'react-icons/md'

const MobileResSeats = ({alphabetRows,currentType,selectedSeat,handleSeatSelection}) => {


    const containerRef = useRef(null);

    const [offset, setOffset] = useState({ x: 0, y: 0 }); // Tracks the translation
    const [dragStart, setDragStart] = useState(null);

    const handleMouseDown = (e) => {
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!dragStart) return;

        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;

        setOffset((prevOffset) => ({
            x: prevOffset.x + dx,
            y: prevOffset.y + dy,
        }));

        setDragStart({ x: e.clientX, y: e.clientY }); // Update drag start position
    };

    const handleMouseUp = () => {
        setDragStart(null); // End dragging
    };
    let currentColY =30
    let currentY = 30;
    const colWidth = 30;
    const maxCols = Math.max(...alphabetRows.map((row) => row.cols.length));
    const svgWidth = maxCols * colWidth + 50;
    const maxRow = Math.max(alphabetRows.length * currentY+50)


  return (
    <div>
            <div className='m-con absolute w-full h-full block md:hidden'>
         <div className='m-header fixed left-0 top-0  w-full h-auto z-20 bg-white'>
                <div className='flex justify-center items-center text-black font-semibold h-auto w-full'>
                    <div className=''>
                    <button className='w-10 h-10 text-[30px] font-light  text-gray-600'><MdKeyboardArrowLeft/></button>
                    </div>
                    <div className='flex-1 w-full py-2 text-center'>
                        <h1>AGS Cinemas:T.Nagar</h1>
                        <p>Wed,25th Dec</p>
                    </div>
                </div>
                <div className='timing h-10 w-full bg-gray-400'>
                      <div className='flex w-full text-text_color justify-evenly gap-3 items-center'>
                        <div className='timing my-2 w-1/2 ml-3 rounded-md text-center bg-white'>10:35pm</div>
                        <div className='ticket my-2 bg-white rounded-md text-center mr-3 w-1/2'>1 ticket</div>
                      </div>  
                </div>
        </div>

        <div className='seatsbg-slate-500 w-full relative h-20'onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}  style={{ overflow: "hidden", cursor: dragStart ? "grabbing" : "grab" }}>
        </div>
        <div  className='layout w-full h-full ' >
            <div className='relative w-full text-black bg-slate-400'>
                <div ref={containerRef} className='row-label absolute top-0 z-10 overflow-x-scroll pointer-events-none'>
                <svg height={maxRow} width={23} className="bg-white"style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                    transition: dragStart ? "none" : "transform 0.1s ease",
                }} >
                 
                    {alphabetRows.map((row, rowIndex) => {
                        
                        if (row.type && row.type !== currentType) {
                            currentType = row.type;
                            currentColY += 40; // Extra gap before a new section
                          }
                     
                      currentColY+=25
                      const yStart = currentColY;
                return (
                    <g key={rowIndex} > 
              
              {row.type && (
                <text
                  x={2}
                  y={yStart - 15}
                  className=" text-[14px] fill-black"
                  textAnchor='start'
                >
                </text>
              )}
                        <text 
                        x={7}
                        y={yStart-25}
                        className="text-[12px] text-black">
                        {row.letter}
                        </text>
                    </g>
                    );
                })}
                   
        
                </svg>
                

            </div>
            

            <div className="col-label absolute w-full overflow-x-scroll px-10 "style={{ whiteSpace: "nowrap", width: "100%" }}>
                <svg height={maxRow} className="" textAnchor="middle" width={svgWidth}>
                {alphabetRows.map((row, rowIndex) => {
        if (row.type && row.type !== currentType) {
            currentType = row.type;
            currentY += 40; // Extra gap before a new section
            }
            const yStart = currentY;

            currentY += 25; // Increment y-coordinate for rows  
  return (
    <g key={rowIndex}>
    {row.type && (
      <text
        x={190}
        y={yStart - 30}
        className=" text-[14px] fill-black"
        textAnchor='middle'
      >
        Rs.{row.price} {row.type}
      </text>
    )}

    {row.cols.map((col, colIndex) => {
                let visibleIndex = 0;

                // Count only visible (non-&nbsp;) columns for numbering
                row.cols.slice(0, colIndex).forEach((c) => {
                    if (c !== "&nbsp;") {
                        visibleIndex++;
                    }
                });
                const seats = `${row.letter}-${visibleIndex+1}`
                const isSelected = selectedSeat.includes(seats);
                return(
                    <React.Fragment key={colIndex}>
                        <g>
                        <rect 
                         x={127+ colIndex * 27}
                         y={yStart - 15}
                         width="20"
                         height="20"
                         rx={3} ry={3}
                         textAnchor='middle'
                         //   fill={col==='&nbsp;' ? 'transparent' : "white"}  
                         className={col==='&nbsp;' ? 'fill-transparent' : `${isSelected ? "fill-green-600 text-white" : "hover:fill-green-600 hover:text-white stroke fill-white stroke-green-600"}` }
                         onClick={()=>handleSeatSelection(visibleIndex +1 , row.letter,row.price)}/>
                         
                         {col!=="&nbsp;" &&(
                    <text x={137+colIndex*27} y={yStart-1} textAnchor='middle'                 
                     rx={3} ry={3} className=' text-[12px] font-medium fill-white pointer-events-none'>{visibleIndex+1}</text>
                        )}
                        </g>
                    </React.Fragment>
                )
            })} 

    </g>
  )
                })}                
                </svg>
                <div className='w-full flex justify-center h-36 bg-white' >
                <span className='flex flex-col items-center w-full h-full justify-center'><Screen/>
                
            </span>       
                </div>
            </div>

        </div>  
             
        </div>
    </div>
    </div>
  )
}

export default MobileResSeats