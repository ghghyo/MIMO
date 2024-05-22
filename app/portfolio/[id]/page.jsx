import React from 'react';
import portfolioData from '@/components/data/portfolio-data';
import PortfolioDetailClient from './PortfolioDetailClient';

// Function to generate static parameters
export async function generateStaticParams() {
    return portfolioData.map(item => ({
        id: item.id.toString(),
    }));
}

const PortfolioDetailPage = ({ params }) => {
    return <PortfolioDetailClient params={params} />;
};

export default PortfolioDetailPage;
