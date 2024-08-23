"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Editer from "@/components/Editer";

const HeroesAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [editer, setEditer] = useState(null);

  const getFewWords = (message) => {
    return message.split(" ").slice(0, 10).join(" ");
  };

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;
  return (
    <section className="my-10 wrapper">
      <h2>Heroes settings</h2>
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
              <td>{event.suptitle}</td>
              <td>{getFewWords(event.content)}</td>
              <td>{event.buttontext}</td>
              <td>{event.buttonlink}</td>
              <td>{event.videolink}</td>
              <td>
                {event.image && (
                  <img
                    src={"http://localhost:5888/images/hero/" + event.image}
                    alt=""
                    className="h-28 w-full object-cover"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editer && (
        <Editer
          title={editer.title}
          subtitle={editer.suptitle}
          content={editer.content}
          link={editer.videolink}
          buttontext={editer.buttontext}
          buttonlink={editer.buttonlink}
          id={editer._id}
          setEditer={setEditer}
        />
      )}
    </section>
  );
};

const head = [
  {
    name: "Title",
  },
  {
    name: "Subtitle",
  },
  {
    name: "Content",
  },
  {
    name: "Button text",
  },
  {
    name: "Button Link",
  },
  {
    name: "YouTube Link",
  },
  {
    name: "Image",
  },
];

export default HeroesAdmin;
