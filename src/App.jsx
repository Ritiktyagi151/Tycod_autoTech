import React from "react";
import { createBrowserRouter,ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./page/home/Home";
// import AboutUs from "./page/about/About";
const Layout = () => {
  return (
    <>
    <ScrollRestoration/>
      <Navbar />
      <Outlet /> {/* This is where child routes will render */}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <AboutUs />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
