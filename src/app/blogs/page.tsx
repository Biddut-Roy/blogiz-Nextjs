import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "../../../Type";

const BlogsPage = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await response.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blog from <span className="text-accent">BloGiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>Dive is tha facetiae world of Quantum computer</i>
      </p>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
