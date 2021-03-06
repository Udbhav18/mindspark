import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function EditProfile({ history }) {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo)
            history.push('/')
    }, [userInfo])

    const initialState = {
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    }

    const [formData, setFormData] = useState(initialState);
    const [displaySocialInputs, toggleDisplaySocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <>
            <Header />
            <main id="main">

                <section class="breadcrumbs">
                    <div class="container">

                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Edit Profile</li>
                        </ol>
                        <h2>Edit Profile</h2>

                    </div>
                </section>

                <section class="hero inner-page" style={{ height: '100%' }}>
                    <div class="container">
                        <h1 style={{ fontSize: '2.5rem' }}>Edit Profile <i className="fas fa-pen" style={{ fontSize: '2rem' }}></i> </h1>

                        <form className="formd my-3" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <div className="styled">
                                    <select name="status" value={status} onChange={e => onChange(e)}>
                                        <option value="0">* Select Professional Status</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Junior Developer">Junior Developer</option>
                                        <option value="Senior Developer">Senior Developer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Student or Learning">Student or Learning</option>
                                        <option value="Instructor">Instructor or Teacher</option>
                                        <option value="Intern">Intern</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <small className="form-text"
                                >Give us an idea of where you are at in your career</small
                                >
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-building"></i>
                                    <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
                                </div>
                                <small className="form-text"
                                >Could be your own company or one you work for</small
                                >
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-globe"></i>
                                    <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
                                </div>

                                <small className="form-text"
                                >Could be your own or a company website</small
                                >
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-map-marker"></i>
                                    <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
                                </div>
                                <small className="form-text"
                                >City & state suggested (eg. Boston, MA)</small
                                >
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-code"></i>
                                    <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
                                </div>
                                <small className="form-text">Please use comma separated values (eg.
                                HTML,CSS,JavaScript,PHP)</small>
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fab fa-github"></i>
                                    <input
                                        type="text"
                                        placeholder="Github Username"
                                        name="githubusername"
                                        value={githubusername}
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <small className="form-text">If you want your latest repos and a Github link, include your
                                 username</small>
                            </div>
                            <div className="form-group">
                                <div className="styled__text">
                                    <textarea
                                        name="bio"
                                        placeholder="A short bio of yourself ✍"
                                        value={bio}
                                        onChange={e => onChange(e)}
                                    ></textarea>
                                </div>
                                <small className="form-text">Tell us a little about yourself</small>
                            </div>

                            <div className="my-2">
                                <button onClick={() => toggleDisplaySocialInputs(!displaySocialInputs)} type="button" className="btn">
                                    Social {
                                        displaySocialInputs ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>
                                    }
                                </button>
                                <span>(Optional)</span>
                            </div>

                            {displaySocialInputs &&
                                <Fragment>
                                    <div className="form-group sci">
                                        <div className="styled">
                                            <i className="fab fa-twitter fa-2x"></i>
                                            <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
                                        </div>
                                    </div>

                                    <div className="form-group sci">
                                        <div className="styled">
                                            <i className="fab fa-facebook fa-2x"></i>
                                            <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
                                        </div>
                                    </div>

                                    <div className="form-group sci">
                                        <div className="styled">
                                            <i className="fab fa-youtube fa-2x"></i>
                                            <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
                                        </div>
                                    </div>

                                    <div className="form-group sci">
                                        <div className="styled">
                                            <i className="fab fa-linkedin fa-2x"></i>
                                            <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
                                        </div>
                                    </div>

                                    <div className="form-group sci">
                                        <div className="styled">
                                            <i className="fab fa-instagram fa-2x"></i>
                                            <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
                                        </div>
                                    </div>

                                </Fragment>}

                            <input type="submit" className="btn btn-primary my-1" />
                        </form>

                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}

export default EditProfile
