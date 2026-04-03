import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LanguageBox(props) {
  let cardRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      tl.from(cardRef.current, {
        y: 110,
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, cardRef); 

    return () => ctx.revert(); 
  }, []);
  return (
    <div className="lang-card" ref={cardRef}>
      <img src={props.img} alt="Image not found" />
      <p>{props.name}</p>
      <h2>{props.usecase}</h2>
    </div>
  );
}
