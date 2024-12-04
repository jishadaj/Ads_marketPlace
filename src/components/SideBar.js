import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import ButtonSecondary from './ButtonSecondary';
import { logout } from '../utils/auth';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isActive = (path) => location.pathname === path;
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="w-72 p-6 border shadow rounded-2xl">

            <div className="space-y-4">

                <ButtonSecondary
                    className={`${isActive('/manage/account') ? 'bg-black text-white' : null
                        }`}
                    onClick={() => handleNavigation('/manage/account')}
                >
                    My Account
                </ButtonSecondary>


                <ButtonSecondary
                    className={`${isActive('/manage/profile') ? 'bg-black text-white' : null
                        }`}
                    onClick={() => handleNavigation('/manage/profile')}
                >
                    Profile
                </ButtonSecondary>


                <ButtonSecondary
                    className={`${isActive('/manage/ads') ? 'bg-black text-white' : null
                        }`}
                    onClick={() => handleNavigation('/manage/ads')}
                >
                    Ads
                </ButtonSecondary>


                <ButtonSecondary
                    className={`${isActive('/manage/posts') ? 'bg-black text-white' : null
                        }`}
                    onClick={() => handleNavigation('/manage/posts')}
                >
                    <span className='text-[#F50963] font-medium'>Post Ads</span>
                </ButtonSecondary>


                <ButtonSecondary
                    className={`${isActive('/logout') ? 'bg-black text-white' : null
                        }`}
                    onClick={handleLogout}
                >
                    Logout
                </ButtonSecondary>
            </div>
        </div>
    );
};

export default Sidebar;
