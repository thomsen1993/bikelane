"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PopUp from "@/components/PopUp";

const EventsFilter = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: eventData,
    isLoading: eventLoading,
    error: eventEroor,
    makeRequest: eventMakeRequest,
  } = useRequestData();

  const [filter, setFilter] = useState("Alle");
  const [extra, setExtra] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5888/eventcategories/", "GET", null);
  }, []);

  useEffect(() => {
    eventMakeRequest("http://localhost:5888/events/", "GET", null);
  }, []);

  if (isLoading || eventEroor) return <p>Loading...</p>;
  if (error || eventLoading) return <p>Error... 😒</p>;
  if (!data || !eventData) return null;

  const filteredEvents =
    filter === "Alle"
      ? eventData
      : eventData.filter((event) => event.category.category === filter);

  return (
    <section className="wrapper xl:px-0 px-5">
      <div className="flex justify-center gap-2 mb-5">
        {data.map((event) => (
          <button
            key={event._id}
            onClick={() => setFilter(event.category)}
            className={`pb-2 hover:border-b hover:border-primary border-b ${
              filter === event.category
                ? "border-b border-primary"
                : "border-transparent"
            }`}
          >
            {event.category}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {filteredEvents.map((event) => (
          <button className="text-start group" onClick={() => setExtra(event)}>
            <figure className=" overflow-hidden rounded-xl">
              <img
                src={"http://localhost:5888/images/event/" + event.image}
                alt=""
                className="h-72 w-full object-cover rounded-xl group-hover:rotate-12 group-hover:scale-150 group-hover:brightness-50 transition"
              />
            </figure>
            <div className="mt-5">
              <p className="text-accent">
                <span>
                  {new Date(event.eventdate).toLocaleDateString("da-DK", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>{" "}
                | {event.destination}
              </p>
              <h4>{event.title}</h4>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center border-b mt-10 pb-20 mb-20">
        {pagination.map((event) => (
          <button className="border-l border-y first-of-type:rounded-l-md last-of-type:border-r last-of-type:rounded-r-md text-sm text-primary hover:bg-accent hover:text-white transition h-10 px-4">
            {event.name}
          </button>
        ))}
      </div>
      {extra && (
        <PopUp
          src={"http://localhost:5888/images/event/" + extra.image}
          category={extra.category.category}
          title={extra.title}
          content={extra.content}
          destination={extra.destination}
          distance={extra.distance}
          date={extra.eventdate}
          difficulty={extra.difficulty}
          close={() => setExtra(false)}
        />
      )}
    </section>
  );
};

const pagination = [
  {
    name: <FaArrowLeft />,
  },
  {
    name: 1,
  },
  {
    name: 2,
  },
  {
    name: 3,
  },
  {
    name: <FaArrowRight />,
  },
];

export default EventsFilter;
