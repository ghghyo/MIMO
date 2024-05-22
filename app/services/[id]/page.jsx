import React from 'react';
import servicesData from '@/components/data/services-data';
import ServicesDetailClient from './ServicesDetailClient';

// Function to generate static parameters
export async function generateStaticParams() {
    return servicesData.map(service => ({
        id: service.id.toString(),
    }));
}

const ServicesDetailPage = ({ params }) => {
    return <ServicesDetailClient params={params} />;
};

export default ServicesDetailPage;
