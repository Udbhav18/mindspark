import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function Dashboard({ history }) {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo)
            history.push('/')
    }, [userInfo, history])

    return (
        <>
            <Header />
            <main id="main">

                <section class="breadcrumbs">
                    <div class="container">

                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Dashboard</li>
                        </ol>
                        <h2>Dashboard</h2>

                    </div>
                </section>

                <section class="hero inner-page" style={{ height: '100%' }}>
                    <div class="container">
                        <h1 style={{ fontSize: '2.5rem' }}>Rishabh Sood</h1>
                        <div class="dash-buttons my-3">
                            <Link to="edit-profile.html" class="bttn btn-light"
                            ><i class="fas fa-user-circle text-primary"></i> Edit Profile</Link
                            >
                            <Link to="add-experience.html" class="bttn btn-light"
                            ><i class="fab fa-black-tie text-primary"></i> Add Experience</Link
                            >
                            <Link to="add-education.html" class="bttn btn-light"
                            ><i class="fas fa-graduation-cap text-primary"></i> Add Education</Link
                            >
                        </div>
                        <h3 class="my-4">Experience Credentials</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th class="hide-sm">Title</th>
                                    <th class="hide-sm">Years</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tech Guy Web Solutions</td>
                                    <td class="hide-sm">Senior Developer</td>
                                    <td class="hide-sm">
                                        02-03-2009 - 01-02-2014
                                </td>
                                    <td>
                                        <button class="btn btn-danger">
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Traversy Media</td>
                                    <td class="hide-sm">Instructor & Developer</td>
                                    <td class="hide-sm">
                                        02-03-2015 - Now
                                </td>
                                    <td>
                                        <button class="btn btn-danger">
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 class="my-4">Education Credentials</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>School</th>
                                    <th class="hide-sm">Degree</th>
                                    <th class="hide-sm">Years</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Northern Essex</td>
                                    <td class="hide-sm">Associates</td>
                                    <td class="hide-sm">
                                        02-03-2007 - 01-02-2009
                                </td>
                                    <td>
                                        <button class="btn btn-danger">
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="my-2">
                            <button class="btn btn-danger">
                                <i class="fas fa-trash" style={{ marginRight: '0.5rem' }}></i>
                                Account
                        </button>
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}

export default Dashboard
