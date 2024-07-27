import { useState } from 'react'

import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Biography from './components/Biography'
import Awards from './components/Awards'
import Articles from './components/Articles'
import VisionMission from './components/VisionMission'
import Programs from './components/Programs'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Hero></Hero>
      <Biography></Biography>
      <Awards></Awards>
      <Articles></Articles>
      <VisionMission></VisionMission>
      <Programs></Programs>
      <Footer></Footer>
    </>
  )
}

export default App
