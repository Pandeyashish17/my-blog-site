import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TimeAgo from "react-timeago";
import { urlFor } from "../../lib/sanityConfig";
import Link from "next/link"

export default function App({ posts }) {
  const Posts = posts.slice(0, 4);
  return (
    <>
      <div className="mt-8">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Posts.map((items, i) => {
            const {
              _id,
              title,
              slug,
              imageTitle,
              excerpt,
              categories,
              mainImage,
              publishedAt,
            } = items;
            return (
              <SwiperSlide key={_id}>
                <div className="flex-shrink max-w-full w-full  pb-1 lg:pb-0 lg:pr-1">
                  <div className="relative max-h-98 overflow-hidden">
                    <Link href={`/blogs/${slug.current}`}>
                      <a>
                        {mainImage ? (
                          <img
                            className="  mx-auto h-auto"
                            src={urlFor(mainImage).url()}
                            alt="Image description"
                            width={640}
                            height={430}
                          />
                        ) : (
                          <img
                            className="max-w-full w-full mx-auto h-auto"
                            src={`/api/image?title=${imageTitle}`}
                            alt="Image description"
                          />
                        )}
                      </a>
                    </Link>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <div className="pt-2 flex justify-between ">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                          {categories &&
                            categories.map((category, i) => {
                              return (
                                <span className="m-1 text-blue-500" key={i}>
                                  {category}
                                </span>
                              );
                            })}
                        </div>
                        <div>
                          <TimeAgo date={publishedAt} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
