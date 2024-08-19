"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import { FaCheck } from "react-icons/fa";

const Community = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/community/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="grid grid-cols-2 wrapper my-20">
      <div className="grid grid-cols-2 gap-7 mt-5 mr-20">
        <img
          src={"http://localhost:5888/images/community/" + data.image1}
          alt={data.image1}
          className="row-start-1 row-end-3 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + data.image2}
          alt={data.image2}
          className="row-start-1 row-end-2 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + data.image3}
          alt={data.image3}
          className="row-start-3 row-end-4 rounded-xl"
        />
        <img
          src={"http://localhost:5888/images/community/" + data.image4}
          alt={data.image4}
          className="row-start-2 row-end-4 rounded-xl"
        />
      </div>
      <div>
        <h3>{data.suptitle}</h3>
        <h2 className="mb-10">{data.title}</h2>
        <p className="mb-10">{data.content}</p>
        <div className="grid grid-cols-2 gap-5">
          {data.keypoints.map((event) => (
            <div className="flex gap-3">
              <span className="bg-accent/10 rounded-sm h-fit p-1">
                <FaCheck className="text-sm text-accent" />
              </span>
              <p>{event.keypoint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
