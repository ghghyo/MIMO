"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Services" />
            <HeaderOne />
            <BreadCrumb title="Services" innerTitle="Services" />
            <ServicesMain />
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;