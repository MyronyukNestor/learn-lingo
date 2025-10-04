import hero from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="flex gap-6 px-35">
      <div className="bg-[#F8F8F8] rounded-4xl flex flex-col gap-10 justify-center px-20">
        <h1 className="font-semibold text-5xl text-left px-10">
          Unlock your potential with the best{" "}
          <i className="bg-amber-100 leading-[0.6] px-2 inline-block">
            language
          </i>
          tutors
        </h1>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button>Get started</button>
      </div>
      <div>
        <img src={hero} alt="hero" className="rounded-4xl" />
      </div>
    </div>
  );
};

export default Hero;
