"use client"

import { useRouter, useParams } from "next/navigation";
import blogData from '@/components/data/blog-data';
import BlogDetails from '@/components/pages/blogs/blog-details';

const BlogDetailsClient = () => {
    const router = useRouter();
    const params = useParams();
    const singleData = blogData?.find((blog) => blog.id === params.id);

    if (!singleData) {
        if (typeof window !== 'undefined') {
            router.push("/404-error");
        }
        return null; // Render nothing on the server
    }

    return (
        <>
            <BlogDetails singleData={singleData} />
        </>
    );
};

export default BlogDetailsClient;
