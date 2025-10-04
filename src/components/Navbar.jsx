import { Link } from "react-router";
import logo from "../assets/logo.png";
import login from "../assets/log-in.png";
import { MdDarkMode } from "react-icons/md";

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

  return (
    <nav className="flex justify-between items-center px-10 md:px-20 lg:px-32 xl:px-50 py-4 md:py-6">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <h3 className="font-semibold text-xl">LearnLingo</h3>
      </Link>
      <div className="flex gap-10">
        {navLinks.map((link, i) => (
          <Link to={link.path} key={i} className="group hover:font-semibold">
            {link.name}
            <div
              className="bg-[#F4C550]
              } h-0.5 w-0 group-hover:w-full transition-all duration-300"
            />
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <span className="p-1 rounded-xl border border-gray-400 text-2xl text-[#474B4F] cursor-pointer hover:bg-gray-200 duration-200">
          <MdDarkMode />
        </span>
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={login} alt="" />
          <p className="font-semibold hover:text-[#F4C550] duration-200">
            Log in
          </p>
        </div>
        <button className="bg-[#222831] hover:bg-[#F4C550] hover:text-black font-semibold text-white px-8 py-3 rounded-xl cursor-pointer duration-200">
          Registration
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
