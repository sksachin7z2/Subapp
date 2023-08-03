import React from 'react'
import BarChart from '../components/BarChart'
function Subscribe() {
  let chartData={
    labels:["1day","2day","3day","4day","5day","6day","7day"],
    
    datasets:[
      {
        data:[20,45,67,23,100,700,100],
        label:"subscribers"
      },
    
    ],
  }
  return (
    <div className='mt-[15vh] w-[90vw] mx-auto'>
       <div className='font-semibold text-[2rem] text-blue-800'>Welcome Supratik!</div>
        <div>
          <div className='grid grid-cols-2 my-7'>
            <div>
              <div className='font-semibold text-[1.2rem]'>No. of Customers subscribed</div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <div className='p-5 border gap-2 rounded'>
                <div className='font-semibold'>
                  Starters
                </div>
                <div>
                    100
                </div>
              </div>
              <div className='p-5 border gap-2 rounded'>
                <div className='font-semibold'>
                  Recommended
                </div>
                <div>
                    500
                </div>
              </div>
              <div className='p-5 border gap-2 rounded'>
                <div className='font-semibold'>
                 Premium
                </div>
                <div>
                    200
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div >
          <div className='grid grid-cols-2'>
      <div >
        <div className='font-semibold text-[1.2rem] my-4'>
        Traffic of customers
        </div>
        <div className='font-semibold text-[1.2rem] my-2'>
          Analytics
        </div>
        <div className='grid grid-cols-2'>
          <div className='font-semibold text-[1rem] '>
          Highest Subscribers
          </div>
          <div>
            700
          </div>
          <div className='font-semibold text-[1rem] '>
          Lowest Subscribers
          </div>
          <div>
            20
          </div>
        
        
        </div>
       
        <div className='my-2 font-semibold'>
          Total Collection
        </div>
        <div className='flex gap-2 items-center'>
                        <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M318.213,66.588h107.818L465.37,0H85.969L46.63,66.588h145.727c32.137,9.476,58.259,28.504,72.702,52.656 H85.969l-39.34,66.588h227.316c-13.482,45.473-65.618,79.365-127.924,79.365H68.313v60.013L288.818,512h96.012v-23.222 L183.333,321.936c84.557-3.351,153.634-61.218,166.283-136.105h76.415l39.339-66.588H345.687 C340.062,100.028,330.637,82.256,318.213,66.588z"></path> </g> </g></svg>
                        <div className='font-semibold text-[1.5rem]'>
                        99,000
                        </div>
                        </div>          
                       
                      </div>
                      <div>
                        <BarChart  chartData={chartData}/>
                        </div>
      </div>
   
          </div>
         
        </div>

    
  )
}

export default Subscribe