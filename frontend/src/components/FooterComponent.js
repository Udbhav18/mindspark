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
                            <p>A platform for the specially abled to move up the corporate ladder. A professional network solely designed to ease the process of job applications for the handicapped.</p>
                            <div className="social-links mt-3">
                                <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                                <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                                <Link to="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></Link>
                                <Link to="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                MindSpark Colony <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +91 XXXXXXXXXX <br />
                                <strong>Email:</strong> mindspark3077@gmail.com <br />
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
