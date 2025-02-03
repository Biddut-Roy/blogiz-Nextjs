import BlogDetails from "@/components/ui/BlogDetails";

interface Params {
  params: {
    id: string;
  };
}
const BlogsDetailsPage = async ({ params }: Params) => {
  const response = await fetch(`http://localhost:5000/blogs/${params.id}`, {
    cache: "no-store",
  });
  const blog = await response.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogsDetailsPage;
