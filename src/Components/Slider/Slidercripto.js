import React from 'react'
import 'react-alice-carousel'
import AliceCarousel from 'react-alice-carousel'

const items =[

]

const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };


const Slidercripto = () => {
  return (
   <AliceCarousel
   mouseTracking
   infinite
   autoPlayInterval={2000}
   animationDuration={1500}
   disableDotsControls
   disableButtonsControls
   responsive={responsive}
   items={items}
   autoPlay
   />
  )
}

export default Slidercripto