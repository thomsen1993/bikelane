import React from "react";

import Image from "next/image";
import about from "../../../public/about.jpg";
import biker from "../../../public/biker.png";
import bikers from "../../../public/12.jpg";
import journalist from "../../../public/journalist.webp";

const page = () => {
  return (
    <main className="wrapper my-20">
      <h2 className="uppercase">Nyheder </h2>
      <div className="my-10">
        {filter.map((event, index) => (
          <button
            key={index}
            className="border border-primary rounded-full first-of-type:border-accent first-of-type:text-accent px-2 mr-2"
          >
            {event.name}
          </button>
        ))}
      </div>
      <article className="grid grid-cols-4">
        {cards.map((event, index) => (
          <div key={index} className="even:col-span-2 even:border-x odd:border-b border-primary px-5 pb-5">
            {event.bigTitle && <h3 className="uppercase">{event.bigTitle}</h3>}
            <Image src={event.img} alt="News image" />
            <h4>{event.title}</h4>
            <p>{event.text} <span className="text-thirdary">{event.time}</span></p>
            {event.actor.img && (
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={event.actor.img}
                  alt="Actor image"
                  width={50}
                  height={50}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div>
                  <p>{event.actor.name}</p>
                  <p className="text-thirdary">{event.actor.job}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </article>
    </main>
  );
};

const filter = [
  {
    name: "Alle",
  },
  {
    name: "Juniorer",
  },
  {
    name: "Motionister",
  },
  {
    name: "Konkurrence",
  },
  {
    name: "Xtreme",
  },
];

const cards = [
  {
    img: biker,
    title: "Paul fik en rekord",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a numquam ipsa eos, quia consectetur recusandae accusantium rerum provident dolores!",
    time: "2 dage siden",
    actor: {
      img: journalist,
      name: "Wade",
      job: "Newsman",
    },
  },
  {
    img: about,
    bigTitle: "seneste nyheder",
    title: "Titel",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a numquam ipsa eos, quia consectetur recusandae accusantium rerum provident dolores!",
    time: "12 timer siden",
    actor: {
      img: "",
      name: "",
      job: "",
    },
  },
  {
    img: bikers,
    title: "Titel",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores a numquam ipsa eos, quia consectetur recusandae accusantium rerum provident dolores!",
    time: "3 dage siden",
    actor: {
      img: "",
      name: "",
      job: "",
    },
  },
];

export default page;
