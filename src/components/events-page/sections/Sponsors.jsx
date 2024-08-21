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
      <div className="wrapper mb-20 xl:px-0 px-5">
        <div className="grid lg:grid-cols-3">
          <div className="lg:text-start text-center lg:col-span-1 col-span-2">
            <h3>Sponsers</h3>
            <h4>Støt vores sponsorer - de støtter os</h4>
          </div>
          <div className="col-span-2 grid grid-cols-7 md:mt-0 mt-10">
            {data.map((event) => (
              <img
                src={"http://localhost:5888/images/sponsor/" + event.logo}
                alt=""
                className="grayscale"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bgPattern bg-darkBlue py-20">
        <div className="grid md:grid-cols-2 items-end wrapper xl:px-0 px-5">
          <div>
            <h3>Bliv en ad os</h3>
            <h2 className="text-white">Lad os mødes - lad os cukle sammen</h2>
          </div>
          <div className="md:justify-self-end md:mt-0 mt-10">
            <Button href="/contact">Kontakt os nu</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
