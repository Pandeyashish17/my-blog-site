import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { BiCopyAlt } from "react-icons/bi";
const PostDetails = ({ body, fileUrl }) => {
  
  return (
    <>
      <div className="lg:col-span-7 xl:col-span-8  lg:mb-0">

        <BlockContent
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          blocks={body}
          serializers={{
            types: {
              h1: (props) => (
                <h1 className="my-5 text-3xl font-bold" {...props} />
              ),
              h2: (props) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              p: (props) => <p className="my-5" {...props} />,
              li: ({ children }) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ children, href }) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              code: (props) => (
                <>
                  <div className="bg-[#00002c] pt-3 px-2 ">
                    <div className="flex justify-between ">
                      <div className="flex gap-1  ml-1 ">
                        <div className="bg-red-500 w-3 h-3 rounded-full "></div>{" "}
                        <div className="bg-yellow-500 w-3 h-3 rounded-full "></div>{" "}
                        <div className="bg-green-500 w-3 h-3 rounded-full "></div>{" "}
                      </div>
                      <div>
                        <BiCopyAlt
                          className="w-6 h-6 text-white cursor-pointer hover:scale-105"
                          onClick={() => {
                            navigator.clipboard.writeText(props.node.code);
                            copied();
                          }}
                        />
                      </div>
                    </div>
                    <pre
                      data-language={props.node.language}
                      className=" my-3 px-2  rounded-xl overflow-x-scroll scrollbar-hide  pb-2"
                    >
                      <code className=" text-white break-keep	 ">
                        {props.node.code}
                      </code>
                    </pre>
                  </div>
                </>
              ),
            },
          }}
        />
        {fileUrl && (
          <div className="my-5">
            <a
              href={`${fileUrl}?dl=`}
              class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Download{" "}
              </span>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
