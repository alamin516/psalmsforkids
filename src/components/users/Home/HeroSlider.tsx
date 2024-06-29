import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@/styles/slider.css'; 

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <div className="content">
                        <h3>Connecting Tomorrow</h3>
                        <h2>Blending the Human Experience with the Digital Frontier</h2>
                        <p>Our cutting-edge solutions seamlessly intertwine the essence of human interaction with the vast expanse of the digital realm.</p>
                        <button className="cta-btn">Try Us Now <i className="material-icons">arrow_forward</i></button>
                    </div>
                    <div className="background" style={{ backgroundImage: `url('https://www.sliderrevolution.com/wp-content/uploads/revslider/FutureSight-Digital-Marketing-Template/pic51.jpg')` }}></div>
                </div>
            </Slider>
        </div>
    );
};


export default HeroSlider