import React, { useState, useEffect } from 'react'
import './burger.css'

const Burger = () => {
  const [state, setState] = useState(false)

  return (
    <div
      onClick={() => setState(!state)}
      className={`burger${state ? ' open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger
