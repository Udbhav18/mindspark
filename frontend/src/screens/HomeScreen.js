import React from 'react'
import { Link } from 'react-router-dom'
import ValueSection from '../components/homeScreen/ValueSection'
import CountSection from '../components/homeScreen/CountSection'
import ServicesSection from '../components/homeScreen/ServicesSection'
import PricingSection from '../components/homeScreen/PricingSection'
import TestimonialsSection from '../components/homeScreen/TestimonialsSection'
import TeamSection from '../components/homeScreen/TeamSection'
import ClientSection from '../components/homeScreen/ClientSection'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function HomeScreen() {
    return (
        <>
            <Header />
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">A platform for the physically challenged to move up the corporate ladder</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">A professional network solely designed to ease the process of job applications for the handicapped</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <Link to="/login" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/undraw_people_search_wctu.svg" className="img-fluid" alt=""></img>
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">
                <ValueSection />
                <CountSection />
                <ServicesSection />
                <PricingSection />
                <TestimonialsSection />
                <TeamSection />
                <ClientSection />
            </main>

            <FooterComponent />
        </>
    )
}

export default HomeScreen
