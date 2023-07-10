import React from "react";
import images from "../../config/index"
import { EnvelopeFill, PinMapFill, TelephoneFill } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import InnerBanner from "../common/InnerBanner/InnerBanner";

export default function Contact() {
    return (
        <div className="page_content">
            <InnerBanner
                color="rgb(229, 227, 255)"
                image={images.contact}
                heading="Contact us"
                text="Feel free to reach us at any time."
            />
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="d-flex align-items-start mb-md-0 mb-4">
                            <div className="contact_icon">
                                <EnvelopeFill />
                            </div>
                            <div>
                                <h4 className="mb-1">Email</h4>
                                <a href="mailto:info@test.in">info@test.in</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-start mb-md-0 mb-4">
                            <div className="contact_icon">
                                <TelephoneFill />
                            </div>
                            <div>
                                <h4 className="mb-1">Phone</h4>
                                <a href="tel:0000000000">+91 0000000000</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-start mb-md-0 mb-4">
                            <div className="contact_icon">
                                <PinMapFill />
                            </div>
                            <div>
                                <h4 className="mb-1">Address</h4>
                                <p>Akshya Nagar 1st Block 1st Cross,<br /> Rammurthy nagar, Bangalore-560016</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h3 className="text-center">Get Free Consultation</h3>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your email</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your phone number</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>
                                <button className="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}