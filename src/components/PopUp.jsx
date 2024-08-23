import React from "react";

import { FaRegWindowClose, FaMap } from "react-icons/fa";
import { MdOutlineWatchLater, MdDirectionsBike } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

const PopUp = ({
  src,
  title,
  category,
  content,
  date,
  destination,
  distance,
  difficulty,
  close,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm z-50">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-primary rounded-xl bg-white/80 backdrop-blur-sm max-h-screen overflow-y-scroll p-5">
        <span
          className="flex justify-end text-xl cursor-pointer"
          onClick={close}
        >
          <FaRegWindowClose />
        </span>
        <div className="mb-5">
          <h3>{category}</h3>
          <h2>{title}</h2>
        </div>
        <img
          src={src}
          alt="event pictures"
          className="rounded-xl border-2 border-primary"
        />
        <div className="grid grid-cols-4 gap-5 my-5">
          <div className="flex justify-center items-center gap-2 border-2 border-primary rounded-xl text-sm bg-white/80 p-5">
            <MdOutlineWatchLater className="text-2xl" />
            <span>
              {new Date(date).toLocaleDateString("da-DK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 border-2 border-primary rounded-xl text-sm bg-white/80 p-5">
            <FaMap className="text-2xl" />
            <p>{destination}</p>
          </div>
          <div className="flex justify-center items-center gap-2 border-2 border-primary rounded-xl text-sm bg-white/80 p-5">
            <GiPathDistance className="text-2xl" />
            <p>{distance} Km</p>
          </div>
          <div className="flex justify-center items-center gap-2 border-2 border-primary rounded-xl text-sm bg-white/80 p-5">
            <MdDirectionsBike className="text-2xl" />
            <p>1/10 - {difficulty}</p>
          </div>
        </div>
        <div className="border-2 border-primary rounded-xl bg-white/80 p-5">
          <h4>Event</h4>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
