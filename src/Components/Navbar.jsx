import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Navbar({ children }) {
    return (
        <div>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 sticky-top">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#first" className="nav-link" data-to-scrollspy-id="first">First</a>
                    </li>
                    <li className="nav-item">
                        <a href="#second" className="nav-link" data-to-scrollspy-id="second">Second</a>
                    </li>
                    <li className="nav-item">
                        <a href="#third" className="nav-link" data-to-scrollspy-id="third">Third</a>
                    </li>
                    <li className="nav-item">
                        <a href="#fourth" className="nav-link" data-to-scrollspy-id="fourth">Fourth</a>
                    </li>
                </ul>
            </nav>

            {children}
        </div>
    )
}