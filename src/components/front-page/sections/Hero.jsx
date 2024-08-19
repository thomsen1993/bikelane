"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Video from "../../Video";
import Button from "@/components/Button";

import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [video, setVideo] = useState(false);

  useEffect(() => {
    makeRequest(
      "http://localhost:5888/heroes/653d440a5d213e546d6dd303/",
      "GET",
      null
    );
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="-mt-32 bg-darkBlue/10">
      <div className="grid grid-cols-2 items-center wrapper pt-48 pb-32">
        <div className="mr-20">
          <h1>{data.title}</h1>
          <p className="py-10">{data.content}</p>
          <Button href={data.buttonlink}>{data.buttontext}</Button>
        </div>
        <figure className="justify-self-end relative group">
          <button onClick={() => setVideo(true)}>
            <div className="flex justify-center items-center w-10 h-10 bg-white text-accent rounded-full absolute right-5 top-5 group-hover:bg-accent group-hover:text-white transition">
              <FaPlay className="text-sm" />
            </div>
            <img
              src={"http://localhost:5888/images/hero/" + data.image}
              className="rounded-lg shadow-xl h-[30rem] w-[40rem] object-cover"
            ></img>
          </button>
        </figure>
      </div>
      {video && <Video close={() => setVideo(false)} videoSrc="https://www.youtube.com/embed/H55W1NhAbQo?si=qD9BUWz_FpANsC5o"/>}
    </section>
  );
};

export default Hero;
