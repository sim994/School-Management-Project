import React from "react";
import { HeroSection } from "../componets/homeComponent/HeroSection";
import { Feacture } from "../componets/homeComponent/Feacture";
import { Getstarted } from "../componets/homeComponent/Getstarted";

export function Home() {
  return (
    <div className="home-section">
      <HeroSection />
      <Feacture />
      <Getstarted />
    </div>
  );
}
