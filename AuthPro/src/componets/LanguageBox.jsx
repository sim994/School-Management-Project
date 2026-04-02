import React, { use, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LanguageBox(props) {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.utils.toArray(".lang-card").forEach((card) => {
      gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: 1,
          markers: true,
        },
      });
    });
  }, []);
  return (
    <div className="lang-card">
      <img src={props.img} alt="Image not found" />
      <p>{props.name}</p>
      <h2>{props.usecase}</h2>
    </div>
  );
}
