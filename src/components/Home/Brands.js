import React from "react";
import images from "../../config/index"

export default function Brands() {
    const brands = [
        { id: 1, image: images.brand1 },
        { id: 2, image: images.brand2 },
        { id: 3, image: images.brand3 },
        { id: 4, image: images.brand4 },
        { id: 5, image: images.brand5 },
        { id: 6, image: images.brand6 },
    ]
    return (
        <div className="brand_outer">
            {brands.map((opt) => {
                return (
                    <div key={opt.id} className="brand_list">
                        <img src={opt.image} alt="" className="img-fluid" />
                    </div>
                )
            })}
        </div>
    )
}