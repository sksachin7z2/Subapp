import React from 'react'
import bg from '../static/mainbg2.png'
import { useNavigate } from 'react-router-dom'
function Landing() {
    let navigate=useNavigate()
  return (
    <div>
        <div className='h-[100vh]' style={{backgroundImage:`url(${bg})`,backgroundSize:"cover"}}>
        <div className=' h-[100vh] backdrop-blur-md grid md:grid-cols-2 grid-cols-1'>
        <div className='md:pl-[100px] pl-[20px] pt-[15vh] flex items-center'>
            <div>
            <div className='text-[2rem] font-semibold text-red-800  '>
                Your All-in-One Subscription Solution: Subaap
                </div>
                <div className='text-[1.2rem] my-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quos? Quo culpa minus illo, nemo quasi reprehenderit laborum vel voluptatum natus aliquid dicta consequatur blanditiis, cupiditate nulla quaerat esse! Odit maiores sint quo praesentium.
                </div>

                <div>
                    <button onClick={()=>navigate('/dashboard')} className='px-2 py-1 text-white bg-red-500 rounded'>Get started</button>
                </div>
            </div>
        
        </div>
               
        </div>
        </div>

        <div className='w-[90vw] m-auto'>
            <div className='text-center text-[1.5rem] font-semibold text-red-800 my-5'>
                About
            </div>

                <div className='text-[1.2rem]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officiis quos nostrum libero? Eos iste eum commodi? Placeat a aliquid maxime, iure, expedita quia architecto rem ut suscipit, et porro velit nulla. Velit et nihil inventore, dolore excepturi autem quos ullam consequuntur a est impedit quae non nisi atque exercitationem vel nesciunt quis minus porro aliquam.
                </div>
               

            <div>
                <div  className='text-center text-[1.5rem] font-semibold text-red-800 my-5'>
                    Services
                </div>
                <div className='grid md:grid-cols-3 gap-2 grid-cols-1 mb-5'>
                <div className='border rounded p-3'>
                    <div className='font-semibold my-1'>
                    Provide subscription services
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis?
                    </div>
                    
                </div>
                <div className='border rounded p-3'>
                    <div className='font-semibold my-1'>
                    Manages subscriptions of your customers and Analytics
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in!
                    </div>
                    
                </div>
                <div  className='border rounded p-3'>
                    <div className='font-semibold my-1'>
                    Provides flexible and interactive environment
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quisquam!
                    </div>
                   
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing