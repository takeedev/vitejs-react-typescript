import logo from '../../assets/logo-tpk-v2.png';
import menu from '../../service/menu/menu';
import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import './sidebar.css'

interface SidebarProps {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({setIsSidebarOpen, isSidebarOpen, toggleSidebar}) => {

    const [menuStates, setMenuStates] = useState<{
        [menuName: string]: { isOpen: boolean; subMenu?: { [subMenuName: string]: boolean } };
    }>({});
    const toggleMenu = (menuName: string) => {
        setMenuStates((prev) => ({
            ...prev,
            [menuName]: {
                ...prev[menuName],
                isOpen: !prev[menuName]?.isOpen,
            },
        }));
    };

    const toggleSubMenu = (menuName: string, subMenuName: string) => {
        setMenuStates((prev) => ({
            ...prev,
            [menuName]: {
                ...prev[menuName],
                subMenu: {
                    ...prev[menuName]?.subMenu,
                    [subMenuName]: !prev[menuName]?.subMenu?.[subMenuName],
                },
            },
        }));
    };

    return (
        <>
            <div className={`container-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <div className={`nav-header`}>
                    <i className={"ti ti ti-caret-left-filled"} onClick={toggleSidebar}></i>
                    <div className="logo-image">
                        <img src={logo} alt="Logo"/>
                    </div>
                </div>
                {/* link menu */}
                <div className="menu">
                    {menu.map((menus) => (
                        <div key={menus.name}>
                            <div className="menu-item" onClick={() => toggleMenu(menus.name)}>
                                <i className={menus.icon}></i>
                                <span>{menus.name}</span>
                            </div>
                            {menus.sub && (
                                <div className={`submenu ${menuStates[menus.name]?.isOpen ? "show" : ""}`}>
                                    {menus.sub.map((sub) => (
                                        <div key={sub.name} className="submenu-item">
                                            <div onClick={() => toggleSubMenu(menus.name, sub.name)}>
                                                <span>- {sub.name}</span>
                                            </div>
                                            {sub.sub && (
                                                <div
                                                    className={`sub-submenu ${menuStates[menus.name]?.subMenu?.[sub.name] ? "show" : ""}`}>
                                                    {sub.sub.map((sub2) => (
                                                        <div key={sub2.name} className="sub-submenu-end">
                                                            <NavLink to={sub2.link}
                                                                     className={({isActive}) => (isActive ? "active-link" : "inactive-link")}>
                                                                <div key={sub2.name}>
                                                                    {sub2.name}
                                                                </div>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {!isSidebarOpen && (
                <i className={"ti ti ti-caret-right-filled open-icon"} onClick={() => setIsSidebarOpen(true)}></i>
            )}
        </>
    )
}

export default Sidebar