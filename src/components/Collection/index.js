import React from "react";
import images from "../../config/index"
import InnerBanner from "../common/InnerBanner/InnerBanner";
import ProductList from "../Home/ProductList";
import SidebarFilter from "./SidebarFilter";

export default function Collection(props) {
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
            <InnerBanner
                color="rgb(240, 240, 242)"
                image={images.about}
                heading={props.title}
                text="Lorem ipsum dolor sit amet, consectetur elit."
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-5">
                        <SidebarFilter />
                    </div>
                    <div className="col-md-9">
                        <ProductList
                            title={"Top selling laptops"}
                            list={topSeller}
                            itemPerRow={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}