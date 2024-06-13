import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Activity from "./components/activity/Activity";

function App () {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" text-black overflow-x-hidden dark:bg-black">
      <Navbar />
      <Activity />
    </div>
  );
};

export default App;
