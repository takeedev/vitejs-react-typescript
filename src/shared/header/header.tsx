import logo from '../../assets/profile-ptk.png';
import React, {useState} from 'react'
import './header.css'

function header() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen((prev) => !prev);
    };

    return (
        <div className='container-header'>
            <div className='sdf'>
                <div className='image'>
                    <img src={logo} alt={"profile"}></img>
                </div>
                <div className='block-name'>
                    <div className='txt-name'>
                        <a>sawatdee mechai</a>
                    </div>
                    <div className='txt-role'>
                        <a>Administrator</a>
                    </div>
                </div>
                <div className='button-down' onClick={togglePopup}>
                    <i className='ti ti-chevron-down'></i>
                </div>
                {isPopupOpen && (
                    <div className={`popup ${isPopupOpen ? "open" : ""}`}>
                        <div className="arrow"></div>
                        <ul>
                            <li>
                                <i className="ti ti-user-scan"></i>
                                Profile
                            </li>
                            <li>
                                <i className="ti ti-settings"></i>
                                Settings
                            </li>
                            <li>
                                <i className="ti ti-logout-2"></i>
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default header