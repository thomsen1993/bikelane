"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Editer from "@/components/Editer";

const EventsAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [editer, setEditer] = useState(null);

  useEffect(() => {
    makeRequest("http://localhost:5888/events", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="wrapper my-10">
      <h2>Events settings</h2>
      <table className="my-2">
        <thead>
          <tr>
            {head.map((e, i) => (
              <th key={i}>{e.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((event) => (
            <tr>
              <td>{event.title}</td>
              <td>
                <div dangerouslySetInnerHTML={{ __html: event.content }}></div>
              </td>
              <td>{event.eventdate}</td>
              <td>{event.destination}</td>
              <td>{event.coordinates}</td>
              <td>{event.distance} km</td>
              <td>{event.difficulty}</td>
              <td>
                <img
                  src={"http://localhost:5888/images/event/" + event.image}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const head = [
  {
    name: "Title",
  },
  {
    name: "Content",
  },
  {
    name: "Event date",
  },
  {
    name: "Destination",
  },
  {
    name: "Coordinates",
  },
  {
    name: "Distance",
  },
  {
    name: "Difficulty",
  },
  {
    name: "Image",
  },
];

export default EventsAdmin;
