"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Editer from "@/components/Editer";

import Image from "next/image";
import bg from "../../../../public/backgroundspatterns/bg4.png";

const GoalsAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [editer, setEditer] = useState(null);

  useEffect(() => {
    makeRequest("http://localhost:5888/goals", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;
  return (
    <section className=" grid items-center">
      <Image
        src={bg}
        alt=""
        className="col-start-1 row-start-1 h-72 object-cover"
      ></Image>
      <div className="col-start-1 row-start-1">
        <div className="wrapper">
          <h2>Goals settings</h2>
          <div className="grid grid-cols-4 gap-5 my-20">
            {data.map((event) => (
              <button
                key={event._id}
                className="text-center border-2 border-transparent rounded-md hover:border-2 hover:border-darkPurple"
                onClick={() => setEditer(event)}
              >
                <p>{event.goalcount}</p>
                <p>{event.goal}</p>
                <p>{event.icon}</p>
                <p>{event.order}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {editer && (
        <Editer
          goalcount={editer.goalcount}
          goals={editer.goal}
          order={editer.order}
          icon={editer.icon}
          id={editer._id}
          setEditer={setEditer}
        />
      )}
    </section>
  );
};

export default GoalsAdmin;
