import React from 'react'
import { Link } from 'react-router-dom'

const NavPage = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">MY KSRTC</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">LogIn</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/addbus">Add Bus</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavPage