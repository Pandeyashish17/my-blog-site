import React from "react";
import Card from "./Card";

const Index = ({ posts }) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      {posts.map((post,i) => {
        return <Card post={post}  key={i}/>;
      })}
    </div>
  );
};

export default Index;
