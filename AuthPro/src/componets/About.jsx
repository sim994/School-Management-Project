import React from 'react'
import { AboutProject } from "../componets/aboutComponent/AboutProject";
import { Teachtack } from "../componets/aboutComponent/Teachtack";
import { KeyFeature } from "../componets/aboutComponent/KeyFeature";

export function About() {
  return (
    <div className="about-page-section">
        <AboutProject />
        <Teachtack />
        <KeyFeature />
    </div>
  )
}
    