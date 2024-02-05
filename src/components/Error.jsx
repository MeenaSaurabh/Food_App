import React from 'react'
import {  } from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const err = useRouteError()
    console.log(err);
    
  return (
    <div>
        <h1>Oops!!</h1>
        <h2>Something went wrong!!</h2>
        <h2>{err.error.message}</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error