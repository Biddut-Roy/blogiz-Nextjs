import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "../../../../Type";

interface Params {
  params: {
    id: string;
  };
}

// Fetch dynamic data using generateStaticParams() for SSG;
export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await response.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    id: blog.id,
  }));
};

const BlogsDetailsPage = async ({ params }: Params) => {
  const response = await fetch(`http://localhost:5000/blogs/${params.id}`, {
    cache: "no-store",
  });
  const blog = await response.json();
  return (
    <div className="my-3">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogsDetailsPage;
