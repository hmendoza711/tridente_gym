import React, { useEffect, useState } from "react";
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
import Cart from "./components/cart/Cart";
import { collection, getDocs } from "firebase/firestore";

function App() {

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
      <Footer />
    </div>
  );

  return (
    <div className="dark:bg-dark">
      <AuthenticationContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/clases"
              element={<ProtectedRoute component={ManageActivities} />}
            />
            <Route
              path="/usuarios"
              element={<ProtectedRoute component={ManageUsers} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </AuthenticationContextProvider>
    </div>
  );
};

export default App;
