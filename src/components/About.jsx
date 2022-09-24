import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5" style={{ marginTop: "6rem" }}>
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="text-primary fw-bold mb-4">About us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio veritatis placeat quod alias atque iste, 
                            accusantium aliquid cupiditate nam nihil, perferendis magnam. Commodi nemo iste eaque impedit, distinctio facilis quam possimus 
                            adipisci voluptate ratione harum perspiciatis ad nobis expedita obcaecati 
                            nihil accusamus! Perferendis vero hic harum doloribus ullam, cumque quaerat repudiandae blanditiis 
                            et quasi in dolorum molestias quod amet sunt consectetur necessitatibus at quos soluta dolorem.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">
                            Contact us
                        </NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-contect-center">
                        <img 
                        src="/assets/about-us.jpg" 
                        alt="About us" 
                        height="400px"
                        width="400px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;