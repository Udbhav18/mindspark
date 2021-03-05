import React from 'react'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'

function DefaultScreen() {
    return (
        <>
            <Header />
            <main id="main">

                <section class="breadcrumbs">
                    <div class="container">

                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Inner Page</li>
                        </ol>
                        <h2>Inner Page</h2>

                    </div>
                </section>

                <section class="inner-page">
                    <div class="container">
                        <p>
                            Example inner page template
                    </p>
                    </div>
                </section>

            </main>
            <FooterComponent />
        </>
    )
}

export default DefaultScreen