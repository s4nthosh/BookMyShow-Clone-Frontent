import React from 'react'

const OrderSummary = () => {

  var orderDetails =[
    {
      id:1,
      movie_name:"Pushpa 2: The Rule",
      language:"Tamil",
      certificate:"UA",
      movie_type:"2D",
      theater_name:"AGS Cinemas",
      location:"T.Nagar",
      screen:"SCREEN 3",
      theater_seat_type:"DIAMOND",
      selected_seat:"K3,K4",
      movie_date:"MON,23 DEC ,2024",
      movie_time:"06.00 PM",
      no_of_selected_seat:2,
      total_amount:"380"
      
  }

] 

const isLoading = orderDetails.some((order)=>!order.movie_name|| !order.language)





  return (
    <div className='Order Summary w-full md:w-1/3 bg-primary h-full'>
          <div className='w-11/12 mx-auto h-auto bg-white'>

              <div className='head text-black font-light mx-4 py-4 tracking-wide'>
                <p>ORDER SUMMARY</p>
              </div>

              <div className='w-full h-full bg-white relative'>
                {isLoading ? (
                <div className='flex justify-center text-[12px] h-10 items-center text-black'>
                  <p>Loading Your Summary Order...</p>
                </div>
                ):(
                <div className='w-full py-5 h-full bg-white'>
                      {orderDetails.map((details)=>
                      <div className='w-full h-full bg-white' key={details.id}>
                          <div className='float-left w-full px-4 h-full bg-white text-black'>
                            <h1>
                              {`${details.movie_name} (${details.language})`}<br></br>
                              <span>{`(${details.certificate})`}</span>
                            </h1>
                            <h1 className='text-gray-500 text-sm py-1'>{`${details.language},${details.movie_type}`}</h1>
                            <h1 className='text-gray-500 text-sm font-medium py-2'>{`${details.theater_name}:${details.location}(${details.screen})`}</h1>
                            <div className='m-ticket text-black text-sm py-4'>
                              <p className='text-gray-500 text-sm py-1'>M-Ticket</p>
                              <h1>{`${details.theater_seat_type}-${details.selected_seat}`}</h1>
                              <h1>{`${details.movie_date}`}</h1>
                              <h1>{details.movie_time}</h1>
                            </div>
                            <div className='w-full relative'>
                              <hr></hr>
                      
                               <div className='subtotal w-full justify-between flex my-1'>
                                  <p>Sub Total</p>
                                  <h1>Rs.{details.total_amount}</h1>
                                </div> 

                                <div className='AmountPayable hidden w-full justify-between md:flex my-2 py-5 text-black md:bg-text_color/[0.4] rounded-sm'>
                                  <p>AmountPayable</p>
                                  <h1>Rs.{details.total_amount}</h1>
                                </div>
                            </div>  
                          </div>
                          <div className='float-right h-full bg-white w-1/4'>
                          <div className='no_of_seats absolute top-0 text-black text-center'><span className='text-md font-medium'>{details.no_of_selected_seat}</span><br></br>{`${details.no_of_selected_seat === 1 ? "Ticket" : "Tickets" }`}</div>
                          </div>

                          <div className='AmountPayable w-full fixed bottom-0 left-0 md:hidden justify-between flex my-2 py-5 text-white bg-text_color rounded-sm'>
                                  <p>AmountPayable</p>
                                  <h1>Rs.{details.total_amount}</h1>
                                </div>
                      </div>
                      )}
                        
                </div>
                )}
              </div>

          </div>
        </div>
  )
}

export default OrderSummary
