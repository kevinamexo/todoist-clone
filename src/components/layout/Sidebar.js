import React from 'react'
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className=" sidebar" data-testid="sidebar">
            <ul className="sidebar_generic">
                <li>
                    <span>
                        <FaInbox/>
                    </span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar/>
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar/>
                    </span>
                    <span>Next 7 days</span>    
                </li>  
            </ul>
        </div>
    )
}

export default Sidebar
