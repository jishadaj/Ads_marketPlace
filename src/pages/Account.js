import React, { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import ButtonSecondary from '../components/ButtonSecondary';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../Api/profile';
import { getAds } from '../Api/ads';

const Account = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const [profile, setProfile] = useState(null);
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setProfile(data);
                const adsData = await getAds();
                setAds(adsData);
            } catch (err) {
                setError('Failed to load profile. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className='p-20'>
            <h1 className='text-gray-500 text-lg mb-4 font-light'>
                Home <span className="mx-2"> &gt; </span> Account
            </h1>
            <div className="flex gap-6">
                <Sidebar />
                <div className="flex-1 rounded-2xl space-y-6">
                    {/* Profile Card */}
                    {profile && (
                        <div className="border p-6 shadow rounded-xl space-y-4">
                            <div className="flex justify-items-stretch">

                                <div className="flex items-center gap-4 flex-grow">
                                    <img src='' alt="Profile" className="w-16 h-16 rounded-full border-1 shadow-md" />
                                    <div>
                                        <h2 className="text-xl font-semibold whitespace-nowrap">{profile.firstName} {profile.lastName}</h2>
                                        <p className="text-sm text-gray-600">+1 234 567 890</p>
                                    </div>
                                </div>

                                <ButtonSecondary className="w-auto border-2 mt-4" onClick={() => handleNavigation('/manage/profile')}>
                                    Edit Profile
                                </ButtonSecondary>
                            </div>

                           
                            <div className="border-t my-4" />

                            
                            <div className='flex gap-5 items-center'>
                                <h3 className="text-lg font-medium">{profile.location}</h3>
                                <p className="text-sm text-gray-600">{profile.email}</p>
                                <p className="text-sm text-gray-600">{profile.contact}</p>
                            </div>
                        </div>
                    )}

                    {/* Post Cards */}
                    <div className="space-y-4">
                        {ads.length === 0 ? (
                            <p>No ads posted yet.</p>
                        ) : (
                            ads.map((ad, index) => (
                                <div key={index} className="border p-6 shadow rounded-xl flex justify-between items-center">
                                    
                                    <div className="flex items-center gap-4">
                                        <img src={ad.photo} alt="" className="w-16 h-16 object-cover" />
                                        <div>
                                            <h2 className="text-lg font-semibold">{ad.adTitle}</h2>
                                            <p className="text-sm text-gray-600">${ad.price}</p>
                                        </div>
                                    </div>

                                    
                                    <div className="flex gap-4">
                                        <ButtonSecondary className="border-2">
                                            View
                                        </ButtonSecondary>
                                        <Button onClick={() => handleNavigation(`/settings/edit-post/${ad.id}`)}>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
