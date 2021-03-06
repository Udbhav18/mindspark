import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/user'

function Header() {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="assets/img/mindspark.svg" className='img-fluid' alt="mindSpark"></img>
                        <span>MindSpark</span>
                    </Link>

                    <nav id="navbar" className="navbar">
                        {userInfo ? (
                            <ul>
                                <li><Link className="nav-link scrollto"><i className="fas fa-user" style={{ marginRight: '0.5rem' }}></i> {userInfo.name}</Link></li>
                                <li><Link className="nav-link scrollto" to="/dashboard">Dashboard</Link></li>
                                <li><Link className="nav-link scrollto" to="/profile">Profile</Link></li>
                                <li><Link className="nav-link scrollto" to="/inbox">Inbox</Link></li>
                                <li><Link className="getstarted scrollto" onClick={(e) => onLogout(e)}>Sign Out</Link></li>
                            </ul>) :
                            (
                                <ul>
                                    <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
                                    <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
                                    <li><Link className="nav-link scrollto" to="#team">Team</Link></li>
                                    <li><Link className="nav-link scrollto" to="#footer">Contact</Link></li>
                                    <li><Link className="getstarted scrollto" to="/login">Sign In</Link></li>
                                </ul>
                            )}
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header
