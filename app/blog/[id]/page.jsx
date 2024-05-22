"use client"

import { useParams, useRouter } from "next/navigation";
import blogData from '@/components/data/blog-data';
import BlogDetails from '@/components/pages/blogs/blog-details';

// Function to generate static parameters
export async function generateStaticParams() {
    // Generate an array of all possible blog IDs from your data
    return blogData.map(blog => ({
        id: blog.id.toString()
    }));
}

// Function to get static props for a blog post
export async function getStaticProps({ params }) {
    const singleData = blogData?.find((blog) => blog.id.toString() === params.id);

    if (!singleData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            singleData,
        },
    };
}

const BlogDetail = ({ singleData }) => {
    const router = useRouter();
    const params = useParams();

    if (!singleData) {
        return router.push("/404-error");
    }

    return (
        <>
            <BlogDetails singleData={singleData} />
        </>
    );
};

export default BlogDetail;
