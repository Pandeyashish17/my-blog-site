import React, { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import RecentPostCard from "./RecentPostCard";
import useStateContext from "../../context/StateContext";

const Index = ({ posts }) => {
  const { aosFunc } = useStateContext();
  useEffect(() => {
    aosFunc();
  }, []);

  return (
    <div className="mt-8" data-aos="zoom-in">
      <Typography variant="h2">Recent Posts</Typography>
      <div>
        <RecentPostCard posts={posts} />
      </div>
    </div>
  );
};

export default Index;
