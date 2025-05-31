import React, { useEffect, useState } from "react";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  const cleanText = text.replace(/<[^>]+>/g, ""); // remove HTML tags
  return cleanText.length > maxLength
    ? cleanText.substring(0, maxLength) + "..."
    : cleanText;
};

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBloggerPosts = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = encodeURIComponent(
          "https://www.blogger.com/feeds/8848339787799652331/posts/default?alt=json"
        );
        const response = await fetch(`${proxyUrl}${targetUrl}`);
        const raw = await response.json();
        const data = JSON.parse(raw.contents);

        const entries = data.feed?.entry || [];

        const formattedPosts = entries.map((entry) => {
          const link = entry.link.find((l) => l.rel === "alternate").href;
          return {
            id: entry.id.$t,
            title: entry.title.$t,
            summary: entry.summary?.$t || entry.content?.$t || "",
            link,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching Blogger posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBloggerPosts();
  }, []);

  return (
    <section id="blogs" className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">
          Blogs
        </h2>
        {loading ? (
          <p className="text-center">Loading blogs...</p>
        ) : posts.length === 0 ? (
          <p className="text-center">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-sm mb-4">
                  {truncateText(post.summary, 120)}
                </p>
                <button
                  type="button"
                  className="inline-block mt-auto text-indigo-600 hover:underline font-semibold"
                >
                  Read more →
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
