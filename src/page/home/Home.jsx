import React from 'react'
import Herosection from "../home/Herosection";
import About from "../home/About";
import Product from "../home/Product";
import Whatwedo from "../home/Whatwedo";
import PresenceSection from "../home/PresenceSection";
import ComponentManufacturers from "../home/ComponentManufacturers";
import Testimonials from "../home/Testimonials";
import Blog from "../home/Blog";
const Home = () => {
  return (
    <div>
      <Herosection />
      <About/>
      <Product/>
      <Whatwedo/>
      <PresenceSection/>
      <ComponentManufacturers/>
      <Testimonials/>
      <Blog/>
    </div>
  )
}

export default Home;
