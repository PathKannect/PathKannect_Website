import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      {/* Page content will load here */}
      <Outlet />

      <Footer />
    </>
  );
}

export default MainLayout;
