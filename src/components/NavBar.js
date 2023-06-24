import React from 'react'
import Logo from '../resources/cocktail-logo.png'
import Sideabar from './Sideabar'
import { useReducer } from 'react'


const NavBar = ({ onQuery }) => {

    return (
        <nav className="navbar p-4 myNav mt-2 bg-body-color">
            <div className="container-fluid">
                <a className="navbar-brand m-auto logo text-light" href="http://localhost:3000/">
                    Campure's <span className='text-primary'>DRINKS</span>
                </a>
            </div>
            <img src={Logo} alt='Logo' className='position-absolute top-0 start-50 translate-middle-x' width={50} />
        </nav>
    )
}

export default NavBar