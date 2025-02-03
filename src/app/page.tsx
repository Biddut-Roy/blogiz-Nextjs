import LatexBox from "@/components/LatexBox/LatexBox";

const HomePage = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await response.json();

  return (
    <>
      <h1 className="text-center text-4xl my-5">Latest Blogs</h1>
      <LatexBox blog={blogs} />
    </>
  );
};

export default HomePage;
