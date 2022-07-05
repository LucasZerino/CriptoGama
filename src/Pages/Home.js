import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavBarHeader from '../Components/NavBarHeader/navBarHeader'
import Hero from '../Sections/Hero/Hero'


const Home = () => {
  return (
    <div className='home'>
        <NavBarHeader />
        <Hero   />
        <Footer />
    </div>
  )
}

export default Home