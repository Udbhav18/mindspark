import React from 'react'

function ValueSection() {
    return (
        <div>
            <section id="values" className="values">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>Our Features</h2>
                        <p>Here's how we ease out your process!</p>
                    </header>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="box" data-aos="fade-up" data-aos-delay="200">
                                <img src="assets/img/values-1.png" className="img-fluid" alt=""></img>
                                <h3>Text To Speech</h3>
                                <p>Now fill all forms hands free, Speak as you go and we'll write it down all for you!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" data-aos="fade-up" data-aos-delay="400">
                                <img src="assets/img/values-2.png" className="img-fluid" alt=""></img>
                                <h3>Easy login with FaceID</h3>
                                <p>No need to remember lengthy passwords, Sign in using FaceId!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" data-aos="fade-up" data-aos-delay="600">
                                <img src="assets/img/undraw_privacy_protection_nlwy.svg" className="img-fluid" alt=""></img>
                                <h3>User Privacy</h3>
                                <p>Your data is safe with us, We only share it with recruiters!</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default ValueSection
