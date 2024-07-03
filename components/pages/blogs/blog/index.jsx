"use client";

import { useEffect } from 'react';
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogGrid = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//widget.tagembed.com/embed.min.js";
        script.type = "text/javascript";
        script.async = true;
        document.getElementById("tagembed-container").appendChild(script);

        // Ensure no horizontal overflow
        document.body.classList.add('overflow-x-hidden');
        return () => {
            document.body.classList.remove('overflow-x-hidden');
        };
    }, []);

    return (
        <>
            <SEO pageTitle='Blogs' />
            <HeaderOne />
                                    {/* <BreadCrumb title="Blogs" innerTitle="Blogs" />
            <BlogGridMain /> */}
            <div id="tagembed-container" className='tagembed-widget mt-8 mx-2' style={{ width: "100%", height: "100%" }} data-widget-id="154968" view-url="https://widgets.tagembed.com/154968"></div>
            <div className='w-full'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;
