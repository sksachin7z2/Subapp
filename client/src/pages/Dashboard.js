import React from 'react'
import bg from '../static/mainbg1.png'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    let navigate=useNavigate()
  return (
    <div className='mt-[10vh]'>
        <div style={{backgroundImage:`url(${bg})`,backgroundSize:"cover"}} className='h-[70vh]'>

       
            <div className='h-[70vh] flex justify-center items-center backdrop-blur-md'>
                <div className='space-y-4'>
                    <div className='text-center font-semibold text-[1.5rem]'>Create new Subscription model</div>
                    <div className='text-center'>
                        <button onClick={()=>navigate( '/createSubscription' )} className='px-2 py-1 rounded bg-gray-800 text-white'>Get started</button>
                    </div>
                </div>
            </div>
            </div>

            <div className='w-[90vw] m-auto'>
                <div className='text-[1.5rem] my-6 font-semibold'>
                    Your Subscription Plans
                </div>
                <div className='grid md:grid-cols-3 gap-2 mb-7'>
                    <div className='border  border-slate-900 p-5 rounded'>
                        <div className='font-semibold text-[1.2rem]'>Subscription plan</div>
                        <div className='font-semibold'>Host</div>
                        <div className='my-2'>https://examplesite.com</div>
                        <div>

                        <button className='text-white bg-gray-800 rounded px-2 py-1'>View Analytics</button>
                        </div>
                    </div>
                    <div className='border  border-slate-900 p-5 rounded'>
                        <div className='font-semibold text-[1.2rem]'>Subscription plan</div>
                        <div className='font-semibold'>Host</div>
                        <div className='my-2'>https://examplesite1.com</div>
                        <div>

                        <button className='text-white bg-gray-800 rounded px-2 py-1'>View Analytics</button>
                        </div>
                    </div>
                    <div className='border  border-slate-900 p-5 rounded'>
                        <div className='font-semibold text-[1.2rem]'>Subscription plan</div>

                        <div className='font-semibold'>Host</div>
                        <div className='my-2'>https://examplesite2.com</div>
                        <div >

                        <button className='text-white bg-gray-800 rounded px-2 py-1'>View Analytics</button>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Dashboard