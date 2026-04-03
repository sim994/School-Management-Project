import React from 'react'

export function KeyFeatureCard(props) {
  return (
    <div className="key-feature-card">
      <img src={props.featureImage} alt="Key Feature" />
      <h3>{props.featureName}</h3>
      <p>{props.descriptions}</p>
    </div>
  )
}

