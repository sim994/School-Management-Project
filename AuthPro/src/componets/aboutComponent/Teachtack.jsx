import React from "react";
import { LanguageBox } from "../LanguageBox";
import  react  from "../aboutComponent/LanguageIcon/react.png";
import  nodejs  from "../aboutComponent/LanguageIcon/nodejs.png";
import  mongodb  from "../aboutComponent/LanguageIcon/mongodb.png";
import  express from "../aboutComponent/LanguageIcon/express.png";

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
        </div>
      </div>
    </section>
  );
}
