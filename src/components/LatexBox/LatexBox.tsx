import { Blog } from "../../../Type";
import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatexBox = ({ blog }: { blog: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blog from <span className="text-accent">BloGiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>Dive is tha facetiae world of Quantum computer</i>
      </p>
      <div className="grid grid-cols-2 gap-2 mt-5">
        {blog.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {blog.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatexBox;
