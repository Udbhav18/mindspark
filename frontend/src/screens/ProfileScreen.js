import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'
import { getUserDetails } from '../actions/user'
import Spinner from '../components/Spinner'
import '../components/profileScreen/style.css'
import Moment from 'react-moment'

function ProfileScreen({ history }) {
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

    return (
        <>
            <Header />
            <div className="contai">
                {loading ? <Spinner /> : user && userInfo && (
                    <div className="profile-grid my-1">
                        <div className="profile-top backg-primary p-2" data-aos="zoom-in">
                            <img
                                className="round-img my-1"
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                alt=""
                            />
                            <h1 className="large">{userInfo.name}</h1>
                            <p className="lead">{user.designation}{user.company && <span> at {user.company}</span>}</p>
                            <p>{user.location}</p>
                            <div className="icons my-1">
                                {user.website && (
                                    <Link to={user.website} target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-globe fa-2x"></i>
                                    </Link>
                                )}

                                {user.social && user.social.twitter && (
                                    <Link to={user.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </Link>
                                )}

                                {user.social && user.social.facebook && (
                                    <Link to={user.social.facebook} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </Link>
                                )}

                                {user.social && user.social.linkedin && (
                                    <Link to={user.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </Link>
                                )}

                                {user.social && user.social.youtube && (
                                    <Link to={user.social.youtube} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube fa-2x"></i>
                                    </Link>
                                )}

                                {user.social && user.social.instagram && (
                                    <Link to={user.social.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="profile-about bg-light p-2" data-aos="fade-up">
                            <h2 className="text-primar" style={{ color: "#17a2b8" }}>{userInfo.name.trim().split(' ')[0]}'s Bio</h2>
                            <p>
                                {user.bio}
                            </p>
                            <div className="line"></div>
                            <h2 className="text-primar">Skill Set</h2>
                            <div className="skills">
                                {user.skills && user.skills.map((skill, index) => (
                                    <div className="p-1" key={index}><i className="fa fa-check"></i> {skill}</div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-exp bg-white p-2" data-aos="fade-right">
                            <h2 className="text-primar">Experience</h2>
                            {user.experience && user.experience.length > 0 ? (
                                user.experience.map(exp => (
                                    <div key={exp._id}>
                                        <h3 className="text-dark">{exp.company}</h3>
                                        <p><Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                                            exp.to === '' ? ('Current') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                                        }</p>
                                        <p><strong>Position: </strong>{exp.title}</p>
                                        <p>
                                            <strong>Description: </strong>{exp.description}
                                        </p>
                                    </div>
                                ))
                            ) : <h4>No experience credentials</h4>}
                        </div>

                        <div className="profile-edu bg-white p-2" data-aos="fade-left">
                            <h2 className="text-primar">Education</h2>
                            {user.education && user.education.length > 0 ? (
                                user.education.map(education => (
                                    <div key={education._id}>
                                        <h3 className="text-primary">{education.school}</h3>
                                        <p><Moment format='YYYY/MM/DD'>{education.from}</Moment> - {
                                            education.to === null ? ('Current') : (<Moment format='YYYY/MM/DD'>{education.to}</Moment>)
                                        }</p>
                                        <p><strong>Degree: </strong>{education.degree}</p>
                                        <p><strong>Field Of Study: </strong>{education.fieldofstudy}</p>
                                        <p>
                                            <strong>Description: </strong>{education.description}
                                        </p>
                                    </div>
                                ))
                            ) : <h4>No education credentials</h4>}
                        </div>
                    </div>)}
            </div>
            <FooterComponent />
        </>
    )
}

export default ProfileScreen
