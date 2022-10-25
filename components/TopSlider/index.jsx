import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TimeAgo from "react-timeago";

export default function App({ posts }) {
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
          {posts.map((items, i) => {
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
                    <a href="#">
                      {mainImage ? (
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src={`/api/image?title=image is there`}
                          alt="Image description"
                        />
                      ) : (
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src={`/api/image?title=${imageTitle}`}
                          alt="Image description"
                        />
                      )}
                    </a>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 className="text-3xl font-bold capitalize text-white mb-3 line-clamp-1">
                          {title}
                        </h2>
                      </a>
                      <p className="text-gray-100 hidden sm:inline-block line-clamp-2">
                        {excerpt}
                      </p>
                      <div className="pt-2 flex justify-between ">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                          {categories.map((category, i) => {
                            return <span className="m-1" key={i}>{category}</span>;
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
