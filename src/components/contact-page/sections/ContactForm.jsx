"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";

import { FaBuilding, FaSearchLocation, FaEnvelope } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

import Button from "@/components/Button";

const ContactForm = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { makeRequest: POSTMakeRequest } = useRequestData();

  const [doneMessage, setDoneMessage] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5888/contactinformation/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    POSTMakeRequest("http://localhost:5888/inqueries", "POST", fd);
    setDoneMessage(true);
    setTimeout(() => {
      setDoneMessage(false);
      e.target.reset();
    }, 3000);
  };
  return (
    <section className="grid grid-cols-3 gap-5 wrapper my-20">
      <ul className="bg-darkBlue/10 rounded-md h-fit p-7">
        <li className="flex items-center gap-2 py-2">
          <span className="bg-accent/30 text-accent rounded-full p-2">
            <FaBuilding />
          </span>
          Klubhuset I Grenå
        </li>
        <li className="py-2 flex items-center gap-2">
          <span className="bg-accent/30 text-accent rounded-full p-2">
            <FaSearchLocation />
          </span>
          {data.address}, {data.zipcity}
        </li>
        <li className="py-2 flex items-center gap-2">
          <span className="bg-accent/30 text-accent rounded-full p-2">
            <MdOutlineWatchLater />
          </span>
          {data.openinghours}
        </li>
        <li>
          <Link
            href={"mailto:" + data.email}
            className="flex items-center gap-2 py-2"
          >
            <span className="bg-accent/30 text-accent rounded-full p-2">
              <FaEnvelope />
            </span>
            {data.email}
          </Link>
        </li>
      </ul>
      <form action="" onSubmit={handleSubmit} className="col-span-2">
        {form.map((event, index) => (
          <>
            <label
              key={index}
              htmlFor={event.name}
              className="w-full text-thirdary py-1"
            >
              {event.label}
            </label>
            <input
              name={event.name}
              type={event.type}
              id={event.name}
              placeholder={event.placeholder}
              required
              className="w-full border border-thirdary p-2 mb-5"
            />
          </>
        ))}
        <label htmlFor="message" className="w-full text-thirdary py-1">
          Besked
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Din besked..."
          rows={5}
          required
          className="w-full border border-thirdary p-2 mb-5"
        ></textarea>
        <button type="submit"><Button>Send besked</Button> </button>
        {doneMessage && <p className="bg-green-300 text-green-600 text-center border border-green-600 animate-pulse">Besked sendt! 😊</p>}
      </form>
    </section>
  );
};

const form = [
  {
    name: "name",
    label: "Navn",
    placeholder: "Dit Navn...",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Din email...",
    type: "email",
  },
  {
    name: "phone",
    label: "Telefon",
    placeholder: "Dit telefonnummer...",
    type: "tel",
  },
];

export default ContactForm;
