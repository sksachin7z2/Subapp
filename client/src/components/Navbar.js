import React,{useState} from 'react'
import {useNavigate,Link,useLocation} from 'react-router-dom'

import Avatar from 'react-avatar'
import { HashLink } from 'react-router-hash-link';


import Cookies from 'js-cookie';
function Navbar() {
const [account, setAccount] = useState(false)
  let location=useLocation()
  let navigate=useNavigate()
  const handlelogout=async()=>{
// try {
//   await signOut(auth)
//   Cookies.remove('subscription--suproh')
//   Cookies.remove('name')
//   Cookies.remove('dp')
//   Cookies.remove('email')
// } catch (error) {
//   alert(error)
// }
  Cookies.remove('subscription--suproh')
  Cookies.remove('name')
  Cookies.remove('dp')
  Cookies.remove('email')
navigate('/')
  }
  console.log(location.pathname)
  const [toggle, setToggle] = useState(false)
  return (
    <div>

<nav className="bg-[#ffffff40] lg:px-28 backdrop-blur-md  fixed w-full z-20 top-0 left-0 shadow-md ">
  <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
    <div>
    <Link to="/" className="flex items-center">
      <img  src="/logo.png" className="h-8 mr-3 rounded-full w-8" alt="Flowbite Logo"/>
      
  </Link>
    </div>
 
  <div className="flex md:order-2">
            
      <div className='md:block hidden'>
    {!( Cookies.get('subscription--suproh'))? <div className='flex gap-4'><div>
    <Link to='/login'> <button type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Login</button></Link>
      </div>
      <div>
     <Link to='/signup'> <button type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Signup</button></Link>
      </div></div>:<div  className='flex gap-5 items-center'> <div className='relative cursor-pointer'>
      <button onClick={()=>handlelogout()} type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Logout</button>

      </div> </div> }
    </div>
      <button onClick={()=>{setToggle(!toggle)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
 { (location.pathname==='/')? <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded  md:flex-row md:space-x-[4rem] md:mt-0 md:border-0 ">
      <li>
        <Link to="/" className="text-gray-900 block py-2 pl-3 pr-4 rounded  md:p-0 " aria-current="page">Home</Link>
      </li>
      <li>
        <HashLink to="/#about" className="text-gray-900 block py-2 pl-3 pr-4 rounded  md:p-0 ">About</HashLink>
      </li>
      <li>
        <HashLink to="/#Services" className="text-gray-900 block py-2 pl-3 pr-4 rounded  md:p-0">Services</HashLink>
      </li>
     
   
    </ul>: <div></div> }
  
  </div>
  </div>
 {toggle&& <div className='md:hidden '>
  {(location.pathname==='/')?<ul className="flex flex-col p-4 md:p-0  font-medium   rounded  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4   rounded  md:p-0 " aria-current="page">Home</Link>
      </li>
      <li>
        <HashLink to="/#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:p-0 ">About</HashLink>
      </li>
      <li>
        <HashLink to="/#Services" className="block py-2 pl-3 pr-4  md:p-0 ">Services</HashLink>
      </li>
      <li>
        {/* <Link to="/help" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 ">Help</Link>
         */}
        
      </li>
      </ul>:<div></div> }
      {!( Cookies.get('subscription--suproh'))? <div className='px-5 space-y-2 mb-5'> <div>
    <Link to='/login'> <button type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Login</button></Link>
      </div>
      <div>
     <Link to='/signup'> <button type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Signup</button></Link>
      </div></div>:<div className='p-4 space-y-3'>

        <Link to='/dashboard'><div className='pl-3 pr-4 font-semibold text-gray-900 rounded  md:p-0 '>Dashboard</div></Link>
        <div className='pl-3 pr-4 font-semibold text-gray-900 rounded  md:p-0 '><Link to='/hostdashboard'>Hosting</Link></div>

        <div className='pl-3 pr-4 text-gray-900 rounded font-semibold  md:p-0 '>Account</div>
        
        <div className='pl-3 pr-4 text-gray-900 rounded font-semibold  md:p-0 '><Link to={`/profile`}>Profile</Link></div>
        <div className='pl-3 pr-4 text-gray-900 rounded font-semibold  md:p-0 '><Link to={`/bookings`}>Bookings</Link></div>
       <div className='pl-3 pr-4 text-gray-900 rounded font-semibold  md:p-0 '> <Link to={`/listings`}>Listings</Link></div>
        <div onClick={handlelogout}>
        <button type="button" className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-1 text-center mr-3 md:mr-0 ">Logout</button>
        </div>


      </div> }
    
  </div>}
</nav>
    </div>
  )
}

export default Navbar