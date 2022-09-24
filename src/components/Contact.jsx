import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5" style={{ marginTop: "3rem" }}>
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>
                            Contact us
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="contactFormName" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="contactFormName" placeholder="Your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactFormEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="contactFormEmail" placeholder="name@contact.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="contactFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button className="btn btn-outline-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="col-md 5 d-flex justify-content-center">
                        <img
                            src="/assets/contact-us.jpg"
                            alt="Contact page"
                            height="500px"
                            width="600px"
                            style={{ marginTop: "-5rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;