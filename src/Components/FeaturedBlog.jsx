import { blogData } from "../Utils/constants";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBlogsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const featuredBlogs = blogData.filter((blog) =>
    blog.tag.includes("featured")
  );
  console.log(featuredBlogs);

  return (
    <section className="w-full mx-auto py-24 bg-gray-50">
      <div
        className="flex justify-between items-center mb-6 w-[80%] mx-auto"
        data-aos="fade-down"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Most Read Blogs
        </h2>
        <Link
          to="/blogs"
          className="text-orange-500 hover:text-orange-600 font-semibold text-md transition-colors duration-300"
        >
          View All Blogs →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {featuredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="
              bg-white rounded-xl shadow-md overflow-hidden cursor-pointer 
              transform transition duration-300 hover:scale-105 hover:shadow-xl
              border border-transparent hover:border-orange-300
              flex flex-col
            "
            data-aos="fade-up"
          >
            <img
              src={blog.image1}
              alt={blog.title}
              className="w-full h-44 object-cover rounded-t-xl"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-orange-600">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {blog.description.slice(0, 80)}...
              </p>
              <Link
                to={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-300 underline-offset-2 hover:underline"
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
