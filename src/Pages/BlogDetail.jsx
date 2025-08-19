import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../Utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Agar slug ko title ke jagah slug ke basis pe match karna chahte ho to blog.slug use karo
  const blog = blogData.find((b) => b.title === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Blog not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Image */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden">
        <img
          src={blog.image2}
          alt={blog.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-6 sm:p-10 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-200">
              By {blog.author} • {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-block mb-8 text-orange-500 hover:text-orange-600 font-semibold transform transition-transform duration-300 hover:scale-105"
        >
          ← Back to Blogs
        </Link>

        {/* Blog content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6" data-aos="fade-up">
          {blog.description.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Second Image */}
        {blog.image1 && (
          <div className="my-10" data-aos="zoom-in">
            <img
              src={blog.image1}
              alt={`${blog.title} - extra`}
              className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        )}

        {/* More Content */}
        {blog.moreContent && (
          <div
            className="prose prose-lg max-w-none text-gray-700 space-y-6"
            data-aos="fade-up"
          >
            {blog.moreContent.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}

        {/* Footer (share / back link) */}
        <div className="mt-12 flex justify-between items-center border-t pt-6 text-sm text-gray-500">
          <Link
            to="/blogs"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            ← Back to Blogs
          </Link>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            Share this ✨
          </button>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
