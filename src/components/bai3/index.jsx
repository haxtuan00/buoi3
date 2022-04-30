import React from 'react'

const Bai3 = (props) => {
  return (
    <button onClick={()=>props.onclick(props.text1)}>{props.text}</button>
  )
}

export default Bai3