import React from "react";
import images from "../../config/index"
import Slider from "react-slick";

export default function Banner() {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slider = [
        { id: 1, link: "/", image: images.banner1 },
        { id: 2, link: "/", image: images.banner2 },
    ]
    return (
        <div className="banner_main">
            <Slider {...settings}>
                {slider.map((opt) => {
                    return (
                        <div key={opt.id} className="banner_main_slider">
                            <img src={opt.image} alt="" className="img-fluid" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}