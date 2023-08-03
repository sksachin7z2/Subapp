import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Subscription from './pages/Subscription'
import Subscribe from './pages/Subscribe'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/createSubscription' element={<Subscription/>}/>
      <Route exact path='/subscribe' element={<Subscribe/>}/>
      </Routes>
     
    </Router>

 
  )
}

export default App