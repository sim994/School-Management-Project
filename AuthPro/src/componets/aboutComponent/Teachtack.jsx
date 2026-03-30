import React from "react";
import { LanguageBox } from "../LanguageBox";
import  react  from "../../assets/LanguageIcon/react.png";
import  nodejs  from "../../assets/LanguageIcon/nodejs.png";
import  mongodb  from "../../assets/LanguageIcon/mongodb.png";
import  express from "../../assets/LanguageIcon/express.png";

export function Teachtack() {
  return (
    <section className="teachtack-section">
      <div className="language-section">
        <h1>Development Tech Stack</h1>
        <div className="languages">
          <LanguageBox className="left" img={mongodb} name="MongoDb" usecase="Database" />
          <LanguageBox className="right" img={express} name="Express js" usecase="Backend Framework" />
          <LanguageBox className="left" img={react} name="React js" usecase="Frontend Library" />
          <LanguageBox className="right" img={nodejs} name="Node js" usecase="Runtime Environment" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M388.78924560546875,21.5246639251709C368.07025599161784,55.47384148597717,288.6382531229655,78.84454283714295,314.3497619628906,143.4977569580078C340.0612708028157,208.15097107887266,458.44993016560875,190.15695569356282,481.1659240722656,253.81166076660156C503.8819179789225,317.4663658396403,419.67861587524413,339.246627629598,395.964111328125,372.1972961425781" fill="none" stroke-width="3" stroke="hsl(0, 0%, 0%)" stroke-linecap="round" transform="matrix(1,0,0,1,2.512969970703125,3.139017105102539)" stroke-dasharray="0 0" stroke-opacity="1"></path><defs><linearGradient id="SvgjsLinearGradient1004"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg> */}
        </div>
      </div>
    </section>
  );
}
