import TopSlider from "../components/TopSlider";
import RecentPosts from "../components/RecentPosts";
import { sanityClient } from "../lib/sanityConfig";
import useStateContext from "../context/StateContext";
import { useEffect } from "react";

const Home = ({ posts }) => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);

  return (
    <>
      <div className="p-5" data-aos="zoom-in">
        <TopSlider posts={posts} />
        <RecentPosts posts={posts} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const query = `*[_type=="post"]{
  _id,title,slug,imageTitle,excerpt,categories,mainImage,publishedAt,
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
