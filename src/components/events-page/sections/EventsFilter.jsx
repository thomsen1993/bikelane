"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

const EventsFilter = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: eventData,
    isLoading: eventLoading,
    error: eventEroor,
    makeRequest: eventMakeRequest,
  } = useRequestData();

  const [filter, setFilter] = useState("Alle");

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
            className={`pb-2 hover:border-b hover:border-primary border-b ${filter === event.category ? "border-b border-primary" : "border-transparent"}`}
          >
            {event.category}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 border-b pb-20 mb-20">
        {filteredEvents.map((event) => (
          <div>
            <img
              src={"http://localhost:5888/images/event/" + event.image}
              alt=""
              className="h-72 w-full object-cover rounded-xl"
            />
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsFilter;
