import React, { useEffect, useState } from "react";
import imgUrls from "../Assets/story-mocks";
import BannerCarousel from "../Components/BannerCarousel";
import EstablishmentsList from "../Components/EstablishmentsList";
import Layout from "../Components/Layout";

export default function Home() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <Layout>
      <BannerCarousel imgUrls={imgUrls} />
      <EstablishmentsList location={location} />
    </Layout>
  );
}
