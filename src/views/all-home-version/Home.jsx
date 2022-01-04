import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import HomeLight from "./HomeLight";
import HomeDark from "./HomeDark";

const Home = () => {
 const [ isDarkMode, setDarkMode ] = useState(true)

 if ( isDarkMode === true ) {
     return <HomeDark mode={setDarkMode} />
 } else {
     return <HomeLight mode={setDarkMode} />
 }


}
export default Home;