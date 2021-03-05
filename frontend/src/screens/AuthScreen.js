import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CameraPopup from '../components/Auth/CameraPopup'
import '../components/Auth/authstyle.css'
import log from '../components/Auth/img/log.svg'
import reg from '../components/Auth/img/register.svg'

function AuthScreen() {
    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')

    const [regEmail, setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')
    const [regPassword2, setRegPassword2] = useState('')

    const [cameraShow, setCameraShow] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "assets/js/auth.js";
        script.async = true;

        document.body.appendChild(script);
    }, [])

    const action = (e) => {
        e.preventDefault()

        var speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new speechRecognition();
        recognition.lang = "en-GB";

        recognition.onresult = function (event) {
            // console.log(event);
            // document.getElementById(`i_${e.target.id}`).value = event.results[0][0].transcript;
            eval(`set${e.target.id}('${event.results[0][0].transcript}')`)
        }
        recognition.start();
    }

    return (
        <div>
            <CameraPopup
                show={cameraShow}
                onHide={() => setCameraShow(false)}
            />
            <div className="conta">
                <div className="forms-conta">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" value={logEmail} onChange={(e) => setLogEmail(e.target.value)} />
                                <i className="fas fa-microphone" id="LogEmail" onClick={(e) => action(e)}></i>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" value={logPassword} onChange={(e) => setLogPassword(e.target.value)} />
                                <i className="fas fa-camera" onClick={() => setCameraShow(true)}></i>
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
                                <i className="fas fa-microphone" id="RegEmail" onClick={(e) => action(e)}></i>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
                                <i className="fas fa-camera"></i>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Confirm Password" value={regPassword2} onChange={(e) => setRegPassword2(e.target.value)} />
                                <i className="fas fa-camera"></i>
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link to="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-conta">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                        </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">
                                Sign in
                        </button>
                        </div>
                        <img src={reg} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthScreen
