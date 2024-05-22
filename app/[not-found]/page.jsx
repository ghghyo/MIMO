import ErrorPage from '@/components/pages/error';
import React from 'react';

// Function to generate static parameters
export async function generateStaticParams() {
    // Returning an empty array as no static parameters are needed for the 404 page
    return [];
}

const NotFound = () => {
    return (
        <>
            <ErrorPage />
        </>
    );
};

export default NotFound;
