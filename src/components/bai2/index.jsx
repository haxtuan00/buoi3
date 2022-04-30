import React from 'react'

const Bai2 = (props) => {
  return (
    <div>
        <button onClick={props.onclick}>{props.title}</button>
        <span>{props.text}</span>
    </div>
  )
}

export default Bai2