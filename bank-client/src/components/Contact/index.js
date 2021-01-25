import React from 'react'
import { MDBIcon } from "mdbreact";

export default function Contact() {
    return (
        <div className="third">
            <div className="section-title mb-5">
                <h6>Contact</h6>
                <h2>Get In Touch</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <div className="custom-form">
                        <form className="contact-form" name="contact-form" id="c_form">
                            <div className="form-row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your name..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" placeholder="Your email..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12">
                                    <div className="form-group">
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Your subject..." required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" cols="30" rows="5" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                                <div className="form-message"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="contact-item d-flex">
                        <MDBIcon icon="envelope" size="3x" className="cyan-text pr-3 " />
                        <div className="contact-content">
                            <h5>Email Address:</h5>
                            <h6 className="text-muted">kushalbiyani@gmail.com</h6>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <MDBIcon icon="phone-alt" size="3x" className="cyan-text pr-3 " />
                        <div className="contact-content">
                            <h5>Phone No:</h5>
                            <h6 className="text-muted">+91 12345 67890 , +91 11111 0000</h6>
                        </div>
                    </div>
                    <div className="contact-item d-flex">
                        <MDBIcon icon="map-marker-alt" size="3x" className="cyan-text pr-3 " />
                        <div className="contact-content">
                            <h5>Office Address:</h5>
                            <h6 className="text-muted">123 XYZ Street, New Delhi, India, 123456</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <button className="btn" type="submit">Send Message</button>
            </div>
        </div>
    )
}
