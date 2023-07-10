import React from "react";
import { NavLink } from "react-router-dom";

export default function Product(props) {
    return (
        <div className="product_outer">
            <div className="product_image">
                <NavLink to={props.data?.link}>
                    <img src={props.data?.image} alt="" className="img-fluid" />
                </NavLink>
            </div>
            <div className="product_title">
                <h5><NavLink to={props.data?.link}>{props.data?.title}</NavLink></h5>
            </div>
        </div>
    )
}