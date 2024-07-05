import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Professor from "./components/professor/Professor";
import Footer from "./components/footer/Footer";
import ImcCalculator from "./components/imcCalculator/ImcCalculator";
import Body from "./components/body/Body";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthenticationContextProvider } from "./services/authenticationContext/AuthenticationContext";
import Register from "./components/login/Register";
import ManageUsers from "./components/manageUser/ManageUser";
import ProtectedRoute from "./components/route/protected/ProtectedRoute";
import { db } from "./firebase/config";
import Activities from "./components/activities/Activities";
import ManageActivities from "./components/manageActivities/ManageActivities";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        const activitiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(activitiesData);
      } catch (error) {
        console.error("Error fetching activities", error);
      }
    };
    fetchActivities();
  }, []);

  const MainContent = () => (
    <div className="dark:bg-dark">
      <Body />
      <ImcCalculator /> {/* Renderizar ImcCalculator debajo de Body */}
      <Activities activities={activities} />
      <Professor />
    </div>
  );

  const Contacto = () => (
    <div className="dark:bg-dark">
      <Body />
    </div>
  );

  const Clases = () => (
    <div className="dark:bg-dark">
      <Body />
    </div>
  );

  return (
    <div className=" text-black overflow-x-hidden dark:bg-black">
      <AuthenticationContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/clases" element={<ProtectedRoute component={ManageActivities} />} />
            <Route path="/usuarios" element={<ProtectedRoute component={ManageUsers} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
