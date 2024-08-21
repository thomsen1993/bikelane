import React from "react";

import HeroAbout from "@/components/about-page/sections/HeroAbout";
import CommunityAbout from "@/components/about-page/sections/CommunityAbout";
import TestimonialAbout from "@/components/about-page/sections/TestimonialAbout";
import GoalsAbout from "@/components/about-page/sections/GoalsAbout";

const page = () => {
  return (
    <main>
      <HeroAbout />
      <TestimonialAbout />
      <CommunityAbout />
      <GoalsAbout />
    </main>
  );
};

export default page;
