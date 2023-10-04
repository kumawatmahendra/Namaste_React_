import React from 'react'
import { useRouteError , useNavigate } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  const navigate = useNavigate()
  console.log(err);
  return (
    <div>
          {/* <div> 
          <h1>Opps!!! </h1>
          <h2>Something Went Wrong</h2>
          <h2>{err.status}: {err.statusText}</h2>
          <h2>{err.data}</h2>
          </div>    
          <button onClick={() => navigate('/') }>click to home page</button> */}
          <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
    </div>
  )
}
export default Error