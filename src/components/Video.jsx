import React from "react";

import { IoMdClose } from "react-icons/io";

const Video = ({ close, videoSrc }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-50">
      <IoMdClose
        className="absolute top-0 right-5 bg-black/50 cursor-pointer mr-2 mt-2"
        size={40}
        onClick={close}
      />
      <div className="flex h-full justify-center items-center">
        <iframe
          className=""
          width="860"
          height="515"
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;