import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import images from "../../config/index"
import Brands from "./Brands";

export default function Home() {
    const topSeller = [
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Latitude E5440", image: images.product1 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell 15000", image: images.product2 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Laptops", image: images.product3 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Latitude E5440", image: images.product1 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell 15000", image: images.product2 },
        { link: "/product/detail/refurbished-dell-latitude-E5440", title: "Refurbished Dell Laptops", image: images.product3 },
    ]
    return (
        <div className="page_content">
            <Banner />
            <ProductList
                title={"Top selling laptops"}
                list={topSeller}
                itemPerRow={4}
            />
            <div style={{ backgroundColor: "#f9f9f9" }}>
                <ProductList
                    title={"Best in town laptops"}
                    list={topSeller}
                    is_slider={true}
                    itemPerRow={4}
                />
            </div>
            <div className="brands_main common_sec py-5">
                <div className="container">
                    <div className="main_title text-center">
                        <h3 className="title_heading">Choose from top brands</h3>
                    </div>
                    <Brands />
                </div>
            </div>
        </div>
    )
}