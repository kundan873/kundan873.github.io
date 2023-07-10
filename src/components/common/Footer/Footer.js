import React from "react";
import images from "../../../config/index"
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const nav = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about" },
        { name: "Laptops", link: "/laptops" },
        { name: "Computers", link: "/computers" },
        { name: "Contact us", link: "/contact-us" },
    ]
    return (
        <footer>
            <div className="footer_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <NavLink to="/">
                                <img src={images.logoWT} alt="" width={120} />
                            </NavLink>
                            <p className="mt-3 pe-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="footer_social mt-3">
                                <NavLink to={"www.facebook.com"}>
                                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                </NavLink>
                                <NavLink to={"www.twitter.com"}>
                                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-4 col-6 mb-md-0 mb-4">
                                    <h5>Quick links</h5>
                                    <div className="footer_navbar">
                                        {nav.map((opt, i) => {
                                            return (
                                                <NavLink key={i} to={opt?.link} className={"nav_link"}>{opt?.name}</NavLink>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="col-md-4 col-6 mb-md-0 mb-4">
                                    <h5>Help</h5>
                                    <div className="footer_navbar">
                                        <NavLink to={"/contact"} className={"nav_link"}>Contact us</NavLink>
                                        <NavLink to={"/term"} className={"nav_link"}>Terms of use</NavLink>
                                        <NavLink to={"/privacy"} className={"nav_link"}>Privacy policy</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h5>Contact us</h5>
                                    <div className="footer_address">
                                        <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                                        <p>
                                            Phone: <a href="tel:0000000000">+91 0000000000</a>
                                        </p>
                                        <p>
                                            Email: <a href="mailto:info@test.in">info@test.in</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}