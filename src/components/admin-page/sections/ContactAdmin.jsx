"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

const ContactAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: PATCHData, makeRequest: PATCHMakeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/inqueries/admin", "GET", null);
  }, [PATCHData]);

  const handleRead = (id, read) => {
    const fd = new FormData();
      fd.append("read", !read);
    PATCHMakeRequest(
      "http://localhost:5888/inqueries/admin/" + id,
      "PATCH",
      fd
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="wrapper">
      <h2>Contact settings</h2>
      <div className="my-10">
        {data.map((event) => (
          <div
            key={event._id}
            className={`border-2 border-thirdary rounded-md p-5 mb-5 ${
              event.read === false ? "bg-darkPurple/20" : ""
            }`}
            onClick={() => handleRead(event._id, event.read)}
          >
            <p>
              <span className="text-thirdary">Name: </span>
              {event.name}
            </p>
            {event.read === true && (
              <div className={`${event.read === true ? "block" : "hidden"}`}>
                <p>
                  <span className="text-thirdary">Email:</span> {event.email}
                </p>
                <p>
                  <span className="text-thirdary">Phone: </span>
                  {event.phone}
                </p>
                <p>
                  <span className="text-thirdary">Message: </span>
                  {event.message}
                </p>
                <p>
                  <span className="text-thirdary">Message sent: </span>
                  {new Date(event.received).toLocaleDateString("da-DK", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
            {event.read === false ? <p>Unread</p> : <p>Read: ✅</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactAdmin;
