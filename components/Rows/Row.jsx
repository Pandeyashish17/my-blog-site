import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useStateContext from "../../context/StateContext";

const Row = ({ title, rowId, array }) => {
  const { aosFunc } = useStateContext();

  useEffect(() => {
    aosFunc();
  }, []);

  return (
    <>
      {array.length != 0 && (
        <h2 className="text-black font-bold md:text-xl  p-4">{title}</h2>
      )}
      <div className="flex overflow-x-scroll w-full scrollbar-hide">
        {array.map((item,i) => {
          return (
            <Link href={`/blogs/${item.slug.current}`} key={i}>
              <img
                className="mt-4 p-4 transition-all hover:scale-105 duration-500 "
                src={`/api/image?title=${item.imageTitle}`}
                width={440}
                height={330}
              />
            </Link>
          );
        })}{" "}
      </div>
    </>
  );
};

export default Row;
