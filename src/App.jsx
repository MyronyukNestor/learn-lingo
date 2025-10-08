import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import { useContext } from "react";
import { LingoContext } from "./context/LingoContext";

const App = () => {
  const { theme } = useContext(LingoContext);

  return (
    <div className={`min-h-[100vh] ${theme === "dark" && "bg-[#0F1214]"}`}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
