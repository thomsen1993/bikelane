"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import {
  PiProjectorScreenChart,
  PiWallThin,
  PiWindThin,
  PiGearSixFill,
} from "react-icons/pi";

const Interest = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/interest/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="grid grid-cols-2 wrapper my-20">
      <div>
        <div>
          <h3>{data.suptitle}</h3>
          <h2>{data.title}</h2>
          <p className="my-10">{data.content}</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {data.keypoints.map((event) => (
            <div className="flex gap-5">
              <div className="bg-accent/20 text-2xl text-accent rounded-full h-fit p-2">
                {event.icon === "ph-projector-screen-chart-thin" && (
                  <PiProjectorScreenChart />
                )}
                {event.icon === "ph-wall-thin" && <PiWallThin />}
                {event.icon === "ph-wind-thin" && <PiWindThin />}
                {event.icon === "ph-gear-six-thin" && <PiGearSixFill />}
              </div>
              <div>
                <p className="font-bold text-xl">{event.keypoint}</p>
                <p className="text-sm my-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="grid grid-cols-2 gap-7 my-5 ml-20">
          <img
            src={"http://localhost:5888/images/interest/" + data.image1}
            alt={data.image1}
            className="row-start-1 row-end-2 rounded-xl h-full"
          />
          <img
            src={"http://localhost:5888/images/interest/" + data.image2}
            alt={data.image2}
            className="row-start-2 row-end-4 rounded-xl h-full"
          />
          <img
            src={"http://localhost:5888/images/interest/" + data.image3}
            alt={data.image3}
            className="row-start-1 row-end-3 rounded-xl h-full"
          />
          <img
            src={"http://localhost:5888/images/interest/" + data.image4}
            alt={data.image4}
            className="row-start-3 row-end-4 rounded-xl h-full"
          />
        </div>
    </section>
  );
};

export default Interest;
