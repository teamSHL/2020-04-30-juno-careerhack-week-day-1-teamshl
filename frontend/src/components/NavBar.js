// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>SHLC News (home)</NavLink>
                    </li>
                    <li>
                        <NavLink to="/thread">articles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/submit">submit</NavLink>
                    </li>
                    <li>
                        <div>
                            {!isAuthenticated && (
                                <button onClick={() => loginWithRedirect({})}>Log in</button>
                            )}
                            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                            {isAuthenticated && (
                                <span>
                                    <Link to="/">Home</Link>&nbsp;
                                    <Link to="/profile">Profile</Link>
                                </span>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;