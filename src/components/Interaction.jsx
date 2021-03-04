import React from 'react'

export function Interaction({ title, description, timeframe }) {
  return (
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{timeframe}</p>
    </div>
  )
}
