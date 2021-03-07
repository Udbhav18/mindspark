import React from 'react'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function DefaultScreen() {
    return (
        <>
            <Header />
            <section class="contai" style={{ marginTop: '2rem' }}>
                <h1 class="large text-primary">User Profiles</h1>
                <p class="lead">
                    <i class="fab fa-connectdevelop"></i> Judge and Recruit right here!
                </p>
                <div class="profiles">
                    <div class="profile bg-light">
                        <img
                            class="round-img"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            alt=""
                        />
                        <div>
                            <h2>John Doe</h2>
                            <p>Developer at Microsoft</p>
                            <p>Seattle, WA</p>
                            <a href="profile.html" class="bttn btn-dark">View Profile</a>
                        </div>

                        <ul>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> HTML
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> CSS
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> JavaScript
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> Python
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> C#
                            </li>
                        </ul>
                    </div>

                    <div class="profile bg-light">
                        <img
                            class="round-img"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            alt=""
                        />
                        <div>
                            <h2>John Doe</h2>
                            <p>Developer at Microsoft</p>
                            <p>Seattle, WA</p>
                            <a href="profile.html" class="bttn btn-dark">View Profile</a>
                        </div>

                        <ul>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> HTML
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> CSS
                            </li>
                            <li class="text-primary">
                                <i class="fas fa-check"></i> JavaScript
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <FooterComponent />
        </>
    )
}

export default DefaultScreen