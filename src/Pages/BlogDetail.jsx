
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../Utils/constants';

const BlogDetail = () => {
  const { slug } = useParams();
  const index = blogData.findIndex((b) => b.slug === slug);
  const blog = blogData[index];
  if (!blog) return <p>Blog not found</p>;

  const prevBlog = blogData[index - 1];
  const nextBlog = blogData[index + 1];

  const categories = [
    { title: 'Most Read', key: 'Most Read' },
    { title: 'Featured', key: 'Popular' },
    { title: 'New', key: 'New' },
  ];

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <article className="flex-1">
        {/* Your existing content layout goes here */}
      </article>

      {/* Sidebar */}
      <aside className="w-64 sticky top-20 space-y-6">
        {categories.map((cat) => {
          const posts = blogData.filter((b) => b.tag === cat.key);
          return (
            <div key={cat.key}>
              <h4 className="font-semibold text-green-900">{cat.title}</h4>
              <ul className="space-y-1 text-sm">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/blog/${p.slug}`}
                      className={`block ${
                        p.slug === slug ? 'text-orange-500 font-semibold' : 'text-gray-700'
                      } hover:underline`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </aside>

      {/* Bottom Navigation */}
      <div className="w-full max-w-5xl mx-auto mt-8 flex justify-between">
        {prevBlog ? (
          <Link to={`/blog/${prevBlog.slug}`} className="text-orange-500 hover:underline">
            ← {prevBlog.title}
          </Link>
        ) : <span />}
        {nextBlog && (
          <Link to={`/blog/${nextBlog.slug}`} className="text-orange-500 hover:underline">
            {nextBlog.title} →
          </Link>
        )}
      </div>
    </div>
  );
};


export default BlogDetail;