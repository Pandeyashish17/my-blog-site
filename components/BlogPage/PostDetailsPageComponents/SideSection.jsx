import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import ReactTimeago from "react-timeago";
import { urlFor } from "../../../lib/sanityConfig";
const SideSection = ({ categories, posts }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="lg:col-span-5 xl:col-span-4">
        <div className="bg-white rounded border border-coolGray-300 transition duration-500 hover:shadow-lg px-6  mb-2 lg:mb-14 py-3 ">
          <h3 className="text-3xl text-coolGray-900 font-bold mb-2">Search</h3>
          <div className="relative">
            <input
              className="border border-coolGray-300 rounded w-full text-coolGray-600 placeholder-coolGray-400 transition duration-500 focus:shadow-lg focus:border-teal-400 focus:outline-none px-4 py-3 pr-10"
              type="text"
              placeholder="Search here..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              className="block absolute bottom-3 right-4"
              onClick={() => {
                Router.push(`/blogs?query=${query}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="bg-white rounded border border-coolGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-6 lg:mb-14">
          <h3 className="text-3xl text-coolGray-900 font-bold mb-6">Ads</h3>
          <div className="card-category-list block">for ads </div>
        </div>
        <div className="bg-white rounded border border-coolGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-6 lg:mb-14">
          <h3 className="text-3xl text-coolGray-900 font-bold mb-3">Tags</h3>
          <div className="card-tags-list flex flex-wrap">
            {categories &&
              categories.map((category, i) => {
                return (
                  <Link href={`/blogs?query=${category}`} key={i}>
                    <a className="btn-style-2 inline-flex items-center justify-center border  border-coolGray-300 text-coolGray-600 font-medium rounded-full transition-all duration-500 hover:text-teal-400 hover:border-teal-400 py-2.5 px-7 mr-4 mt-4">
                      {category}
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="bg-white rounded border border-coolGray-300 transition duration-500 hover:shadow-lg px-6 py-8">
          <h3 className="text-3xl text-coolGray-900 font-bold mb-6">
            Popular Posts
          </h3>

          {posts &&
            posts.map((post) => {
              const { slug, title, mainImage, publishedAt, imageTitle } = post;
              return (
                <Link href={`/blogs/${slug.current}`} key={title}>
                  <div className="card-recent-style flex items-center border-b border-coolGray-300 pb-4 mb-4">
                    <div className="card-recent-image w-24 h-24 rounded overflow-hidden flex-shrink-0">
                      {mainImage ? (
                        <img
                          className="w-full  h-full object-cover"
                          src={urlFor(mainImage).url()}
                          alt={title}
                        />
                      ) : (
                        <img
                          className="w-full  h-full object-cover"
                          src={`/api/image?title=${imageTitle}`}
                          alt={title}
                        />
                      )}
                    </div>
                    <div className="card-recent-content pl-4">
                      <h6 className="text-coolGray-900 font-bold transition duration-500 hover:text-teal-400">
                        <a href="single.html">{title} </a>
                      </h6>
                      <p className="text-sm text-coolGray-300 font-normal mt-1">
                        <ReactTimeago date={publishedAt} />
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SideSection;
