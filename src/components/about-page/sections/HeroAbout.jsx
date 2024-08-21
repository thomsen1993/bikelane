"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Button from "@/components/Button";

const HeroAbout = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="-mt-32 bg-darkBlue/10">
      <div className=" wrapper pt-48">
        <div className="grid grid-cols-2 items-end mb-20">
          <div>
            <h3>{data[1].suptitle}</h3>
            <h2>{data[1].title}</h2>
          </div>
          <div>
            <p className="mb-10">{data[1].content}</p>
            <Button href="/contact">Kom og vær med</Button>
          </div>
        </div>
        <figure className="grid ">
          <img
            src={"http://localhost:5888/images/hero/" + data[1].image}
            alt=""
            className="rounded-xl -mb-44"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroAbout;
