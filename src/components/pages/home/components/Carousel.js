import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from '../../../style/carousel.module.css';
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      };
    return (
        <div>
            <Slider {...settings}>
                <div className={classes.slide}>
                    <img alt="imgcarousel1" src={process.env.PUBLIC_URL + '/images/carousel1.png'} />
                    <div className={classes.ctnTextOverSlide}>
                        <div className="container">
                            <h2>Welcome to our amazing website</h2>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className={classes.slide}>
                    <img alt="imgcarousel2" src={process.env.PUBLIC_URL + '/images/carousel2.png'} />
                    <div className={classes.ctnTextOverSlide}>
                    <div className="container">
                        <h2>Enjoy the most colourful rides with us</h2>
                        <p>Lorem ipsum dolor sit amet ipsum dolor sit amet  ipsum dolor, sit amet  ipsum dolor sit amet  ipsum dolor sit amet</p>
                    </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default Carousel;