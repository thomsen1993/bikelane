"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

const DesktopNav = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/eventcategories/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;

  return (
    <ul className="hidden lg:flex">
      {navigation.map((event, index) => (
        <li className="">
          <Link
            key={index}
            href={event.href}
            className="flex items-center hover:bg-thirdary/20 hover:border-b-2 hover:border-accent border-b-2 border-transparent py-6 px-3 group relative"
          >
            {event.name}
            {event.icon && (
              <>
                <MdKeyboardArrowDown className="group-hover:rotate-180 transition" />
                {data && (
                  <ul className="absolute top-[62px] left-0 hidden group-hover:block group-hover:opacity-100 rounded-md bg-white shadow-lg mt-3">
                    {data.map((e) => (
                      <li key={e._id}>
                        <Link
                          key={e._id}
                          href={"/" + e.category}
                          className="hover:bg-thirdary/20 rounded-md block px-5 py-3"
                        >
                          {e.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </Link>
        </li>
      ))}
      <Link href="#" className="bg-accent text-white rounded-r-md px-6 py-6">
        Gratis prøveperiode
      </Link>
    </ul>
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

export default DesktopNav;
