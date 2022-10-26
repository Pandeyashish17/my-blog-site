import moment from "moment";
import Link from "next/link";
import { urlFor } from "../../../lib/sanityConfig";
export default function PostCard({ post }) {
  const {
    _id,
    title,
    slug,
    imageTitle,
    excerpt,
    categories,
    mainImage,
    publishedAt,
    author,
  } = post;
  console.log(author);
  return (
    <div className="card-blog-style-1 p-5 bg-white relative rounded transition duration-500 hover:shadow-lg">
      <span className="card-blog-date uppercase text-coolGray-300 font-bold rotate-90 absolute mt-0.5 top-14 -left-7">
        {moment(publishedAt).format("DD/MM/YYYY")}{" "}
      </span>
      <div className="block xl:flex pl-5">
        <div className="card-blog-left flex-shrink-0 w-full xl:w-40 2xl:w-64 rounded">
          <a href="">
            {mainImage ? (
              <img
                className="w-full h-48 2xl:h-64 object-cover rounded mb-6"
                src={urlFor(mainImage).url()}
                alt="Blog Title"
              />
            ) : (
              <img
                className="w-full h-48 2xl:h-64 object-cover rounded mb-6"
                src={`/api/image?title=${imageTitle}`}
                alt="Blog Title"
              />
            )}
          </a>
          <div className="flex gap-1 items-center">
            <img
              className="w-8 h-8 object-cover rounded-full mr-2"
              src={author.image._upload.previewImage}
              alt={author.name}
            />
            <Link href="">
              <a className="text-coolGray-900 font-medium text-sm transition duration-500 hover:text-teal-400 capitalize">
                {author.name}
              </a>
            </Link>
          </div>
        </div>

        <div className="card-blog-right xl:ml-6">
          <h4 className="blog-title text-2xl 2xl:text-3xl text-coolGray-900 font-bold transition duration-500 hover:text-teal-400 mt-2 xl:mt-0 mb-4 line-clamp-2">
            <Link href={`/blogs/${slug.current}`}>
              <a href="">{title}</a>
            </Link>
          </h4>
          {categories &&
            categories.map((category, i) => {
              return (
                <Link href={`/blogs?query=${category}`} key={i}>
                  <a className="blog-category inline-flex justify-center items-center border border-teal-200 text-coolGray-900 text-sm font-medium rounded-full px-2 py-1 mb-1 mr-1 transition duration-500 bg-teal-200 hover:bg-gray-50">
                    <span className="mr-1"></span> {category}
                  </a>
                </Link>
              );
            })}
          <p className="blog-excerpt text-coolGray-600 leading-7 font-normal my-4 line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
