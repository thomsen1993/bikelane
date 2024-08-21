"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";

const MobileNav = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [sideBar, setSideBar] = useState(false);
  const [eventLinks, setEventLinks] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5888/eventcategories/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => setSideBar(!sideBar)} className="lg:hidden block">
        <div className="bg-primary h-[3px] w-5 rounded-md my-0.5 mr-6"></div>
        <div className="bg-primary h-[3px] w-5 rounded-md my-0.5 mr-6"></div>
        <div className="bg-primary h-[3px] w-5 rounded-md my-0.5 mr-6"></div>
      </button>
      {sideBar && (
        <ul className="lg:hidden block fixed top-0 left-0 max-w- h-screen bg-darkPurple z-50 p-10">
          <button className="flex justify-end w-full text-xl text-white" onClick={() => setSideBar(!sideBar)}><FaRegWindowClose /></button>
          <Image
            src={logo}
            alt="bikeline logo"
            width={210}
            className="py-5 px-3"
          ></Image>
          {navigation.map((event, index) => (
            <li>
              <Link
                key={index}
                href={event.href}
                className="flex items-center justify-between text-white hover:bg-thirdary/20 py-6 px-3 group"
              >
                {event.name}
                {event.icon && (
                  <MdKeyboardArrowDown
                    className="group-hover:rotate-180 transition"
                    onClick={() =>
                      event.name === "Events"
                        ? setEventLinks(!eventLinks)
                        : null
                    }
                  />
                )}
              </Link>
              {event.icon && (
                <>
                  {eventLinks && (
                    <ul className="mt-3">
                      {data.map((e) => (
                        <li
                          key={e._id}
                          className="hover:bg-thirdary/20 text-white rounded-md block px-5 py-3"
                        >
                          <Link href={"/" + e.category}>{e.category}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
const navigation = [
  {
    name: "Forside",
    href: "/",
    icon: false,
  },
  {
    name: "Om os",
    href: "/about",
    icon: false,
  },
  {
    name: "Events",
    href: "/events",
    icon: true,
  },
  {
    name: "Kontakt",
    href: "/contact",
    icon: false,
  },
  {
    name: "Nyheder",
    href: "/news",
    icon: false,
  },
];

export default MobileNav;
