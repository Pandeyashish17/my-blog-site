import React from "react";

const Header = ({ query, len }) => {
  return (
    <>
      <section
        className="bg-cover md:pt-40 pt-28 md:pb-28 pb-14 innerpage-area"
        style={{
          backgroundImage: `url(${"https://nft-apasd40-gmailcom.vercel.app/assets/images/hero-banner-bg.svg"})`,
        }}
      >
        <div className="container mx-auto">
          <div className="text-center page-title">
            <h1 className="font-bold text-4xl lg:text-7xl text-coolGray-900 capitalize">
              {query}
            </h1>
            {query != "Blog" && (
              <h2 className="font-bold text-2xl mt-3 ">
                {len} results found!!
              </h2>
            )}
          </div>
          <div className="relative text-center banner-box">
            <div className="banner-dot hidden lg:block">
              <img
                className="absolute left-0 banner-dot-1 -top-28 top-bottom-animation-1"
                src="https://nft-apasd40-gmailcom.vercel.app/assets/images/hero-banner-dot-1.svg"
                alt="hero-banner-dot-1"
              />
              <img
                className="absolute bottom-0 right-0 -top-48 banner-dot-2 top-bottom-animation-2"
                src="https://nft-apasd40-gmailcom.vercel.app/assets/images/hero-banner-dot-2.svg"
                alt="hero-banner-dot-2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
