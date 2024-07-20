"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FaqArea from "./faq";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <HeaderOne />
            <BreadCrumb title='Core Competencies' innerTitle="FAQ's" />
            <div className='section-padding'>
                <FaqArea />
            </div>
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default Faq;