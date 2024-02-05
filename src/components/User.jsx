import React, { useState } from 'react'

const User = ({name}) => {

    const [count, setcount] = useState(0)

  return (
    <div className='user-card'>
        <p>count={count}</p>
        <h1>Name:{name}</h1>
    </div>
  )
}

export default User