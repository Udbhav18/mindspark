import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'
import { getUserDetails } from '../actions/user'
import Spinner from '../components/Spinner'

function Dashboard({ history }) {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo)
            history.push('/')
        dispatch(getUserDetails())
    }, [userInfo, history, dispatch])

    const userDetails = useSelector((state) => state.userDetails)
    const { user, loading } = userDetails
    const { education, experience } = user

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
                    {loading ? <Spinner /> : (
                        <div class="container">
                            <h1 style={{ fontSize: '2.5rem' }}>{userInfo.name}</h1>
                            <div class="dash-buttons my-3">
                                <Link to="/editProfile" class="bttn btn-light"
                                ><i class="fas fa-user-circle text-primary"></i> Edit Profile</Link>
                                <Link to="/addExperience" class="bttn btn-light"
                                ><i class="fab fa-black-tie text-primary"></i> Add Experience</Link>
                                <Link to="/addEducation" class="bttn btn-light"
                                ><i class="fas fa-graduation-cap text-primary"></i> Add Education</Link>
                            </div>
                            <h3 class="my-4">Experience Credentials</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th class="hide-sm">Title</th>
                                        <th class="hide-sm">Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {experience && experience.map(exp => (
                                        <tr key={exp._id}>
                                            <td>{exp.title}</td>
                                            <td className="hide-sm">{exp.company}</td>
                                            <td>
                                                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                                                    exp.to === "" ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 class="my-4">Education Credentials</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>School</th>
                                        <th class="hide-sm">Degree</th>
                                        <th class="hide-sm">Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {education && education.map(edu => (
                                        <tr>
                                            <td>{edu.school}</td>
                                            <td className="hide-sm">{edu.degree}</td>
                                            <td>
                                                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                                                    edu.to === "" ? ('Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div class="my-2">
                                <button class="btn btn-danger">
                                    <i class="fas fa-trash" style={{ marginRight: '0.5rem' }}></i>
                                Account
                        </button>
                            </div>
                        </div>)}
                </section>
            </main>
            <FooterComponent />
        </>
    )
}

export default Dashboard
