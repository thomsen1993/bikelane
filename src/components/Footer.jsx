"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";
import bg from "../../public/backgroundspatterns/contour.png";
import logo from "../../public/logo.png";

import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHome, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: eData,
    isLoading: eLoading,
    error: eError,
    makeRequest: eMakeRequest,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/contactinformation/", "GET", null);
  }, []);

  useEffect(() => {
    eMakeRequest("http://localhost:5888/events/", "GET", null);
  }, []);

  if (isLoading || eLoading) return <p>Loading...</p>;
  if (error || eError) return <p>Error... 😒</p>;
  if (!data || !eData) return null;

  return (
    <footer className="grid items-center text-thirdary">
      <Image
        src={bg}
        alt=""
        className="col-start-1 row-start-1 h-full bg-darkBlue"
      ></Image>
      <div className=" col-start-1 row-start-1 py-10 xl:px-0 px-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 border-b border-thirdary wrapper pb-10">
          <div>
            <Image src={logo} alt="" width={120} className="mb-10"></Image>
            <p>
              Kom og vær med - vi cyckler hver dag og der er plads til alle...
            </p>
            <div className="mt-10">
              <p className="flex items-center gap-1 mb-2">
                <span className="bg-thirdary/50 text-accent rounded-full p-2">
                  <FaHome />
                </span>
                Klubhuset: {data.address}, {data.zipcity}
              </p>
              <Link
                href={"mailto:" + data.email}
                className="flex items-center gap-1"
              >
                <span className="bg-thirdary/50 text-accent rounded-full p-2">
                  <FaEnvelope />
                </span>
                {data.email}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white border-b border-thirdary pb-10">
              {links.titles[0].title}
            </h4>
            <ul className="pt-5">
              {links.eventsLinks.map((event, index) => (
                <li className="flex items-center my-5 group">
                  <MdKeyboardArrowRight className="text-accent text-xl group-hover:translate-x-1 transition" />
                  <Link key={index} href={event.href}>
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white border-b border-thirdary pb-10">
              {links.titles[1].title}
            </h4>
            <ul className="pt-5">
              {links.content.map((event, index) => (
                <li className="flex items-center my-5 group">
                  <MdKeyboardArrowRight className="text-accent text-xl group-hover:translate-x-1 transition" />
                  <Link key={index} href={event.href}>
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white border-b border-thirdary pb-10">
              {links.titles[2].title}
            </h4>
            <div className="grid grid-cols-3 gap-3 mt-10">
              {eData.slice(0, 6).map((event) => (
                <figure className="overflow-hidden">
                  <img
                    src={"http://localhost:5888/images/event/" + event.image}
                    alt=""
                    className="h-full rounded-md hover:scale-125 hover:rotate-12 transition "
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 wrapper">
          <p>&copy; Copyright 2012 Bikelane.</p>
        </div>
        <Link href="#top" className="fixed right-10 bottom-10 bg-white text-primary rounded-md border border-primary shadow-md transition hover:bg-primary hover:text-white p-5">
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
};

const links = {
  titles: [
    {
      title: "Kommende events",
    },
    {
      title: "Indhold",
    },
    {
      title: "Galleri",
    },
  ],
  content: [
    {
      name: "Om os",
      href: "/about",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Kontakt",
      href: "/contact",
    },
    {
      name: "Nyheder",
      href: "/news",
    },
  ],
  eventsLinks: [
    {
      name: "Moseløb",
      href: "#",
    },
    {
      name: "Værkested og vedligeholdelse",
      href: "#",
    },
    {
      name: "Skovtur",
      href: "#",
    },
    {
      name: "Årets juleløb 2024",
      href: "#",
    },
  ],
};

export default Footer;
