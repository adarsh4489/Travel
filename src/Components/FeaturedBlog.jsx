import { blogData } from "../Utils/constants";
import { Link } from "react-router-dom";

const HomeBlogsSection = () => {
  // Show first 3 blogs as "most read"
  const featuredBlogs = blogData.filter((blog)=>{
return blog.tag.includes("Most Read")
  });

  return (
    <section className="w-[90%] mx-auto py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 underline">
          Most Read Blogs
        </h2>
        <Link
          to="/blogs"
          className="text-orange-500 hover:text-orange-600 font-semibold text-md"
        >
          View All Blogs →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image1}
              alt={blog.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {blog.description.slice(0, 80)}...
              </p>
              <Link
                to={`/blog/${blog.slug}`}
                className="inline-block mt-3 text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlogsSection;
