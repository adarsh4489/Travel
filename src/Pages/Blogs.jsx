import React, { useEffect, useState } from "react";
import { blogData } from "../Utils/constants";
import { Link } from "react-router-dom";
import AOS from "aos";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import "aos/dist/aos.css";

// Filter Options
const FILTERS = ["All", "Latest", "Popular", "Featured"];

const Blogs = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Safe: blogData agar undefined h to empty array use karo
  const safeBlogData = Array.isArray(blogData) ? blogData : [];

  // Filtering Logic
  const getFilteredBlogs = () => {
    let filtered = safeBlogData;

    if (selectedFilter === "Latest") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (selectedFilter === "Popular") {
      filtered = filtered.filter(
        (blog) => blog.tag.toLowerCase() === "popular"
      );
    } else if (selectedFilter === "Featured") {
      filtered = filtered.filter(
        (blog) => blog.tag.toLowerCase() === "featured"
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredBlogs = getFilteredBlogs();

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage) || 1; // min 1 page
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Reset page on filter/search
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, searchTerm]);

  const handleFilterClick = (filter) => setSelectedFilter(filter);
  const handleSearchInputChange = (e) => setSearchInput(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-10">
      <div className="w-[95%] sm:w-[90%] max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-8 sm:mb-10" data-aos="fade-down">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Explore Our Blog
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Tips, guides, and travel stories curated to inspire your next
            adventure.
          </p>
        </div>

        {/* Filter + Search */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4"
          data-aos="fade-up"
        >
          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                  selectedFilter === filter
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full max-w-xs sm:max-w-sm"
          >
            <input
              type="text"
              placeholder="Search blog..."
              value={searchInput}
              onChange={handleSearchInputChange}
              className="px-3 sm:px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:ring-2 focus:ring-orange-400 flex-grow text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-orange-500 px-3 sm:px-4 py-2 text-base sm:text-lg rounded-r-full text-white hover:bg-orange-600 transition"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              data-aos="fade-up"
            >
              {paginatedBlogs.map((blog, index) => (
                <Link
                  to={`/blogs/${blog.title}`}
                  key={blog.id}
                  className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={blog.image1}
                    alt={blog.title}
                    className="w-full h-40 sm:h-44 md:h-52 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-green-800 text-sm sm:text-base md:text-lg">
                      {blog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {blog.description.length > 120
                        ? blog.description.slice(0, 120) + "..."
                        : blog.description}
                    </p>
                    <div className="mt-2 text-[11px] sm:text-xs text-gray-500 flex justify-between">
                      <span>By {blog.author}</span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 sm:mt-10 gap-1 sm:gap-2 flex-wrap">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <AiOutlineArrowLeft />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base ${
                      currentPage === page
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-2 sm:px-3 py-1 rounded-md text-sm sm:text-base ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-20">No blogs found.</p>
        )}
      </div>
    </main>
  );
};

export default Blogs;
