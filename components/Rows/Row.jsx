import React, { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import useStateContext from "../../context/StateContext";
import RowCard from "./RowCard";

const Row = ({ title, rowId, array }) => {
  const { aosFunc } = useStateContext();

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    aosFunc();
  }, []);

  return (
    <>
      {array.length != 0 && (
        <h2 className="text-black font-bold md:text-xl p-4">{title}</h2>
      )}
      <div className="relative flex items-center group" data-aos="zoom-in">
        <MdChevronLeft
          onClick={slideLeft}
          className="text-white bg-opacity-50 h-full bg-gradient-to-r from-black left-0 absolute opacity-75 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={60}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {array.map((item, id) => (
            <RowCard key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="text-white bg-opacity-50 h-full bg-gradient-to-l from-black right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={60}
        />
      </div>
    </>
  );
};

export default Row;
