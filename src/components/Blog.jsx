import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function Blog() {
  const [articleId, setArticleId] = useState();
  const [article, setArticle] = useState({});

  const { id } = useParams();

  setArticleId(id);

  useEffect(() => {
    fetch(
      `https://elegant-vitality-8154f769a3.strapiapp.com/api/blogs/${articleId}?populate=*`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));

        if (!data) {
          return <p>Blog not found</p>;
        }

        setArticle(data);
      });
  }, []);

  return <p>tes</p>;
}

export default Blog;
