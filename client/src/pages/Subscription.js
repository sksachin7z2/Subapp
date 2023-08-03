import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Subscription() {
  let navigate=useNavigate()
  const [nop, setnop] = useState(0)
  const [plans, setPlans] = useState([])
  const [plandes, setPlandes] = useState({title:"",description:"",planduration:"",price:0})
  const [hosturl, setHosturl] = useState("")
  const [helper, setHelper] = useState(false)
  const handlepusblish=()=>{
      navigate(`/subscribe?hosturl=${hosturl}`)
  }
  return (
    <div className=' mt-[10vh] w-[90vw] m-auto'>
     
      <div className='text-center my-3 font-semibold text-[1.5rem]'>
        Design your Subscription
      </div>
     

      <div className='pb-7 pt-3 md:w-[60%] mx-auto'>
      <div className='my-5'>
          <div className='font-semibold'>
            Enter the website url
          </div>
          <div>
          <input className='px-2 py-1 border rounded w-full' type="text" name="host" id="host" value={hosturl} onChange={(e)=>setHosturl(e.target.value)}/>
          </div>
        </div>
        <div className='border p-5 rounded border-[#3f563d] space-y-3'>
          <div>
            <div className='font-semibold text-sm'>Enter the title</div>
            <div>
              <input className='px-2 py-1 border rounded w-full' type="text" name="title" id="title" value={plandes.title} onChange={(e)=>setPlandes({...plandes,['title']:e.target.value})}/>
            </div>
          </div>

          <div>
          <div className='font-semibold text-sm'>Enter the Description</div>
            <div>
              <textarea className='px-2 py-1 border rounded w-full'  type="text" name="title" id="title" value={plandes.description} onChange={(e)=>setPlandes({...plandes,['description']:e.target.value})}/>
            </div>
          </div>

          <div>
          <div>
          <div className='font-semibold text-sm'>Enter the plan duration</div>
            <div>
              <input className='px-2 py-1 border rounded w-full' type="text" name="title" id="title" value={plandes.planduration} onChange={(e)=>setPlandes({...plandes,['planduration']:e.target.value})}/>
            </div>
          </div>
         
      </div>
      <div>
          <div className='font-semibold text-sm'>Enter the pricing</div>
            <div>
              <input className='px-2 py-1 border rounded w-full' type="text" name="title" id="title" value={plandes.price} onChange={(e)=>setPlandes({...plandes,['price']:e.target.value})}/>
            </div>
          </div>

    </div>
    <div className='my-3'>
      <button onClick={()=>{if(plandes.title && plandes.description && plandes.planduration) {setPlans([...plans,plandes]); setPlandes({title:"",description:"",planduration:"",price:0})}}} className='text-white px-5 py-1 rounded bg-[#3f563d]'>Add</button>
    </div>
    </div>

    <div className=' w-[70%] m-auto'>
      <div className='flex justify-between items-center'>
      <div className='font-semibold my-3 '>
        Your Subscription plans preview
      </div>
      <div>
        <button onClick={handlepusblish} className='px-2 py-1 bg-slate-900 text-white rounded'>
          Publish
        </button>
      </div>
      </div>
      

      <div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-2 mb-5'>
        {
          plans.map((e,i)=>{

            return(
              <div className='border border-slate-900 rounded p-4 relative'>
                <div  className='flex justify-end w-full absolute top-3 right-2'>
                <svg onClick={()=>{
                  console.log('ihj')
                  let pl=plans;
                  console.log(plans)
                  delete pl[i]
                  pl=pl.filter(f=>f!=undefined)
                  setPlans(pl)
                  setHelper(!helper)
                }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </div>
                <div className='space-y-4'>
                <div className='font-semibold text-[1.2rem]'>
                      {e?.title}
                    </div>
                    <div >
                      {e.description}
                    </div>
                    <div>
                      <div className='font-semibold'>
                        Duration
                      </div>
                      <div>
                      {e.planduration}
                      </div>
                     
                    </div>
                    <div>
                      <div className='my-3 font-semibold'>Pricing</div>
                      <div className='flex gap-2 items-center'>
                        <div>
                        <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M318.213,66.588h107.818L465.37,0H85.969L46.63,66.588h145.727c32.137,9.476,58.259,28.504,72.702,52.656 H85.969l-39.34,66.588h227.316c-13.482,45.473-65.618,79.365-127.924,79.365H68.313v60.013L288.818,512h96.012v-23.222 L183.333,321.936c84.557-3.351,153.634-61.218,166.283-136.105h76.415l39.339-66.588H345.687 C340.062,100.028,330.637,82.256,318.213,66.588z"></path> </g> </g></svg>
                        </div>
                        <div>
                        <button className='text-white bg-[#3f563d] px-2 py-1 rounded'>{e.price}</button>
                        </div>
                      </div>
                     
                    </div>
                </div>
                   
              </div>
            )
          }
          )
        }
      </div>
      </div>
    </div>
    </div>
  )
}

export default Subscription