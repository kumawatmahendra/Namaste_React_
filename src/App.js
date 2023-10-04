import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Contect from "./component/Contect";
import Shimmer from "./component/Shimmer";
import Error from "./component/Error";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux_file/appStore";

// const Grocery = lazy(() => import("./component/Grocery"))
const About = lazy(() => import("./component/About"))



const AppLayout = () => {

  const [userName, setUserName] = useState()
  useEffect(() => {
    const data = {
      name: "Mahendra Kumawat"
    }
    setUserName(data.name)
  }, []);


  return (
    <Provider store={appStore}>  
      <UserContext.Provider value={{ name: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouther = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (<Suspense
                   fallback={<Shimmer />}><About />
                  </Suspense>)
      },
      {
        path: "/contect",
        element: <Contect />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading.....</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouther} />)
