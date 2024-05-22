"use client"

import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const ServicesDetailClient = () => {
    const params = useParams();
    const serviceDetails = servicesData?.find((service) => service.id === params.id);
    const router = useRouter();

    if (!serviceDetails) {
        if (typeof window !== 'undefined') {
            router.push("/404-error");
        }
        return null; // Render nothing on the server
    }

    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} />
        </>
    );
};

export default ServicesDetailClient;
