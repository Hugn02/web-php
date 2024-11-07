import React, { useRef } from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/newcollections");
    };


    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Hàng mới về</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Mới nhất</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Bộ sưu tập</p>
                    <p>Dành cho mọi người</p>
                </div>
                <div className="hero-lastest-btn">
                    <button onClick={handleNavigate}>Bộ sưu tập mới nhất</button>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
              <img src={hero_imae} alt="" />
            </div>

        </div>
    )
}

export default Hero