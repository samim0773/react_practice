import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
