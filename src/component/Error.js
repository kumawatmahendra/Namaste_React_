import React from 'react'
import { useRouteError , useNavigate } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  const navigate = useNavigate()
  console.log(err);
  return (
    <div>
          <div> 
          <h1>Opps!!! </h1>
          <h2>Something Went Wrong</h2>
          <h2>{err.status}: {err.statusText}</h2>
          <h2>{err.data}</h2>
          </div>    
          <button onClick={() => navigate('/') }>click to home page</button>
    </div>
  )
}
export default Error