import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Activity from "./components/activity/Activity";
import Footer from "./components/footer/Footer";
import ImcCalculator from "./components/imcCalculator/ImcCalculator";

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

  const MainContent = () => (
    <div className="dark:bg-dark">
      <ImcCalculator />
    </div>
  )

  return (
    <div className=" text-black overflow-x-hidden dark:bg-black">
      <Navbar />
      <MainContent />
      <Activity />
      <Footer />
    </div>
  );
};

export default App;
