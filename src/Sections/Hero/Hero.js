import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from '../../Components/Slider/Slider'
import slider1 from '../../Assets/images/slider-1.png'
import slider2 from '../../Assets/images/slider-2.png'
import slider3 from '../../Assets/images/slider-3.png'
import './hero.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div>
        {<Slider 
        recurso='Compra de Criptomoedas'
        image={slider1}
        />}
    </div>,
    <div>
        {<Slider 
        recurso='Compra e venda NFT’s'
        image={slider2}
        />}
    </div>,
    <div>
        {<Slider 
        recurso='Menores taxas  (BRL)'
        image={slider3}
        />}
    </div>,
  ];


const responsive = {
    0: {
      items: 1,
    },
    512: {
        items: 1,
    }
  };



function Hero() {
  return (
    <section className='hero bg-image' id='hero'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className='hero-text'>
                        <h1><span className='color-1'>Cripto</span><span className='color-2'>Gama</span> sua corretora brasileira de criptomoedas</h1>
                        <p>A primeira corretora totalmente brasileira de criptomoedas,  compre, venda ou negocie suas criptomoedas aqui!</p>
                        <a href="#" target="_blank" className="hero-btn">
                            <span>Começe agora</span>
                        </a>
                    </div>
                </Col>
                <Col lg={6} className='hero-slider'>
                <AliceCarousel
                    mouseTracking
                    infinite
                    autoPlayInterval={2000}
                    animationDuration={1500}
                    disableButtonsControls
                    responsive={responsive}
                    items={items}
                    autoPlay
                />
                </Col>
            </Row>
            <div className='hero-slider'>
         
            </div>
        </Container>    
    </section>
  )
}

export default Hero