import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css';


export default function Navigation({hideNav}) {
    return (

        <nav id={"Nav"} className={hideNav ? 'slideOut' : 'slideIn'}>
            <ul>
                <li className={"Li"}>
                    <NavLink to='/about' className={"link"} activeClassName="selected">
                        About Me
                    </NavLink>
                </li>
                <li className={"Li"}>
                    <NavLink to='/resume' className={"link"} activeClassName="selected">
                        Resume
                    </NavLink>
                </li>
                <li className={"Li"}>
                    <NavLink to='/portfolio' className={"link"} activeClassName="selected">
                        Portfolio
                    </NavLink>
                </li>
                <li className={"Li"}>
                    <NavLink to='/interests' className={"link"} activeClassName="selected">
                        Interests
                    </NavLink>
                </li>
                <li className={"Li"}>
                    <NavLink to='/contact' className={"link"} activeClassName="selected">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

