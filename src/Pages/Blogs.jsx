import React, { useState } from "react";
import { blogData } from "../Utils/constants";
import { Link } from "react-router-dom";
import FeaturedBlog from "../Components/FeaturedBlog"

// Sort Helpers
const sortByLatest = (arr) => [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
const sortByMostRead = (arr) => [...arr].sort((a, b) => (b.views || 0) - (a.views || 0));
const sortByPopular = (arr) => [...arr].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

// Sidebar Filters
const BlogFiltersSidebar = ({ selected, setSelected }) => {
  const filters = ["Latest", "Most Read", "Popular"];
  return (
    <div className="sticky top-24 p-4 bg-white rounded-md shadow-md max-w-xs">
      <h3 className="font-semibold text-green-900 mb-4 text-lg">Filter Blogs</h3>
      <ul>
        {filters.map((filter) => (
          <li
            key={filter}
            onClick={() => setSelected(filter)}
            className={`cursor-pointer mb-2 px-3 py-2 rounded-md text-sm transition ${
              selected === filter
                ? "bg-orange-500 text-white font-semibold"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
};
// All Blogs with Pagination
const AllBlogsSection = ({ selectedFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  let filteredBlogs = [];
  if (!blogData || !blogData.length) return <p className="text-center p-10">No blogs available.</p>;

  if (selectedFilter === "Latest") filteredBlogs = sortByLatest(blogData);
  else if (selectedFilter === "Most Read") filteredBlogs = sortByMostRead(blogData);
  else if (selectedFilter === "Popular") filteredBlogs = sortByPopular(blogData);
  else filteredBlogs = blogData;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold text-green-900 mb-6">{selectedFilter} Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.id}
            className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image1}
              alt={blog.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-green-800">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {blog.description.length > 120
                  ? `${blog.description.slice(0, 120)}...`
                  : blog.description}
              </p>
              <div className="mt-2 text-xs text-gray-500 flex justify-between">
                <span>By {blog.author}</span>
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

// Final Page Component
const Blogs = () => {
  const [selectedFilter, setSelectedFilter] = useState("Latest");

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <FeaturedBlog />
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-64">
          <BlogFiltersSidebar selected={selectedFilter} setSelected={setSelectedFilter} />
        </div>
        <div className="flex-1">
          <AllBlogsSection selectedFilter={selectedFilter} />
        </div>
      </div>
    </main>
  );
};

export default Blogs;
