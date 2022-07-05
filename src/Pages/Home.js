import React from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Sections/Hero/Hero'
import NavbarSticky from '../Components/Navbar/Navbar'


const Home = () => {
  return (
    <div className='home'>
        <NavbarSticky/>
        <Hero   />
        <Footer />
    </div>
  )
}

export default Home