import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function AddEducation() {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
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
                            <li>Add Education</li>
                        </ol>
                        <h2>Add Education</h2>

                    </div>
                </section>

                <section className="hero inner-page" style={{ height: '100%' }}>
                    <div className="container">
                        <h1 style={{ fontSize: '2.5rem' }}>Add Education <i className="fas fa-graduation-cap" style={{ fontSize: '2rem' }}></i> </h1>
                        <p className="lead">
                            Add any school, bootcamp, etc that
                            you have attended
                        </p>
                        <form className="formd my-3" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-graduation-cap"></i>
                                    <input
                                        type="text"
                                        placeholder="* School or Bootcamp"
                                        name="school"
                                        value={school} onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <i className="fas fa-certificate"></i>
                                    <input
                                        type="text"
                                        placeholder="* Degree or Certificate"
                                        name="degree"
                                        value={degree} onChange={(e) => onChange(e)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="styled">
                                    <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={(e) => onChange(e)} />
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
                                }} /> Current School or Bootcamp</p>
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
                                        placeholder="Program Description"
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

export default AddEducation
