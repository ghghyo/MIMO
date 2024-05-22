import React from 'react';
import NotFoundClient from './NotFoundClient';

// Function to generate static parameters
export async function generateStaticParams() {
    // Returning an empty array as no static parameters are needed for the 404 page
    return [];
}

const NotFound = () => {
    return <NotFoundClient />;
};

export default NotFound;