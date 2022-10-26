import React from "react";
// import PortableText from "react-portable-text";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    h1: (props) => <h1 className="my-5 text-2xl font-bold" {...props} />,
    h2: (props) => <h1 className="my-5 text-xl font-bold" {...props} />,
    p: (props) => <p className="my-5" {...props} />,
    li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
    link: ({ children, href }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
    code: (props) => (
      <>
        <pre
          data-language={props.node.language}
          className="bg-[#00002c] my-3 p-3  rounded-xl"
        >
          <div className="flex gap-1 mb-2 ml-1 ">
            <div className="bg-red-500 w-3 h-3 rounded-full "></div>{" "}
            <div className="bg-yellow-500 w-3 h-3 rounded-full "></div>{" "}
            <div className="bg-green-500 w-3 h-3 rounded-full "></div>{" "}
          </div>
          <code className=" text-white break-all whitespace-pre-wrap">
            {props.node.code}
          </code>
        </pre>
      </>
    ),
  },
};
const PostDetails = ({ body }) => {
  return (
    <>
      <div class="lg:col-span-7 xl:col-span-8  lg:mb-0">
        <BlockContent blocks={body} serializers={serializers} />,
      </div>
    </>
  );
};

export default PostDetails;
