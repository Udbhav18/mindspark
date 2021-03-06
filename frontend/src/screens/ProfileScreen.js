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
    const { designation, company, location, website, social, bio, skills, experience, education } = user

    return (
        <>
            <Header />
            <div className="contai">
                {loading ? <Spinner /> : (
                    <div className="profile-grid my-1">
                        <div className="profile-top backg-primary p-2" data-aos="zoom-in">
                            <img
                                className="round-img my-1"
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                                alt=""
                            />
                            <h1 className="large">{userInfo.name}</h1>
                            <p className="lead">{designation}{company && <span> at {company}</span>}</p>
                            <p>{location}</p>
                            <div className="icons my-1">
                                {website && (
                                    <Link to={website} target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-globe fa-2x"></i>
                                    </Link>
                                )}

                                {social && social.twitter && (
                                    <Link to={social.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </Link>
                                )}

                                {social && social.facebook && (
                                    <Link to={social.facebook} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </Link>
                                )}

                                {social && social.linkedin && (
                                    <Link to={social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </Link>
                                )}

                                {social && social.youtube && (
                                    <Link to={social.youtube} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube fa-2x"></i>
                                    </Link>
                                )}

                                {social && social.instagram && (
                                    <Link to={social.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="profile-about bg-light p-2" data-aos="fade-up">
                            <h2 className="text-primar" style={{ color: "#17a2b8" }}>{userInfo.name.trim().split(' ')[0]}'s Bio</h2>
                            <p>
                                {bio}
                            </p>
                            <div className="line"></div>
                            <h2 className="text-primar">Skill Set</h2>
                            <div className="skills">
                                {skills && skills.map((skill, index) => (
                                    <div className="p-1" key={index}><i className="fa fa-check"></i> {skill}</div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-exp bg-white p-2" data-aos="fade-right">
                            <h2 className="text-primar">Experience</h2>
                            {experience && experience.length > 0 ? (
                                experience.map(exp => (
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
                            {education && education.length > 0 ? (
                                education.map(education => (
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
