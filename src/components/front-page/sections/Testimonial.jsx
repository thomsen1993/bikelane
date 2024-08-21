"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";
import bgCards from "../../../../public/backgroundspatterns/bg5.jpg";
import bg from "../../../../public/backgroundspatterns/bg2.jpg";

import Link from "next/link";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Testimonial = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: heroesData,
    isLoading: heroesLoading,
    error: heroesError,
    makeRequest: heroesMakeRequest,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/testimonials/", "GET", null);
  }, []);

  useEffect(() => {
    heroesMakeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading || heroesLoading) return <p>Loading...</p>;
  if (error || heroesError) return <p>Error... 😒</p>;
  if (!data || !heroesData) return null;

  return (
    <section className="grid items-center">
      <Image src={bg} alt="" className="col-start-1 row-start-1"></Image>
      <div className="wrapper col-start-1 row-start-1">
        <div className="grid md:grid-cols-2 items-end mb-20 xl:px-0 px-5">
          <div>
            <h3>Hvem vi er</h3>
            <h2>{heroesData[3].title}</h2>
          </div>
          <p className="md:mt-0 mt-10">{heroesData[3].content}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 xl:px-0 px-5">
          {data.slice(0, 4).map((event) => (
            <div key={event._id} className="relative">
              <div className="absolute right-7 top-7 text-white flex flex-col gap-2">
                {socials.map((event, index) => (
                  <Link
                    href={event.href}
                    key={index}
                    className="bg-accent rounded-full hover:bg-white hover:text-accent transition p-2"
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
              <img
                src={"http://localhost:5888/images/testimonial/" + event.image}
                alt=""
                className="rounded-xl h-96 w-full object-cover"
              />
              <div className="grid -mt-10 mx-7">
                <Image
                  src={bgCards}
                  alt=""
                  className="col-start-1 row-start-1 rounded-xl"
                ></Image>
                <div className="col-start-1 row-start-1 p-5">
                  <h4>{event.name}</h4>
                  <p className="text-accent py-1">{event.experience}</p>
                  <p>{event.motivation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const socials = [
  {
    name: <FaFacebook />,
    href: "#",
  },
  {
    name: <FaInstagram />,
    href: "#",
  },
  {
    name: <FaTwitter />,
    href: "#",
  },
];

export default Testimonial;
