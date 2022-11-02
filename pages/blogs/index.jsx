import React, { useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";
import { sanityClient, urlFor } from "../../lib/sanityConfig";
import Header from "../../components/BlogPage/Header";

const Index = ({ posts }) => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);

  const router = useRouter();
  let query = router.query.query;
  if (!query) {
    query = "Blog";
  }
  const Posts = posts.filter((post) => {
    return query == "Blog"
      ? post
      : post.searchQueries.includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.title.toLowerCase().includes(query) ||
          post.imageTitle.toLowerCase().includes(query);
  });
  let length = Posts.length;
  return (
    <>
      <Header query={query} len={length} />
      <div
        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"
        data-aos="zoom-in"
      >
        {Posts.map((post) => {
          const {
            _id,
            title,
            slug,
            imageTitle,
            excerpt,
            body,
            categories,
            mainImage,
            publishedAt,
            author,
          } = post;
          return (
            <div
              className="card-blog-style-1 p-5 bg-white relative rounded transition duration-500 hover:shadow-lg"
              key={_id}
            >
              <span className="card-blog-date uppercase text-coolGray-300 font-bold rotate-90 absolute mt-0.5 top-14 -left-7">
                {moment(publishedAt).format("DD/MM/YYYY")}{" "}
              </span>
              <div className="block xl:flex pl-5">
                <div className="card-blog-left flex-shrink-0 w-full xl:w-40 2xl:w-64 rounded">
                  {mainImage ? (
                    <img
                      className="w-full h-48 2xl:h-64 object-cover rounded mb-6"
                      src={urlFor(post.mainImage).url()}
                      alt="Blog Title"
                    />
                  ) : (
                    <img
                      className="w-full h-48 2xl:h-64 object-cover rounded mb-6"
                      src={`/api/image?title=${imageTitle}`}
                      alt="Blog Title"
                    />
                  )}
                  <div className="flex gap-1 items-center">
                    <img
                      className="w-8 h-8 object-cover rounded-full mr-2"
                      src={author.image._upload.previewImage}
                      alt={author.name}
                    />
                    <a className="text-coolGray-900 font-medium text-sm transition duration-500 hover:text-teal-400 capitalize">
                      {author.name}
                    </a>
                  </div>
                </div>

                <div className="card-blog-right xl:ml-6">
                  <h4 className="blog-title text-2xl 2xl:text-3xl text-coolGray-900 font-bold transition duration-500 hover:text-teal-400 mt-2 xl:mt-0 mb-4 line-clamp-2">
                    <Link href={`/blogs/${slug.current}`}>
                      <a href="">{title}</a>
                    </Link>
                  </h4>
                  {categories &&
                    categories.map((category, i) => {
                      return (
                        <Link href={`/blogs?query=${category}`} key={i}>
                          <a className="blog-category inline-flex justify-center items-center border border-teal-200 text-coolGray-900 text-sm font-medium rounded-full px-2 py-1 mb-1 mr-1 transition duration-500 bg-teal-200 hover:bg-gray-50">
                            <span className="mr-1"></span> {category}
                          </a>
                        </Link>
                      );
                    })}
                  <p className="blog-excerpt text-coolGray-600 leading-7 font-normal my-4 line-clamp-2">
                    {excerpt}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const query = `*[_type=="post"]{
  _id,title,slug,imageTitle,excerpt,categories,mainImage,searchQueries,publishedAt, 
  author->{
  name,image
}
}`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
