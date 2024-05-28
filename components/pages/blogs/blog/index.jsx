"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blogs' />
            <HeaderOne />
            <BreadCrumb title="Blogs" innerTitle="Blogs" />
            <BlogGridMain />
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;