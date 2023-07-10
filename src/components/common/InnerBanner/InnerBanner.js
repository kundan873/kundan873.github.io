import React from "react";

export default function InnerBanner(props) {
    return (
        <div className="contact_banner py-5" style={{ backgroundColor: props.color }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner_content text-md-start text-center">
                            <h2>{props.heading}</h2>
                            <h5>{props.text}</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none text-center">
                        <img src={props.image} alt="" className="img-fluid" width={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}