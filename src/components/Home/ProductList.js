import React from "react";
import Product from "../common/Product";
import Slider from "react-slick";

export default function ProductList(props) {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="common_sec py-5">
            <div className="container">
                <div className="main_title text-center">
                    <h3 className="title_heading">{props.title}</h3>
                </div>
                <div className="product_list">
                    {props.list.length > 0 ?
                        <>
                            {props.is_slider ?
                                <Slider {...settings}>
                                    {props.list.length > 0 && props.list.map((opt) => {
                                        return (
                                            <div key={opt.id} className="banner_main_slider">
                                                <Product data={opt} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                                :
                                <div className="row">
                                    {props.list.length > 0 && props.list.map((opt, i) => {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-6" key={i}>
                                                <Product data={opt} />
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </>
                        :
                        <div className="py-5 text-center">
                            <h5 style={{ color: "#666" }}>Oops! No product found</h5>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}