import React, { useEffect } from "react";
import DynamicPostPage from "../../components/BlogPage/DynamicPostPage";
import { sanityClient } from "../../lib/sanityConfig";
import Head from "next/head";
import useStateContext from "../../context/StateContext";
import { useRouter } from "next/router";
const Post = ({ post }) => {
  const { aosFunc, url } = useStateContext();
  const Router = useRouter();
  const path = Router.asPath;
  useEffect(() => {
    aosFunc();
  }, []);
  return (
    <>
      <Head>
        <title>{post.title} | ashishBlog</title>
      </Head>
      <div className="px-8" data-aos="zoom-in">
        <DynamicPostPage post={post} path={path} />
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
        _id,
        slug{
        current
        }
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current == $slug][0]{
       _id,title,slug,imageTitle,excerpt,body,categories,mainImage,publishedAt,
  author->{
  name,image
}
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
