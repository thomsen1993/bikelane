"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import { FaCrown, FaBiking, FaMap, FaHandshake } from "react-icons/fa";

const GoalsAbout = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/goals/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="bg-darkBlue/10 px-10">
      <div className="flex flex-col md:flex-row justify-between items-center text-center wrapper py-28">
        {data.map((event) => (
          <div className="relative">
            <div className="w-fit p-2 text-accent rounded-full border border-accent absolute -top-5 -right-10">
              {event.icon === "fas fa-crown" && <FaCrown />}
              {event.icon === "fas fa-biking" && <FaBiking />}
              {event.icon === "far fa-map" && <FaMap />}
              {event.icon === "far fa-handshake" && <FaHandshake />}
            </div>
            <p className="text-4xl font-bold my-2">{event.goalcount}</p>
            <p className="text-secondary">{event.goal}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalsAbout;
