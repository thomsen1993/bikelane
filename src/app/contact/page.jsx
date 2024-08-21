import ContactForm from "@/components/contact-page/sections/ContactForm";
import HeroContact from "@/components/contact-page/sections/HeroContact";
import Map from "@/components/contact-page/sections/Map";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroContact />
      <ContactForm />
      <Map/>
    </main>
  );
};

export default page;
