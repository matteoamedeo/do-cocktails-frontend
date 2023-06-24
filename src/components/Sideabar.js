import React from 'react'

const Sideabar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-color position-absolute">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Sideabar