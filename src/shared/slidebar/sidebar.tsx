// @ts-ignore
import logo from '../../assets/logo-tpk-v2.png';
import menu from '../../service/menu/menu';
import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (menuName: string): void => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName],
        }));
    };

    const toggleSubMenu = (menuName: string): void => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName],
        }));
    };

    return (
        <>
            <div className="container-slidbar">
                <div className="nav-header">
                    <div className="logo-image">
                        <img src={logo} alt="Logo"/>
                    </div>
                </div>
                {/* link menu */}
                <div className="nav-link">
                    {menu.map((menus, index) => (
                        <li key={index}>
                            {menus.sub?.length == null ? (
                                <div>
                                    <a href="#">
                                        <i className={menus.icon}></i>
                                        <span className="link-name-topic">{menus.name}</span>
                                    </a>
                                </div>
                            ) : (
                                <div className="main-menu" onClick={() => toggleMenu(menus.name)}>
                                    <a href="#">
                                        <i className={menus.icon}></i>
                                        <span className="link-name-topic">{menus.name}</span>
                                    </a>
                                </div>
                            )}
                            {/* submenu */}
                            {menus.sub?.length == null ? "" : (
                                <ul className={`sub-menu${openMenus[menus.name] ? " show-menu" : ""}`}>
                                    {menus.sub?.map((sub, index) => (
                                        <li key={index}>
                                            <div onClick={() => toggleSubMenu(menus.name)}>
                                                <a href="#" className="link-name">
                                                    <i className="ti ti-point-filled"></i>
                                                    {sub.name}
                                                </a>
                                            </div>
                                            {sub.sub?.length === null ? "" : (
                                                <ul className={`link-subs${openSubMenus[menus.name] ? " show-menu" : ""}`}>
                                                    {/* sub menu 2 */}
                                                    {sub.sub?.map((sub, index) => (
                                                        <div key={index}>
                                                            <NavLink to={sub.link}>
                                                                <a>
                                                                    <i className="ti ti-point-filled"></i>
                                                                    {sub.name}
                                                                </a>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sidebar