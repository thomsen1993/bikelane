"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

const Map = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/contactinformation/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <div>
      <p>{data.coordinates}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4415.337717412106!2d10.883361563224149!3d56.40453227564782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5b14f421121%3A0x7de336d6b4d8265c!2sYdesvej%204%2C%208500%20Gren%C3%A5!5e0!3m2!1spt-PT!2sdk!4v1724174472858!5m2!1spt-PT!2sdk"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Map;
