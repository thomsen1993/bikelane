"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Button from "../../Button";

const Sponsors = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/sponsors/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section>
      <div className="wrapper grid grid-cols-9 items-center gap-10 mb-20">
        <div className="col-span-2">
          <h3>Sponsers</h3>
          <h4>Støt vores sponsorer - de støtter os</h4>
        </div>
        {data.map((event) => (
          <img
            src={"http://localhost:5888/images/sponsor/" + event.logo}
            alt=""
            className="grayscale "
          />
        ))}
      </div>
      <div className="bgPattern bg-darkBlue py-20">
        <div className="grid grid-cols-2 items-end wrapper">
          <div>
            <h3>Bliv en ad os</h3>
            <h2 className="text-white">Lad os mødes - lad os cukle sammen</h2>
          </div>
          <div className="justify-self-end">
            <Button href="/contact">Kontakt os nu</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
