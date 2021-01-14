import React from 'react'
import { MDBIcon } from "mdbreact";

export default function Contact() {
    return (
        <div class="third">
            <div class="section-title mb-5">
                <h6>Contact</h6>
                <h2>Get In Touch</h2>
            </div>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="custom-form">
                        <form class="contact-form" name="contact-form" id="c_form">
                            <div class="form-row">
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" placeholder="Your name..." required="" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" placeholder="Your email..." required="" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <input type="text" name="subject" id="subject" class="form-control" placeholder="Your subject..." required="" />
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <textarea name="message" id="message" class="form-control" cols="30" rows="5" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                                <div class="form-message"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="contact-item d-flex">
                        <MDBIcon icon="envelope" size="3x" className="cyan-text pr-3 " />
                        <div class="contact-content">
                            <h5>Email Address:</h5>
                            <h6 class="text-muted">kushalbiyani@gmail.com</h6>
                        </div>
                    </div>
                    <div class="contact-item d-flex">
                        <MDBIcon icon="phone-alt" size="3x" className="cyan-text pr-3 " />
                        <div class="contact-content">
                            <h5>Phone No:</h5>
                            <h6 class="text-muted">+91 12345 67890 , +91 11111 0000</h6>
                        </div>
                    </div>
                    <div class="contact-item d-flex">
                        <MDBIcon icon="map-marker-alt" size="3x" className="cyan-text pr-3 " />
                        <div class="contact-content">
                            <h5>Office Address:</h5>
                            <h6 class="text-muted">123 XYZ Street, New Delhi, India, 123456</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <button class="btn" type="submit">Send Message</button>
            </div>
        </div>
    )
}
