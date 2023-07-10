import React, { useEffect } from "react";
import images from "../../../config/index"
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const nav = [
        {name: "Home", link: "/"},
        {name: "About us", link: "/about"},
        {name: "Laptops", link: "/laptops"},
        {name: "Computers", link: "/computers"},
        {name: "Contact us", link: "/contact-us"},
    ]
    const toggleNav = () => {
        document.body.classList.toggle("open_nav")
    }
    const loc = useLocation()
    useEffect(()=>{
      document.body.classList.remove("open_nav")
    },[loc.pathname])
    return (
        <header>
            <div className="header_top text-center">
                <div className="container">
                    <p>Used Laptops In Chandigarh | Refurbished Laptops in Chandigarh | Call : +91-000000000 | Mail :info@test.in</p>
                </div>
            </div>
            <div className="header_main">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="header_logo">
                            <NavLink to="/">
                                <img src={images.logo} alt="" width={120} />
                            </NavLink>
                        </div>
                        <button className="nav_toggle" onClick={toggleNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="header_navbar">
                            {nav.map((opt, i)=>{
                                return(
                                    <NavLink key={i} to={opt?.link} className={"nav_link"}>{opt?.name}</NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}