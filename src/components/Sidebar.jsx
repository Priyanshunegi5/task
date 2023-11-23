import React, { useState } from 'react';

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaAlignLeft } from "react-icons/fa";

import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Notificaton",
            icon: <IoMdNotificationsOutline />
        },
        {
            path: "/Time",
            name: "Time",
            icon: <IoMdTime />
        },
        {
            path: "/Task",
            name: "Task",
            icon: <BiTask />
        },
        {
            path: "/Eye",
            name: "Eye",
            icon: <GoEye />
        },
        {
            path: "/Team",
            name: "Team",
            icon: <RiTeamFill />
        },
        {
            path: "/Analytics",
            name: "Analytics",
            icon: <SiSimpleanalytics />
        }
        ,
        {
            path: "/profile",
            name: "Profile",
            icon: <CgProfile />
        
        }
    ]
    return (
        <div className="container ">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaAlignLeft onClick={toggle} />

                  
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            
                        </NavLink>
                    ))
                }
            </div>
  
            <main>{children}</main>

        
        </div>
    );
};

export default Sidebar;