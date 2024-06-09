"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="Company About" innerInnerTitle="Woman Owned, CBE certified, Minority Owned, DC local business" />
        
        <AboutMain />
            <WhoWeAre />
            <h6 className="m-8">“A leader must lead. Where others see obstacles, he must see opportunities. When others see problems, he must see possibilities ... Civilization is not built on a negation but on an affirmation- an affirmation of the bright and promising possibilities that the future holds for those who are enterprising enough to pursue them.” David J. Vaughan </h6>
            <History />
        <div className='all-footer'>
            <FooterOne />
        </div>
            <ScrollToTop />
      </>
    );
};

export default AboutUs;