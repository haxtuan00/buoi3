import React from 'react'
import './styles.css'
const Div = (props) => {
  return (
    <div className={`div ${props.color} ${props.shape}`}>123</div>
  )
}

export default Div