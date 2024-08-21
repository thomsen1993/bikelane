"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";
import bg from "../../../../public/backgroundspatterns/bg1.jpg";

const HeroContact = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="xl:-mt-32 sm:-mt-32 -mt-20">
      <div className="grid items-center">
        <Image
          src={bg}
          alt=""
          className="w-full col-start-1 row-start-1"
        ></Image>
        <div className="col-start-1 row-start-1 text-center wrapper py-10">
          <h3 className="text-white">{data[4].suptitle}</h3>
          <h2 className="text-white ">{data[4].title}</h2>
        </div>
      </div>
      <article className="wrapper">
        <img
          src={"http://localhost:5888/images/hero/" + data[4].image}
          alt=""
          className="w-full max-h-[30rem] object-cover rounded-xl xl:-mt-52 sm:-mt-10 -mt-2 xl:px-0 px-5"
        />
      </article>
    </section>
  );
};

export default HeroContact;
