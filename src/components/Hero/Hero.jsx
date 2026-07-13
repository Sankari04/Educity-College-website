import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png';
function Hero(){
    return (
        <div className='hero'>
            <div className="hero-image">
            <h1>Qulity Education for bright future</h1>
            
            </div>
            <button className="hero-button">Apply Now</button>
        </div>
    );

}
export default Hero;