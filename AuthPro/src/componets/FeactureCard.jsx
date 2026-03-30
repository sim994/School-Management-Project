import React from 'react'

export function FeactureCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
