import React from 'react'
import { Link } from 'react-router-dom'

function TeamSection() {
    return (
        <section id="team" className="team">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Team</h2>
                    <p>Our hard working team</p>
                </header>

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""></img>
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Udbhav Somani</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <div className="member-img">
                                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""></img>
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Neelaksh Tayal</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""></img>
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Mihir Kumar Roy</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                        <div className="member">
                            <div className="member-img">
                                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""></img>
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Aarya Pathania</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" style={{ marginLeft: '50%', transform: 'translateX(-50%)' }} data-aos="fade-up" data-aos-delay="400">
                        <div className="member">
                            <div className="member-img">
                                <img src="assets/img/team/team-5.jpg" className="img-fluid" alt=""></img>
                                <div className="social">
                                    <Link to=""><i className="bi bi-twitter"></i></Link>
                                    <Link to=""><i className="bi bi-facebook"></i></Link>
                                    <Link to=""><i className="bi bi-instagram"></i></Link>
                                    <Link to=""><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Rishabh Sood</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default TeamSection
