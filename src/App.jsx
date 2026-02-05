import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import CompanyProfile from "./components/CompanyProfile";
import WhatsAppButton from "./components/WhatsAppButton";
import Maintenance from "./components/Maintenance";
import Contactuspage from "./Pages/Contactuspage";
import { MdContactPage } from "react-icons/md";
import Mentorpage from "./Pages/Mentorpage";

const IS_MAINTENANCE = false;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
    });
  }, []);

  if (IS_MAINTENANCE) {
    return <Maintenance />;
  }

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactuspage />} />
          {/* <Route path="/mentor" element={<Mentorpage />} /> */}

        </Route>
      </Routes>
      {/* <WhatsAppButton /> */}
    </>
  );
}

export default App;
