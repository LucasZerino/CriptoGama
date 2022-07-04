import React from 'react'
import ethe from '../../Assets/images/ethereum.png';
import './slider.css'

function Slider(props) {
  return (
    <div className='hero-slider' id='slider'>
        <div className='slider-item'>
            <div className='slider-card'>
                <img className='card-img' src={props.image} alt={props.recurso} />
                <div className='card-body'>   
                    <p>Recursos da CriptoGama</p>
                    <h5>{props.recurso}</h5>
                </div>
                <div className='card-bottom'>
                    <div className='card-icons'>
                        <div className='icon-item'>
                            <img className='icon-img' src={ethe}/>
                        </div>
                        <div className='icon-item'>
                            <img className='icon-img' src={ethe}/>
                        </div>
                        <div className='icon-item'>
                            <img className='icon-img' src={ethe}/>
                        </div>
                    </div>
                    <div className='card-button'>
                        <button>CRIPTOGAMA</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider