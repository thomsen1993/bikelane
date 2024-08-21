import React from "react";

import { FaCheck } from "react-icons/fa";

const CommunityLayout = ({image1, image2, image3, image4, suptitle, title, content, keypoints}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="grid grid-cols-2 gap-5">
        <img
          src={"http://localhost:5888/images/community/" + image1}
          alt={image1}
          className="row-start-1 row-end-3 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + image2}
          alt={image2}
          className="row-start-1 row-end-2 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + image3}
          alt={image3}
          className="row-start-3 row-end-4 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + image4}
          alt={image4}
          className="row-start-2 row-end-4 rounded-xl"
        />
      </div>
      <div>
        <h3>{suptitle}</h3>
        <h2 className="mb-10">{title}</h2>
        <p className="mb-10">{content}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {keypoints.map((event) => (
            <div className="flex gap-3">
              <span className="bg-accent/10 rounded-sm h-fit p-1">
                <FaCheck className="text-sm text-accent" />
              </span>
              <p>{event.keypoint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityLayout;
