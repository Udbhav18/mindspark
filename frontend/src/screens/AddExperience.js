import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function AddExperience() {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <main id="main">

                <section className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Add Experience</li>
                        </ol>
                        <h2>Add Experience</h2>

                    </div>
                </section>

                <section className="hero inner-page" style={{ height: '100%' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '2.5rem' }}>Add Experience <i className="fas fa-code-branch" style={{ fontSize: '2rem' }}></i> </h1>
                        <p className="lead">
                            Add any developer/programming
                            positions that you have had in the past
                        </p>
                        <form className="formd my-3" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-briefcase"></i>
                                    <input type="text" placeholder="* Job Title" name="title" value={title} onChange={(e) => onChange(e)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-building"></i>
                                    <input type="text" placeholder="* Company" name="company" value={company} onChange={(e) => onChange(e)} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-map-marker"></i>
                                    <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <h4>From Date</h4>
                                <div className="styled">
                                    <input type="date" name="from" value={from} onChange={(e) => onChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <p><input type="checkbox" name="current" checked={current} onChange={e => {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled);
                                }} /> Current Job</p>
                            </div>
                            <div className="form-group">
                                <h4>To Date</h4>
                                <div className="styled">
                                    <input type="date" name="to" value={to} onChange={(e) => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="styled__text">
                                    <textarea
                                        name="description"
                                        cols="30"
                                        rows="5"
                                        placeholder="Job Description"
                                        value={description} onChange={(e) => onChange(e)}
                                    ></textarea>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary my-1" />
                        </form>

                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    )
}

export default AddExperience
