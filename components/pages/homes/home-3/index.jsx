"use client";
import React from 'react';


const HomeThree = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-purple-100">
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <iframe 
                    src="https://player.vimeo.com/video/915755614?autoplay=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-[80vh]"
                    title="MIMO Cities"
                ></iframe>
            </div>
        </div>
    );
};

export default HomeThree;
