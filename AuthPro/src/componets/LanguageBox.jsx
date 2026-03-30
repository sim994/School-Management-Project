import React from 'react'

export function LanguageBox(props) {
  return (
    <div className={`lang-card ${props.className}`}>
        <img src={props.img} alt="Image not found"  />
        <p>{props.name}</p>
        <h2>{props.usecase}</h2>
    </div>
  )
}
