import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import useStateContext from "../../../context/StateContext";

const ShareButtons = ({path}) => {
  const { url } = useStateContext();

  return (
    <>
      {" "}
      <div className="social-share flex items-center gap-2 mb-4">
        <span className="text-coolGray-900 font-bold text-sm mr-1">SHARE</span>

        <FacebookShareButton url={`${url}/${path}`}>
          <FacebookIcon size={28} round={true} />
        </FacebookShareButton>

        <LinkedinShareButton url={`${url}/${path}`}>
          <LinkedinIcon size={28} round={true} />
        </LinkedinShareButton>
        <RedditShareButton url={`${url}/${path}`}>
          <RedditIcon size={28} round={true} />
        </RedditShareButton>
        <TelegramShareButton url={`${url}/${path}`}>
          <TelegramIcon size={28} round={true} />
        </TelegramShareButton>
        <TwitterShareButton url={`${url}/${path}`}>
          <TwitterIcon size={28} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={`${url}/${path}`}>
          <WhatsappIcon size={28} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
