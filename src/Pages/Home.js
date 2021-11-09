import React from "react";
import Header from "../Components/Header";
import imgUrls from "../Assets/story-mocks";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <>
      <Header imgUrls={imgUrls} />
      <Banner imgUrls={imgUrls} />
    </>
  );
}
