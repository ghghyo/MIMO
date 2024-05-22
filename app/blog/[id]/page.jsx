import blogData from '@/components/data/blog-data';
import BlogDetailsClient from './BlogDetailsClient';

// Function to generate static parameters
export async function generateStaticParams() {
    return blogData.map(blog => ({
        id: blog.id.toString(),
    }));
}

const BlogDetailPage = ({ params }) => {
    return <BlogDetailsClient params={params} />;
};

export default BlogDetailPage;