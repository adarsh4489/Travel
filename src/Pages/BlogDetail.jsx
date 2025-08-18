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

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Blog not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 max-w-4xl mx-auto">
      {/* Back link */}
      <Link
        to="/blogs"
        className="inline-block mb-6 text-orange-500 hover:text-orange-600 font-semibold transform transition-transform duration-300 hover:scale-105"
      >
        ← Back to Blogs
      </Link>

      {/* Title and meta */}
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-900 mb-2">{blog.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          <span>By {blog.author}</span> •{" "}
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>
      </div>

      {/* First Image */}
      <img
        src={blog.image1}
        alt={blog.title}
        className="w-full rounded-lg mb-8 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        data-aos="zoom-in"
      />

      {/* Blog content */}
      <div className="prose max-w-none text-gray-700 mb-8" data-aos="fade-up">
        {blog.description.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Second Image */}
      <img
        src={blog.image2}
        alt={`${blog.title} - second`}
        className="w-full rounded-lg mb-8 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
        data-aos="zoom-in"
      />

      {/* More content if exists */}
      {blog.moreContent && (
        <div className="prose max-w-none text-gray-700" data-aos="fade-up">
          {blog.moreContent.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogDetail;
