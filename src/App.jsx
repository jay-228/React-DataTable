import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Allroutes'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Navbar/>
      <Allroutes/>
    </div>
  )
}

export default App