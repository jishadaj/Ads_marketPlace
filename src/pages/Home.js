import React from "react";
import banner from '../assets/banner.png'
import calendar from '../assets/calendar.png'
import filter from '../assets/filter.png'
import views from '../assets/views.png'


const Home = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Banner */}
            <div className="w-full h-1/4">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="my-6 text-center">
                <h2 className="text-sm font-medium text-[#F50963]">WHATS' NEW</h2>
                <h3 className="text-4xl text-black">Fresh Recommendations</h3>
            </div>


            <div className="w-full px-28 flex justify-between items-center mb-6">
                <span className="text-black font-medium"><span className="text-[#F50963] font-bold">33</span> Items</span>
                <div className="flex space-x-4">
                    <img src={calendar} alt="Icon 1" className="h-8 w-8" />
                    <img src={filter} alt="Icon 2" className="h-8 w-8" />
                </div>
            </div>


            <div className="grid grid-cols-4 gap-6 px-28 py-8 w-full">
                {[1, 2, 3, 4].map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-md hover:shadow-lg transition-shadow h-96 flex flex-col justify-between"
                    >

                        <div className="h-52 bg-gray-200 mb-4 flex items-center justify-center">
                            <p className="text-sm text-black">Image Placeholder</p>
                        </div>


                        <div className="flex flex-col space-y-2 px-4 pb-4">

                            <p className="text-sm text-black">Location, Date</p>


                            <h1 className="text-lg font-semibold text-gray-800">
                                Product Name
                            </h1>


                            <div className="flex justify-between items-center mt-auto">
                                <p className="text-[#F50963] font-bold">$Price</p>
                                <img src={views} alt="View Icon" className="h-10 w-10" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
