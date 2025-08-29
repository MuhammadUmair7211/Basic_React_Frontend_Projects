import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
