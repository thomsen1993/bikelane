import React from 'react'

const Button = ({href, children}) => {
  return (
    <a href={href} className='inline-block bg-accent text-white rounded-md hover:-translate-y-1 hover:bg-white hover:text-accent transition px-6 py-3'>
      {children}
    </a>
  )
}

export default Button
