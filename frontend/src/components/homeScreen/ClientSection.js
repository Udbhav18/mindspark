import React from 'react'

function ClientSection() {
    return (
        <section id="clients" className="clients">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Clients</h2>
                    <p>Temporibus omnis officia</p>
                </header>

                <div className="clients-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""></img></div>
                        <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""></img></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

        </section>
    )
}

export default ClientSection
