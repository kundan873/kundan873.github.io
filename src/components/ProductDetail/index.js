import React, { useRef, useState } from "react";
import images from "../../config/index"
import Slider from "react-slick";
import _ from "underscore";
import "./ProductDetail.css";
import ProductList from "../Home/ProductList";

export default function ProductDetail() {
    const sliderRef = useRef(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [product, setproduct] = useState({
        title: "Refurbished Dell Latitude E5440",
        instock: true,
        category: "Laptop",
        sku: "LAPTOP1",
        description: {
            main: [
                { title: "PROCESSOR", data: [{ text: "Intel Core i5-4th Generation" }] },
                { title: "MEMORY", data: [{ text: "RAM 4GB" }] },
                { title: "STORAGE", data: [{ text: "500 GB" }] },
            ],
            all: [
                {
                    title: "DISPLAY", data: [
                        { text: "Screen resolution - 1600x900" },
                        { text: "Screen size – 14in" },
                        { text: "Display technology – LED-backlit LCD" },
                    ]
                },
                {
                    title: "EXPANSION CARD SLOTS", data: [
                        { text: "Expansion slots – ExpressCard/54" },
                    ]
                },
                {
                    title: "GENERAL", data: [
                        { text: "Colour – Grey" },
                    ]
                },
                {
                    title: "GRAPHICS CARD", data: [
                        { text: "Graphics card – Intel HD Graphics 3000" },
                        { text: "Graphics card type – Integrated" },
                    ]
                },
            ]
        },
        images: [
            { src: images.product1 },
            { src: images.product2 },
            { src: images.product3 },
        ]
    });
    
    const topSeller = [
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Latitude E5440", image: images.product1 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell 15000", image: images.product2 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Laptops", image: images.product3 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Latitude E5440", image: images.product1 },
    ]
    const mainSlider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    centerMode: true,
                    arrows: true,
                    dots: true
                }
            },
        ]
    };
    const thumSlider = {
        slidesToShow: 7,
        swipeToSlide: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: false,
        infinite: false,
        centerMode: false,
        dots: false,
        arrows: true,
        responsive: [

            {
                breakpoint: 1200,
                settings: { vertical: false, slidesToShow: 4 }
            },
            {
                breakpoint: 767,
                settings: { vertical: false, slidesToShow: 4, }
            }
        ],
    }

    const prevslide = () => {
        sliderRef.current.slickPrev()
    }
    const nextslide = () => {
        sliderRef.current.slickNext()
    }


    return (
        <div className="page_content pt-4">
            <div className="container">
                <div className="row gx-5 pb-4">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="singleProduct__img d-flex justify-content-between">
                            <Slider
                                className='Product__slider__nav'
                                ref={sliderRef}
                                asNavFor={nav1}
                                {...thumSlider}
                            >
                                {!_.isEmpty(product) && product.images.length > 0 && product.images.map((img, index) => {
                                    return (
                                        <button key={index} className="w-100 slidernavBox_outer">
                                            <div className="slidernavBox"> <img src={img.src} alt="" className="img-fluid" /></div>
                                        </button>
                                    )
                                })}
                            </Slider>
                            <Slider className='Product__slider' asNavFor={nav2} ref={(slider) => setNav1(slider)} {...mainSlider}>
                                {!_.isEmpty(product) && product.images.length > 0 && product.images.map((img, index) => {
                                    return (
                                        <div key={index} className="w-100">
                                            <button className="sliderBox">
                                                <img src={img.src} alt="" className="img-fluid" />
                                            </button>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="product_description">
                            <h1>{product?.title}</h1>
                            <div className="mb-1">
                                <strong>Category:</strong>
                                <span className="light-text ms-2">{product?.category}</span>
                            </div>
                            <div>
                                <strong>SKU:</strong>
                                <span className="light-text ms-2">{product?.sku}</span>
                            </div>

                            <div className="mt-3">
                                {product.description.main.map((des, i) => {
                                    return (
                                        <div key={i}>
                                            <h6 className="mb-2">{des?.title}</h6>
                                            <ul className="product_description_list light-text">
                                                {des.data.map((data, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {data?.text}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                                <button className="btn btn-primary mt-3">Inquiry now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pt-3">
                    <h4 className="mb-4">Description</h4>
                    {product.description.all.map((des, i) => {
                        return (
                            <div key={i} className="mb-3">
                                <h6 className="mb-2">{des?.title}</h6>
                                <ul className="product_description_list light-text">
                                    {des.data.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                {data?.text}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className="pt-3">
                    <div>
                        <ProductList
                            title={"Related products"}
                            list={topSeller}
                            is_slider={true}
                            itemPerRow={4}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}