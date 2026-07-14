import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
function App(){
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Programs/>
      <Title/>
    </div>
  );
}
export default App