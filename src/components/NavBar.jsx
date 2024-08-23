"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";

import Image from "next/image";
import logo from "../../public/logo-black.png";

import {
  FaRegCalendarAlt,
  FaRegBuilding,
  FaRegEnvelope,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/contactinformation/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <header
      className="wrapper sticky top-2 lg:-top-10 left-0 xl:px-0 px-5 z-40"
      id="top"
    >
      <div className="hidden lg:flex justify-between py-3">
        <div className="flex gap-6">
          <div className="flex items-center gap-3">
            <FaRegBuilding />
            <p>
              Klubhuset: {data.address}, {data.zipcity}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCalendarAlt />
            <p>{data.openinghours}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegEnvelope />
            <Link href={"mailto:" + data.email}>{data.email}</Link>
          </div>
        </div>
        <div className="flex gap-3">
          {data.some.map((event) => (
            <Link
              key={event._id}
              href={event.link}
              target="_blank"
              className="text-lg hover:text-accent transition"
            >
              {event.icon === "fab fa-instagram" && <FaInstagram />}
              {event.icon === "fab fa-pinterest" && <FaPinterest />}
              {event.icon === "fab fa-twitter" && <FaTwitter />}
              {event.icon === "fab fa-facebook" && <FaFacebook />}
            </Link>
          ))}
        </div>
      </div>
      <nav className="flex items-center justify-between bg-white rounded-md shadow-lg">
        <Link href="/">
          <Image
            src={logo}
            alt="bikeline logo"
            width={110}
            className="ml-6 py-5"
          ></Image>
        </Link>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
};

export default NavBar;
