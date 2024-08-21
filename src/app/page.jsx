import React from "react";

import Hero from "@/components/front-page/sections/Hero";
import Community from "@/components/front-page/sections/Community";
import Goals from "@/components/front-page/sections/Goals";
import Interest from "@/components/front-page/sections/Interest";
import Testimonial from "@/components/front-page/sections/Testimonial";
import Events from "@/components/front-page/sections/Events";

export default function Home() {
  return (
    <main>
      <Hero />
      <Community />
      <Goals />
      <Interest />
      <Testimonial />
      <Events/>
    </main>
  );
}
