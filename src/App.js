import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
// import About from "./component/About";
import Contect from "./component/Contect";
import Shimmer from "./component/Shimmer";
// import Grocery from "./component/Grocery"
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const Grocery=lazy(()=> import("./component/Grocery"))
const About = lazy(()=> import("./component/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}
const appRouther = createBrowserRouter([
  {
     path:"/",
     element:<AppLayout />,
     
     children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:(<Suspense fallback={<Shimmer />}><About /></Suspense>)
      },
      {
        path:"/contect",
        element: <Contect />
      },
      {
        path:"/grocery",
        element:(
        <Suspense fallback={<h1>Loading.....</h1>}>
         <Grocery /> 
         </Suspense>
         ), 
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      }
  ],
  errorElement:<Error />}
  ])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouther} />)
