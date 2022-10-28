import React from "react";
import Header from "./Header";
import Link from "next/link";
import PostDetails from "../PostDetailsPageComponents/PostDetails";
import SideSection from "../PostDetailsPageComponents/SideSection";

const index = ({ post, path, posts }) => {
  const {
    _id,
    title,
    slug,
    body,
    imageTitle,
    excerpt,
    categories,
    mainImage,
    publishedAt,
    author,
  } = post;
  return (
    <section>
      <Header
        title={title}
        author={author}
        publishedAt={publishedAt}
        path={path}
      />
      <section className="blog-area z-20  relative">
        <div className="container">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <PostDetails body={body} />
            <SideSection categories={categories} posts={posts} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default index;
