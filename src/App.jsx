import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import { Link } from 'react-router'
import CountContext from './utils/CountContext'


function App() {
  const [count,setCount] = useState(0);
  return (
    <CountContext.Provider value={{count: count,setCount: setCount}}>
      <div className='header'>
        <nav className='navbar'>
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
      </div>
      <Outlet />
      <h1>footer</h1>
    </CountContext.Provider>
  )
}

export default App
