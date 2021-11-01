import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <Navbar expand = 'lg' bg = 'white' sticky = 'top'>
                <NavLink className = 'nav-link' to = '/'>
                    <div>
                        <h1>Kevin Phan</h1>
                    </div>
                </NavLink>
                <ul class = 'navbar-nav ml-auto navitem-indent'>
                    <li class = 'nav-item'>
                        <NavLink to = '/about'>
                            <div class = 'nav-font text-light'>About Me</div>
                        </NavLink>
                    </li>
                    <li class = 'nav-item'>
                        <NavLink to = '/projects'>
                            <div class = 'nav-font text-light'>Projects</div>
                        </NavLink>
                    </li>
                    <li class = 'nav-item'>
                        <NavLink to = '/contact'>
                            <div class = 'nav-font text-light'>Contact</div>
                        </NavLink>
                    </li>
                    <li class = 'nav-item'>
                        <NavLink to = '/resume'>
                            <div class = 'nav-font text-light'>Resume</div>
                        </NavLink>
                    </li>
                </ul> 
            </Navbar>
        </div>
    );
}

export default Navigation;