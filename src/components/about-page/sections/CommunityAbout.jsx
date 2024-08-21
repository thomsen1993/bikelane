"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import CommunityLayout from "@/components/CommunityLayout";

const CommunityAbout = () => {
    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("http://localhost:5888/community/", "GET", null);
      }, []);

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error... 😒</p>;
      if (!data) return null;

  return (
    <section className="wrapper my-20 xl:px-0 px-5">
      <CommunityLayout
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        image4={data.image4}
        suptitle={data.suptitle}
        title={data.title}
        content={data.content}
        keypoints={data.keypoints}
      />
    </section>
  )
}

export default CommunityAbout
