"use client";
import Link from 'next/link'; // Ensure you have this import

const HomeSplash = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex w-full h-full flex-col lg:flex-row relative">
                <div className="flex flex-col items-center justify-center w-full h-1/2 lg:w-1/2 lg:h-full bg-[#905b8a] text-white">
                    <div className="flex flex-col items-center mt-[10%]">
                        <img className="w-[8rem] h-[8rem] lg:w-[20rem] lg:h-[20rem] rounded-full shadow-2xl" src="assets/img/strategies.png" alt="shape" style={{ boxShadow: '0 20px 20px rgba(0, 0, 0, 1)' }} />
                    </div>
                    <h2 className="text-center mt-[8%] lg:text-4xl font-bold font-body">MIMO Strategies</h2>
                    
                    <Link className="mt-4 mb-8 py-2 px-4 bg-white text-black rounded-full font-semibold font-body" href="/home-two" style={{ boxShadow: '0 7px 7px rgba(0, 0, 0, 1)' }}>
                        Click Here For Website
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1/2 lg:w-1/2 lg:h-full bg-[#b974b2] text-white">
                    <div className="flex flex-col items-center mt-[10%]">
                        <img className="w-[8rem] h-[8rem] lg:w-[20rem] lg:h-[20rem] rounded-full shadow-2xl" src="assets/img/Cities.png" alt="shape" style={{ boxShadow: '0 20px 20px rgba(0, 0, 0, 1)' }}/>
                    </div>
                    <h2 className="text-center mt-[8%] lg:text-4xl font-bold font-body">MIMO Cities</h2>
                    
                    <Link className="mt-4 mb-8 py-2 px-4 bg-white text-black rounded-full font-body font-semibold" href="/home-three" style={{ boxShadow: '0 7px 7px rgba(0, 0, 0, 1)' }}>
                        Click Here For Website
                    </Link>
                </div>
                <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <img className="w-[9rem] h-auto rounded-full shadow-2xl" src="assets/img/MIMOcolor.jpg" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default HomeSplash;