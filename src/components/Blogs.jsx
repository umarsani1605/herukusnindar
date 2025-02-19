import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function Blogs() {
  const truncate = (str, n, useWordBoundary) => {
    if (str.length <= n) {
      return str;
    }
    const subString = str.slice(0, n - 1); // the original check
    return (
      (useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(" "))
        : subString) + "..."
    );
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://elegant-vitality-8154f769a3.strapiapp.com/api/blogs?populate=*",
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));

        setArticles(data);
      });
  }, []);

  console.log("article: " + JSON.stringify(articles));

  return (
    <>
      {/* Features */}
      <div
        id="blog"
        className="mx-auto max-w-[80rem] px-4 py-10 text-lg sm:px-6 lg:px-8 lg:py-24"
      >
        {/* Card Grid */}
        <div className="w-full gap-4 pb-6 align-middle">
          <div className="space-y-2 text-center md:space-y-4">
            <h2 className="inline-block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
              Blog
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 pb-6 lg:grid-cols-4 lg:gap-8">
          {articles?.data?.map((article) => (
            <NavLink
              key={article.id}
              to={`/blog/${article.id}`}
              className="group flex flex-col rounded-2xl border-[1px] border-slate-200 p-4 focus:outline-none"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  className="rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                  src={article.attributes.featured_image.data.attributes.url}
                  alt="Blog Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="relative inline-block text-lg font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-slate-800 before:transition group-hover:before:scale-x-100">
                  {article.attributes.title}
                </h3>
                <div className="mt-1 flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-2 inline-block size-6 w-5 text-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <span>
                    {new Date(
                      article.attributes.publishedAt,
                    ).toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        {/* End Card Grid */}
        <div className="mt-4 flex items-center justify-center">
          <a
            href="/blog"
            className="relative inline-block h-fit w-fit rounded-full border border-gray-300 px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 hover:transition"
          >
            Lebih lengkap
          </a>
        </div>
      </div>
      {/* End Features */}
    </>
  );
}

export default Blogs;
