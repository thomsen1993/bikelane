import React from "react";

import GoalsAdmin from "@/components/admin-page/sections/GoalsAdmin";
import HeroesAdmin from "@/components/admin-page/sections/HeroesAdmin";
import EventsAdmin from "@/components/admin-page/sections/EventsAdmin";
import ContactAdmin from "@/components/admin-page/sections/ContactAdmin";

const page = () => {
  return (
    <main>
      <HeroesAdmin />
      <GoalsAdmin />
      <EventsAdmin />
      <ContactAdmin />
    </main>
  );
};

export default page;
