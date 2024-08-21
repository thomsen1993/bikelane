"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Button from "@/components/Button";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Events = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(3);

  useEffect(() => {
    makeRequest("http://localhost:5888/events/", "GET", null);
  }, []);

  const handleNext = () => {
    setFirst(first + 1);
    setSecond(second + 1);
  };

  const handlePrevious = () => {
    setFirst(first - 1);
    setSecond(second - 1);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="mb-32">
      <div className="bg-darkBlue bgPattern">
        <div className="grid md:grid-cols-2 items-end pt-20 pb-44 wrapper">
          <div className=" xl:px-0 px-5">
            <h3>Kom og vær med</h3>
            <h2 className="text-white">Her er vores seneste arrangementer</h2>
          </div>
          <div className="md:justify-self-end md:mt-0 mt-10 xl:px-0 px-5">
            <Button href="https://swiperjs.com/element">Se alle events</Button>
          </div>
        </div>
      </div>
      <div className="wrapper relative group -mt-20">
        <div className="grid grid-cols-3">
          {data.slice(first, second).map((event) => (
            <figure className="first-of-type:skew-y-3 first-of-type:scale-75 last-of-type:-skew-y-3 last-of-type:scale-75">
              <img
                src={"http://localhost:5888/images/event/" + event.image}
                alt=""
                className="h-64 w-full object-cover rounded-xl"
              />
              <div className="my-4">
                <p className="text-accent">
                  {event.category.category}: {event.destination}
                </p>
                <p className="font-bold text-xl">{event.title}</p>
              </div>
            </figure>
          ))}
        </div>
        <div className="absolute top-1/2 flex justify-between w-full text-3xl opacity-0 group-hover:opacity-100 transition">
          <button
            className="bg-white rounded-full border disabled:text-thirdary disabled:cursor-not-allowed p-2"
            onClick={handlePrevious}
            disabled={first === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-white rounded-full border disabled:text-thirdary disabled:cursor-not-allowed p-2"
            onClick={handleNext}
            disabled={second >= data.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
