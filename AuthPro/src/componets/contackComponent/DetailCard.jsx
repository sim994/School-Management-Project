import React from "react";

export function DetailCard({ image, help, question, details }) {
  return (
    <div className="our-info">
      <img src={image} alt={help} />
      <h4 className="help-title">{help}</h4>
      <p className="question">{question}</p>
      <p className="our-details">{details}</p>
    </div>
  );
}
