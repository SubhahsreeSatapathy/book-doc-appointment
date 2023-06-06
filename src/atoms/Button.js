import React from 'react'
import "./Button.css"

const Button = (props) => {
    const {children} = props
  return (
    <>
        <button className='button'>{children}</button>
    </>
  )
}

export default Button