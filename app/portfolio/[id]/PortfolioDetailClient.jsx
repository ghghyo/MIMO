"use client"

import { useParams, useRouter } from "next/navigation";
import portfolioData from '@/components/data/portfolio-data';
import PortfolioDetails from "@/components/pages/portfolio/portfolio-details";

const PortfolioDetailClient = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const router = useRouter();

    if (!singleData) {
        if (typeof window !== 'undefined') {
            router.push("/404-error");
        }
        return null; // Render nothing on the server
    }

    return (
        <>
            <PortfolioDetails singleData={singleData} />
        </>
    );
};

export default PortfolioDetailClient;