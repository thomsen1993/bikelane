"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Editer from "@/components/Editer";
import Add from "@/components/Add";

const EventsAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [editer, setEditer] = useState(null);
  const [add, setAdd] = useState(null);

  const getFewWords = (message) => {
    return message.split(" ").slice(0, 10).join(" ");
  };

  useEffect(() => {
    makeRequest("http://localhost:5888/events", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="wrapper my-10">
      <h2>Events settings</h2>
      <table className="mt-2">
        <thead>
          <tr>
            {head.map((e, i) => (
              <th key={i}>{e.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((event) => (
            <tr key={event._id} onClick={() => setEditer(event)}>
              <td>{event.title}</td>
              <td>
                <div dangerouslySetInnerHTML={{ __html: getFewWords(event.content) }}></div>
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
      <button
        className="border-x-2 border-b-2 border-green-700 text-xl text-center w-full hover:bg-green-300/50"
        onClick={() => setAdd(true)}
      >
        +
      </button>
      {editer && (
        <Editer
          id={editer._id}
          title={editer.title}
          contentQuill={editer.content}
          destination={editer.destination}
          coordinates={editer.coordinates}
          distance={editer.distance}
          difficulty={editer.difficulty}
          // date={editer.eventdate}
          deleteBtn="Delete"
          setEditer={setEditer}
        />
      )}
      {add && <Add setAdd={setAdd}/>}
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
