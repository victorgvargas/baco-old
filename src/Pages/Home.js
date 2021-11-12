import React from "react";
import imgUrls from "../Assets/story-mocks";
import Banner from "../Components/Banner";
import EstablishmentsList from "../Components/EstablishmentsList";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner imgUrls={imgUrls} />
      <EstablishmentsList />
    </Layout>
  );
}
