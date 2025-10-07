import hero from "../assets/block.png";

const Hero = () => {
  return (
    <div className="px-5 xl:px-27 ">
      <div className="flex gap-6">
        <div className="bg-[#F8F8F8] rounded-4xl flex flex-col pt-20 pr-[108px] pl-[64px]">
          <h1 className="font-semibold text-5xl text-left w-[550px] h-[120px]">
            Unlock your potential with the best
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
          <button className="bg-[#F4C550] font-semibold rounded-xl py-4 max-w-65 cursor-pointer hover:opacity-70 duration-200 mt-8 mb-20">
            Get started
          </button>
        </div>
        <div className="">
          <img src={hero} alt="hero" className="rounded-4xl w-[1130px]" />
        </div>
      </div>

      <div className="py-3">
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
              <p className="text-3xl font-semibold">32,000+</p>
              <p className="text-gray-600 leading-4">
                Experienced <br /> tutors
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold">300,000+</p>
              <p className="text-gray-600 leading-4">
                5-star tutor <br /> reviews
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold">120+</p>
              <p className="text-gray-600 leading-4">
                Subjects <br /> taught
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold">200+</p>
              <p className="text-gray-600 leading-4">
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
