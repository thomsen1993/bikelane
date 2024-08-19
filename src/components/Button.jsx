import React from 'react'

import Link from 'next/link'

const Button = ({href, children}) => {
  return (
    <Link href={href} className='inline-block bg-accent text-white rounded-md px-6 py-3'>
      {children}
    </Link>
  )
}

export default Button
