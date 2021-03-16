import React from 'react'
import {FaChevronDown, FaPizzaSlice} from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header" data-test-id="header">
            <nav>
                <div className="logo">
                    <img src="images/logo" alt="Todoist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>FaPizzaSlice</li>
                    </ul>

                    <div className="sidebar__middle">
                        <span>
                            <FaChevronDown/>
                        </span>
                        <h2>Projects</h2>
                    </div>
                    <ul className="sidebar__projects">
                        Projects will be here!
                    </ul>
                    Add Project Component Here.

                </div>
            </nav>
            
        </header>
    )
}

export default Header
