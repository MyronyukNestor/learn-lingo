import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import { useContext, useState } from "react";
import { LingoContext } from "./context/LingoContext";
import Favorites from "./pages/Favorites";
import ModalWindow from "./components/ModalWindow";

const App = () => {
  const { theme } = useContext(LingoContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [authMode, setAuthMode] = useState("");

  return (
    <div className={`min-h-[100vh] ${theme === "dark" && "bg-[#0F1214]"}`}>
      <Navbar handleOpen={handleOpen} setAuthMode={setAuthMode} />
      <div className="flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      {open && (
        <ModalWindow
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          login={authMode}
        />
      )}
    </div>
  );
};

export default App;
