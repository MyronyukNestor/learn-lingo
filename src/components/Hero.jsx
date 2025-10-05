import hero from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="px-5 xl:px-27">
      <div className="flex gap-6">
        <div className="bg-[#F8F8F8] rounded-4xl flex flex-col py-20 pr-[108px] pl-[64px]">
          <h1 className="font-semibold text-5xl text-left">
            Unlock your potential with the best{" "}
            <i className="bg-amber-100 leading-[0.6] px-2 inline-block">
              language
            </i>
            tutors
          </h1>
          <p className="py-10 max-w-[470px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className="bg-[#F4C550] font-semibold rounded-xl py-4 max-w-65 cursor-pointer hover:opacity-70 duration-200 mt-8">
            Get started
          </button>
        </div>
        <div className="">
          <img
            src={hero}
            alt="hero"
            className="rounded-4xl object-cover min-w-[500px] w-auto h-auto"
          />
        </div>
      </div>

      <div className="relative rounded-lg py-6 mt-5">
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

        <div className="relative z-10">Контент тут</div>
      </div>
    </div>
  );
};

export default Hero;
