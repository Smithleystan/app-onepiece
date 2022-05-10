import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import Contact from "./pages/Contact";
import Plan from "./pages/Plan";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
