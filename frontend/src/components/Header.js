import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">
                        <i className="far fa-lightbulb" style={{ fontSize: '1.7rem', marginRight: '0.4rem', marginBottom: '0.1rem' }}></i>
                        <span>MindSpark</span>
                    </Link>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="#about">About</Link></li>
                            <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto" to="#portfolio">Portfolio</Link></li>
                            <li><Link className="nav-link scrollto" to="/#team">Team</Link></li>
                            <li><Link to="blog.html">Blog</Link></li>
                            <li className="dropdown"><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="#">Drop Down 1</Link></li>
                                    <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Drop Down 2</Link></li>
                                    <li><Link to="#">Drop Down 3</Link></li>
                                    <li><Link to="#">Drop Down 4</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
                            <li><Link className="getstarted scrollto" to="/login">Get Started</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header
