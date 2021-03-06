import React from 'react'
import { Link } from 'react-router-dom'

function FooterComponent() {
    return (
        <footer id="footer" className="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <Link to="index.html" className="logo d-flex align-items-center">
                                <img src="assets/img/mindspark.svg" alt=""></img>
                                <span>MindSpark</span>
                            </Link>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div className="social-links mt-3">
                                <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                                <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                                <Link to="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></Link>
                                <Link to="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Home</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">About us</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Services</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Web Design</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Web Development</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Product Management</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Marketing</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>MindSpark</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by NSFW
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
