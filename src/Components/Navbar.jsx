import React from 'react'

export default function Navbar({ children }) {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="#home" className="nav-link" data-to-scrollspy-id="home">
                                    home
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" className="nav-link" data-to-scrollspy-id="service">
                                    service
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link" data-to-scrollspy-id="portfolio">
                                    portfolio
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#skill" className="nav-link" data-to-scrollspy-id="skill">
                                    skill
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link" data-to-scrollspy-id="testimonial">
                                    testimonial
                                    <span id='line'></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link" data-to-scrollspy-id="contact">
                                    contact
                                    <span id='line'></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>








            {children}
        </div>
    )
}