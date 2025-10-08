import { useContext } from "react";
import hero from "../assets/block.png";
import { LingoContext } from "../context/LingoContext";

const Hero = () => {
  const { theme } = useContext(LingoContext);

  return (
    <div className="px-5 xl:px-27">
      <div className="flex justify-center gap-6">
        <div
          className={`rounded-4xl flex flex-col pt-20 pr-[108px] pl-[64px] ${
            theme === "dark" ? "bg-[#222831] text-white" : "bg-[#F8F8F8]"
          }`}
        >
          <h1 className="font-semibold text-5xl/15 text-left w-[550px] h-[120px] tracking-tight">
            Unlock your potential with the best
            <i className="relative inline-block px-2 mx-2 text-[#222831]">
              <span className="relative z-10 font-normal">language</span>
              <span className="absolute inset-0 bg-amber-100 -bottom-0.2 top-4 rounded-xl" />
            </i>
            tutors
          </h1>
          <p className="py-10 max-w-[470px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className="bg-[#F4C550] text-lg text-[#222831] font-bold rounded-xl py-5 max-w-65 cursor-pointer hover:bg-[#FFDC86] duration-200 mt-8 mb-20">
            Get started
          </button>
        </div>
        <div className="">
          <img src={hero} alt="hero" className="rounded-4xl " />
        </div>
      </div>

      <div className="py-3 px-10 md:px-25 lg:px-35 xl:px-48">
        <div className="relative rounded-lg py-6 mt-3">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100%"
              height="100%"
              fill="none"
              stroke="#F4C550"
              strokeWidth="3"
              strokeDasharray="15 20"
              strokeDashoffset="29"
              strokeLinecap="round"
              rx="8"
              ry="8"
            />
          </svg>
          <div className="relative z-10 flex justify-center gap-25">
            <div className="flex items-center gap-3">
              <p
                className={`text-3xl font-semibold ${
                  theme === "dark" && "text-white"
                }`}
              >
                32,000+
              </p>
              <p
                className={`leading-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Experienced <br /> tutors
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p
                className={`text-3xl font-semibold ${
                  theme === "dark" && "text-white"
                }`}
              >
                300,000+
              </p>
              <p
                className={`leading-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                5-star tutor <br /> reviews
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p
                className={`text-3xl font-semibold ${
                  theme === "dark" && "text-white"
                }`}
              >
                120+
              </p>
              <p
                className={`leading-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Subjects <br /> taught
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p
                className={`text-3xl font-semibold ${
                  theme === "dark" && "text-white"
                }`}
              >
                200+
              </p>
              <p
                className={`leading-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tutor <br /> nationalities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
