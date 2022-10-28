import React, { useEffect } from "react";
import RecentPostCard from "./RecentPostCard";
import useStateContext from "../../context/StateContext";

const Index = ({ posts }) => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);

  return (
    <div className="mt-8" data-aos="zoom-in">
      <h2 className="text-4xl font-bold">Recent Posts</h2>
      <div>
        <RecentPostCard posts={posts} />
      </div>
    </div>
  );
};

export default Index;
