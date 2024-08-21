"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

const HeroEvents = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5888/heroes/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <div className="wrapper text-center my-20">
      <h3>{data[6].suptitle}</h3>
      <h2>{data[6].title}</h2>
    </div>
  );
};

export default HeroEvents;
