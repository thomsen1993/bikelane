"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";

import Image from "next/image";
import logo from "../../public/logo-black.png";

import { FaRegCalendarAlt, FaRegBuilding, FaRegEnvelope, FaInstagram, FaPinterest, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/contactinformation/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <header className="wrapper sticky -top-10 z-50">
      <div className="flex justify-between py-3">
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
            <Link href={event.link} target="_blank">
              {event.icon === "fab fa-instagram" && <FaInstagram/>}
              {event.icon === "fab fa-pinterest" && <FaPinterest/>}
              {event.icon === "fab fa-twitter" && <FaTwitter/>}
              {event.icon === "fab fa-facebook" && <FaFacebook/>}
            </Link>
          ))}
        </div>
      </div>
      <nav className="flex items-center justify-between bg-white rounded-md shadow-lg">
        <Image src={logo} alt="bikeline logo" width={120} className="ml-6"></Image>
        <div className="flex items-center gap-3">
          <ul className="flex">
            {navigation.map((event, index) => (
              <li className="">
                <Link
                  key={index}
                  href={event.href}
                  className="flex items-center hover:bg-thirdary/20 hover:border-b-2 hover:border-accent border-b-2 border-transparent py-6 px-3 group relative"
                >
                  {event.name}
                  {event.icon ? (
                    <MdKeyboardArrowDown className="group-hover:rotate-180 transition" />
                  ) : null}
                  {event.extra && (
                    <ul className="absolute top-16 left-0 hidden group-hover:block group-hover:opacity-100 rounded-md bg-white shadow-lg py-3 px-2 mt-3">
                      {event.extra.map((e, i) => (
                        <li>
                          <Link key={i} href={e.href}>
                            {e.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          <Link href="#" className="bg-accent text-white rounded-r-md px-6 py-6">Gratis prøveperiode</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const navigation = [
  {
    name: "Forside",
    href: "",
    icon: false,
  },
  {
    name: "Om os",
    href: "",
    icon: false,
  },
  {
    name: "Events",
    href: "",
    icon: true,
    extra: [
      {
        name: "gg",
        href: "#",
      },
      {
        name: "ggggggggggggggggg",
        href: "#",
      },
    ],
  },
  {
    name: "Kontakt",
    href: "",
    icon: false,
  },
  {
    name: "Nyheder",
    href: "",
    icon: false,
  },
];

export default NavBar;
