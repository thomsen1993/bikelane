"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import { FaQuoteRight } from "react-icons/fa";

const TestimonialAbout = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="bgPattern bg-darkBlue">
      <div className="wrapper mt-64">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:my-0 my-20 xl:px-0 px-5">
            <h3>{data[3].suptitle}</h3>
            <h2 className=" text-white">{data[3].title}</h2>
            <div className="grid grid-cols-6 items-center text-white">
              <p className="col-span-5 max-h-[70px] overflow-hidden">
                {data[3].content}
              </p>
              <span className="bg-accent w-fit rounded-full p-6">
                <FaQuoteRight className="text-4xl" />
              </span>
            </div>
          </div>
          <div className=" xl:px-0 px-5">
            <img src={"http://localhost:5888/images/hero/" + data[3].image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAbout;
