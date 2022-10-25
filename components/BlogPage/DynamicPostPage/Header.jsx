import React from "react";
import { FiUsers } from "react-icons/fi";
import ReactTimeago from "react-timeago";

import ShareButtons from "./ShareButtons";

const Header = ({ title, publishedAt, author, path }) => {
  return (
    <>
      <section className="hero-area pt-10 2xl:pt-20 2xl:pb-24 relative">
        <div className="container relative z-20">
          <div className="section-title">
            <h2 className="text-coolGray-900  text-4xl lg:text-5xl font-bold mb-4 ">
              {title}
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-lg text-teal-400 font-medium transition duration-500 hover:text-teal-300 mr-10 mb-4"
          >
            <span className="mr-2">
              <FiUsers width={16} height={16} />
            </span>
            {author.name}
          </a>

          <p className="inline-flex items-center text-lg text-coolGray-600 font-medium transition duration-500 hover:text-teal-300 mb-4">
            <span className="mr-2">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.11719 8.11111H17.7098M4.08015 1V4.55556M7.63571 1V4.55556M11.1913 1V4.55556M14.7468 1V4.55556M1.11719 2.77778V17H17.7098V2.77778H1.11719Z"
                  stroke="#6B7280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <ReactTimeago date={publishedAt} />
          </p>
       <ShareButtons path={path} />
        </div>
      </section>
    </>
  );
};

export default Header;
