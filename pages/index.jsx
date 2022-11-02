import TopSlider from "../components/TopSlider";
import { sanityClient } from "../lib/sanityConfig";
import useStateContext from "../context/StateContext";
import { useEffect } from "react";
import Head from "next/head";
import Row from "../components/Rows/Row";
const Home = ({ posts }) => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);

  const filter = (filterTitle) =>
    posts.filter((post) => {
      return post.searchQueries.includes(filterTitle);
    });

  return (
    <>
      <Head>
        <title>Home - ashishBlog</title>
      </Head>
      <div className="p-5" data-aos="zoom-in">
        <TopSlider posts={posts} />
        <div className="p-5">
          <Row rowId="1" title="React" array={filter("React")} />
          <Row rowId="2" title="Templates" array={filter("Templates")} />
          <Row rowId="3" title="customHooks" array={filter("Hook")} />
        </div>
        {/* <Row rowId="4" title="python" array={filter("python")} />
        <Row rowId="5" title="mongoDb" array={filter("mongoDb")} /> */}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const query = `*[_type=="post"] | order(publishedAt desc){
  _id,title,slug,imageTitle,excerpt,mainImage,publishedAt,hoverTitle,searchQueries,filterTitle,categories,
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
