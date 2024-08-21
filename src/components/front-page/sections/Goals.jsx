"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";
import goalImg from "../../../../public/backgroundspatterns/bg1.jpg";

import { FaPlay, FaCrown, FaBiking, FaMap, FaHandshake } from "react-icons/fa";

import Video from "../../Video";

const Goals = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: heroesData,
    isLoading: heroesLoading,
    error: heroesError,
    makeRequest: heroesMakeRequest,
  } = useRequestData();

  const [video, setVideo] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5888/goals/", "GET", null);
  }, []);

  useEffect(() => {
    heroesMakeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading || heroesLoading) return <p>Loading...</p>;
  if (error || heroesError) return <p>Error... 😒</p>;
  if (!data || !heroesData) return null;

  return (
    <section className=" mb-20">
      <div className="bg-darkBlue/10 pt-20 pb-36">
        <div className="grid md:grid-cols-2 items-end wrapper">
          <div className="xl:px-0 px-5">
            <h3>{heroesData[2].suptitle}</h3>
            <h2>{heroesData[2].title}</h2>
          </div>
          <div className="mt-10 md:mt-0 xl:px-0 px-5">
            <p>{heroesData[2].content}</p>
          </div>
        </div>
      </div>
      <div className="md:flex items-center wrapper -mt-14 xl:px-0 px-5">
        <div className="grid md:col-span-4">
          <Image
            src={goalImg}
            alt="goal background image"
            className="col-start-1 row-start-1 md:h-72 h-full object-cover rounded-xl"
          ></Image>
          <div className="col-start-1 row-start-1 md:flex justify-between items-center text-white text-center md:mx-10 py-5">
            {data.map((event) => (
              <div>
                <div className="w-fit p-5 bg-accent rounded-full mx-auto">
                  {event.icon === "fas fa-crown" && <FaCrown />}
                  {event.icon === "fas fa-biking" && <FaBiking />}
                  {event.icon === "far fa-map" && <FaMap />}
                  {event.icon === "far fa-handshake" && <FaHandshake />}
                </div>
                <p className="text-4xl my-2">{event.goalcount}</p>
                <p className="text-accent">{event.goal}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => setVideo(true)}>
          <figure className="relative group md:-ml-14">
            <img
              src={"http://localhost:5888/images/hero/" + heroesData[2].image}
              alt=""
              className="md:h-60 object-cover rounded-xl"
            ></img>
            <div className="flex justify-center items-center w-10 h-10 bg-white text-accent rounded-full absolute right-5 bottom-5 group-hover:bg-accent group-hover:text-white transition">
              <FaPlay className="text-sm" />
            </div>
          </figure>
        </button>
        {video && (
          <Video
            close={() => setVideo(false)}
            videoSrc="https://www.youtube.com/embed/H55W1NhAbQo?si=qD9BUWz_FpANsC5o"
          />
        )}
      </div>
    </section>
  );
};

export default Goals;
