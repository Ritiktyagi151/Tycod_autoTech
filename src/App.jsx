import React from "react";
import { createBrowserRouter,ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./page/home/Home";
import ContactUs from "./page/contact/Contact";
import AboutPage from "./page/about/Aboutus";
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
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
