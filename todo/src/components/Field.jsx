import React from 'react'
// import { Remove } from '../App'

const Field = (props) => {
    
  return (
    <div className= 'data'>
                <h4>{props.name}</h4>
                <h4>{props.email}</h4>
                <button className='btn1'  >Delete</button>
    </div>
  )
}

export default Field
