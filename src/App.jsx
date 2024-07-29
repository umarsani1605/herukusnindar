import { useState } from 'react'

import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Awards from './components/Awards'
import Blog from './components/Blog'
import VisionMission from './components/VisionMission'
import Programs from './components/Programs'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Hero></Hero>
      <Biography></Biography>
      <Awards></Awards>
      <VisionMission></VisionMission>
      <Programs></Programs>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default App
