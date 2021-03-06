import React from 'react'

function CountSection() {
    return (
        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext" style={{ color: '#ee6c20' }}></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Recruiters</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-headset" style={{ color: '#15be56' }}></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Hours Of Development</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-people" style={{ color: '#bb0852' }}></i>
                            <div>
                                <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default CountSection
