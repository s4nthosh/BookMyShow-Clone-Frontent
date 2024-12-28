import React, { useState } from "react";
import Screen from '../svgs/Screen'
import MobileResSeats from "./MobileResSeats";
import {MdKeyboardArrowLeft} from 'react-icons/md'

const Seats = () => {

    const [selectedSeat, setSelectedSeat]=useState([])
    const [totalprice,setTotalPrice]=useState(0)


    var handleSeatSelection=(row,seat,price)=>{
        
        const seats = `${seat}-${row}`
        const isSelected = selectedSeat.includes(seats)

        if(isSelected){
            // deselect seats

            const updatedSeats =selectedSeat.filter((id)=> id !== seats)
            setSelectedSeat(updatedSeats)
            setTotalPrice((prevPrice) => prevPrice - parseInt(price, 10))
        
        }
        else if(selectedSeat.length<10){
            const updatedSeats =[...selectedSeat,seats]
            setSelectedSeat(updatedSeats )
            setTotalPrice((prevPrice) => prevPrice + parseInt(price, 10))
        }
        else{
            alert("you can only select up to 10 seats")
        }

        console.log(selectedSeat)

    }

    const data = [
        {
            id:1,
            rows:[
                {
                id:11,
                no_of_Row:"17",
                price:"190",                  //pleace enter high to low price
                type:"DIAMAND" ,
                hideCols:{
                    A:[4,5,6,7,8,9],
                    B:[5,6,7,8],
                    D:[6,7,8,9,10],
                    E:[7,8,9],
                    F:[7,8,9],
                    G:[7,8,9],
                    H:[7,8,9],
                    J:[7,8,9],
                    K:[7,8,9],
                    L:[7,8,9],
                    M:[7,8,9],
                    N:[8,9],
                    P:[1,2,15,16],
                    Q:[1,2,15,16],
                    R:[1,2,15,16],
                    S:[1,2,15,16],
                },
                blankRows:[],
                skipRowName:[9,3],
                skipRows:['O']
            },{
                id:12,
                no_of_Row:"2",
                price:"60",
                type:"PEARL",
                hideCols:{
                    T:[1,2,15,16],
                    U:[1,2,15,16],
                }
            },

        ],
            cols:"16",
        }
    ]


    const generateAlphabetRows = ()=>{
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let rowLabel = []
        let currentLetterIndex = 0        

        

        //calc the total rows

        data.forEach((section)=>{
            section.rows.forEach((row)=>{
                const rowsCount=parseInt(row.no_of_Row,10)             //just calc the rows 3+0 =3 and then again goes means 3+4=7
                const blankRowPosition = row.blankRows || []
                const skipRowName = row.skipRowName || []
                const skipRows = row.skipRows || []
                
                let typeShown = false
                
            
            for(let i=0 ; i < rowsCount; i++){
            
                let letter = "";

               while(skipRowName.includes(currentLetterIndex + 1)){
                currentLetterIndex++     //skip the letter
            
               }

               letter = currentLetterIndex < 26 ? alphabet[currentLetterIndex]:`${alphabet[Math.floor(currentLetterIndex / 26) - 1]}${
                alphabet[currentLetterIndex % 26]
              }`
        

                if(skipRows.includes(letter)){
                    rowLabel.push({letter:'', cols:Array(section.cols).fill("&nbsp;"),type:""})
                }else{
                    const hiddenCols=row.hideCols?.[letter] || []

                    const cols = Array.from({length:section.cols},(_,index)=>{
                        return hiddenCols.includes(index +1 ) ? "&nbsp;":index +1
                    })

                    const rowtype=typeShown ? '' : row.type
                        typeShown= true
                    
                    let priceShown = false    
                    const price = priceShown ? '' : row.price
                        priceShown= true    

                    rowLabel.push({letter,cols, type :rowtype, price:price})
                }

                if(blankRowPosition.includes(i)){                          //includes means check the i value into the array
                    rowLabel.push({letter:'-', cols:Array(section.cols).fill("&nbsp;"),type:""})
                }


                currentLetterIndex++     //move next letter
            }
            
        })
    })  

    
    return rowLabel

    }
    const alphabetRows =  generateAlphabetRows()

    let currentType = ""
    let currentPrice = ''


    var details=[{
        id:1,
        movie_name:"Pushpa 2 :The Rule",
        theater_name:"AGS Cinemas",
        location:"T.Nagar",
        day:"22 Dec",
        selectedtiming:"9:45 AM",
        timing:"9:45 AM , 12:00 PM , 3:00 PM , 6:00 PM ",
        type:"4K DOLBY 7.1"
    }]


    
    

  return (
    <section className='w-full h-full md:relative'>
        <header className='w-full hidden md:sticky md:block top-0 z-30 h-auto bg-white'>
        {details.map((detail)=>
            <div className="w-full" key={detail.id}>
            
                <div className="flex">
                    <button className="bg-white text-black text-[28px] hover:bg-white border-none"><MdKeyboardArrowLeft/></button>
                    
                        <div className="h-auto text-black p-2">
                            <h1>{detail.movie_name}</h1>
                            <div className="flex text-xs text-gray-600 font-semibold">
                                <p>{detail.theater_name}:{detail.location}</p>
                                <p>{`|Today,${detail.day},`}</p>
                                <p>{detail.selectedtiming}</p>
                            </div>
                        </div>
                    

                </div>

            <div className="bg-gray-800 h-auto w-full"></div>    
                <div className='flex gap-3 bg-gray-300 p-2 flex-wrap'>
                        {detail.timing.split(',').map((time,index)=>
                        <div className='flex' key={index}>
                        <button className='flex flex-col bg-white justify-center text-[12px] rounded-md text-green-500 border border-green-400 items-center w-28'>{time}<span className='text-green-400 text-[10px]'>{detail.type}</span></button>
                        </div>
                        )}

                    </div>
            </div>
            )}
        </header>
    <div className='hidden md:max-w-screen-xl md:block text-gray-500 mx-auto '>
        <table className='table'>
            <tbody className='table-row w-auto'>
                {alphabetRows.map((row,index)=>{

                

                    let showType = false;
                    if(row.type !== currentType){
                        currentType = row.type
                        showType= true

                    }
                    let showPrice = false;
                    if(row.price !== currentPrice){
                        currentPrice = row.price
                        showPrice=true
                    }
                    return(
                        <React.Fragment key={index}>
                            {showType && showPrice &&(
                                <tr className='border-none w-2/3'>
                                    <td><span>Rs.{row.price}</span> {row.type}</td>
                                    
                                </tr>
                            )}
                            
                            <tr className='border-none w-full flex justify-center p-0'>
                                <td className='text-gray-400 w-16 h-fit p-1  text-center'>{row.letter ||""}</td>

                                {row.cols.map((col, index) => {

                                
                                     // Keep track of the visible index manually
                                    let visibleIndex = 0;

                                    // Count only visible (non-&nbsp;) columns for numbering
                                    row.cols.slice(0, index).forEach((c) => {
                                        if (c !== "&nbsp;") {
                                            visibleIndex++;
                                        }
                                    });
                                    const seats = `${row.letter}-${visibleIndex+1}`
                                    const isSelected = selectedSeat.includes(seats);
                        return (
                            <td key={index} className="p-0">
                                <div className="flex px-1 py-1">
                                    <div className="w-6 h-6">
                                        {col === "&nbsp;" ? (
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: "&nbsp;",
                                                }}
                                            />
                                        ) : (
                                            <button className={`border w-6 h-6  font-light text-xs  rounded-sm  ${isSelected ? "bg-green-600 text-white" : "hover:bg-green-600 hover:text-white text-green-600 border-green-600"}`} onClick={()=>handleSeatSelection(visibleIndex +1 , row.letter,row.price)}>
                                                {visibleIndex + 1}
                                            </button>
                                        )}
                                    </div>
                                </div>
                                </td>
                                    );  
                            })}

                            </tr>
               
                        </React.Fragment>
                    )
        
                    
                })}
            </tbody>

                        
                                         
        </table>

        <div className='w-full flex justify-center h-36 '>
            <span className='flex flex-col items-center w-1/2 h-full justify-center'><Screen/>
                <span>All eyes this way please!</span>
            </span>       
            </div>          
    
    </div>
    
    {/* mobile */}
       <MobileResSeats alphabetRows={alphabetRows}  selectedSeat={selectedSeat} handleSeatSelection={handleSeatSelection} currentType={currentType}/>         
               
      <footer className='w-full bg-white h-auto z-20 fixed bottom-0'>
        {totalprice === 0 ? (  
            <div className="flex justify-center items-center gap-5 h-auto">
                <div className="w-auto flex items-center gap-1"><div className="border w-4 h-4 rounded-sm bg-green-600"></div><p>Selected</p></div>
                <div className="w-auto flex items-center gap-1"><div className="border w-4 h-4 rounded-sm border-green-600"></div><p>Available</p></div>
                <div className="w-auto flex items-center gap-1"><div className="border w-4 h-4 rounded-sm bg-gray-200"></div><p>Sold</p></div>
            </div>
):(
            <div className="flex justify-center items-center shadow-[rgba(0,0,15,0.5)_0px_-2px_3px_0px]">
                <button className="btn my-2 w-10/12 md:w-1/3 bg-text_color text-white border-none hover:bg-text_color">Pay Rs.{totalprice}</button>
            </div>
   )}     
      </footer>          
      
    </section>
    
  )
}

export default Seats