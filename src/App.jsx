import { Suspense, lazy, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import About from "./components/About";
// import Grocery from "./components/Grocery";   // instead using Lazy loading
const Grocery = lazy(() => import("./components/Grocery")); // Lazy loading(Chunling) - this will be loaded only if user demands/click on this
const About = lazy(() => import("./components/About"));
const App = () => {
  // console.log(<Body />); // the object which will get print on console is VIRTUAL-DOM

  // Context Data
  const [UserName, setUserName] = useState();
  // Authentication
  useEffect(() => {
    // Make an API call & send username and password
    const data = {
      name: "Saurabh Meena",
    };
    setUserName(data.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        {/* we have wrapped our whole app & can use this data anywhere */}
        {/* Outside Provider - name will be default(i.e Akshay) */}
        <UserContext.Provider value={{ loggedInUser: UserName, setUserName }}>
          {/* Inside Provider - name will be Saurabh Meena */}
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
          {/* Here name will be Elon Musk after Un-commenting above line*/}
          <div className="app">
            <Header />
            <Outlet />
          </div>
          {/* </UserContext.Provider> */}
        </UserContext.Provider>
      </Provider>

      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<RestaurantMenu />}>
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        </Route>
      </Routes> */}
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // these children will be shown by <Outlet/>
      {
        path: "/",
        element: <Body />,
        // errorElement: <Error/>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        // errorElement: <Error/>
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        // errorElement: <Error/>
      },
      {
        path: "/cart",
        element: <Cart />,
        // errorElement: <Error/>
      },
      {
        path: "/restaurants/:resId", // "restaurant.info.id" coming from Body
        element: <RestaurantMenu />,
        // errorElement: <Error/>
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
