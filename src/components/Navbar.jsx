import { Link } from "react-router";
import logo from "../assets/logo.png";
import login from "../assets/log-in.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { LingoContext } from "../context/LingoContext";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Teachers",
      path: "/teachers",
    },
  ];

  const { theme, changeTheme } = useContext(LingoContext);

  return (
    <nav className="flex justify-between items-center px-10 md:px-25 lg:px-35 xl:px-45 2xl:px-90 py-4 md:py-5">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <h3
          className={`font-semibold text-xl ${
            theme === "dark" && "text-white"
          }`}
        >
          LearnLingo
        </h3>
      </Link>
      <div className="flex gap-10">
        {navLinks.map((link, i) => (
          <Link
            to={link.path}
            key={i}
            className={`group hover:font-semibold ${
              theme === "dark" && "text-white"
            }`}
          >
            {link.name}
            <div
              className="bg-[#F4C550]
              } h-0.5 w-0 group-hover:w-full transition-all duration-300"
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <span
          title={theme === "dark" ? "Turn on the light" : "Turn off the light"}
          onClick={changeTheme}
          className={`p-1 rounded-xl duration-200 text-2xl cursor-pointer border ${
            theme === "dark"
              ? "text-[#FFDC86] bg-[#222831] hover:bg-[#181C20] border-[#222831]"
              : "text-[#474B4F] hover:bg-gray-200 border-gray-400"
          } `}
        >
          {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={login} alt="" />
          <p
            className={`font-semibold hover:text-[#F4C550] duration-200 ${
              theme === "dark" && "text-white"
            }`}
          >
            Log in
          </p>
        </div>
        <button
          className={`font-semibold px-10 py-3 rounded-xl cursor-pointer duration-200 hover:bg-[#F4C550] ${
            theme === "dark"
              ? "bg-[#FFDC86] text-black"
              : "bg-[#222831] hover:text-black text-white"
          }`}
        >
          Registration
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
