"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

const HeroEvents = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes/653d5f0deb8bede598fd91ad", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <div className="wrapper text-center my-20 xl:px-0 px-5">
      <h3>{data.suptitle}</h3>
      <h2>{data.title}</h2>
    </div>
  );
};

export default HeroEvents;
