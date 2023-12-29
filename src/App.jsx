import React from 'react'
import ResponsiveAppBar from './Components/NavBar'
import TopBar from './Components/TopBar'
import Body from './Components/Body'
import './assets/css/main.css'
import MiddleBar from './Components/MiddleBar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
const App = () => {
  return (
    <>
    <TopBar/>
    <MiddleBar/>
    <ResponsiveAppBar/>
    <Body/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App