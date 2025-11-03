import { LuBookOpen } from "react-icons/lu";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { LingoContext } from "../context/LingoContext";

const TeacherInfo = ({ teacher }) => {
  const [readMore, setReadMore] = useState(null);

  const { theme, favorite, addToFavorite } = useContext(LingoContext);

  return (
    <div
      key={teacher.id}
      className={`flex p-7 rounded-2xl mt-10 w-[1145px] max-w-[1145px] ${
        theme === "dark" ? "bg-[#E4E8EB]" : "bg-white"
      }`}
    >
      <img
        className="w-30 h-30 rounded-full p-2 border-3 border-[#F4C550]"
        src={teacher?.avatar_url}
        alt=""
      />
      <div className="pl-10 w-full">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-gray-500">Languages</p>
            <h3 className="font-semibold text-3xl">
              {teacher?.name} {teacher?.surname}
            </h3>
          </div>
          <div className="flex gap-20">
            <div className="flex gap-3 font-semibold">
              <LuBookOpen className="mt-1.5" />
              <p>Lessons online</p>
              <div className="h-6 w-0.5 bg-gray-300" />
              <p>Lessons done {teacher?.lessons_done} </p>
              <div className="h-6 w-0.5 bg-gray-300" />
              <FaStar className="text-yellow-400 mt-1 text-lg" />
              <p>Rating {teacher?.rating} </p>
              <div className="h-6 w-0.5 bg-gray-300" />
              <p>
                Price / 1 hour:{" "}
                <span className="text-green-400">
                  ${teacher?.price_per_hour}
                </span>
              </p>
            </div>
            <span
              onClick={() => addToFavorite(teacher)}
              className="mt-0.5 text-xl"
            >
              <div className="cursor-pointer">
                {favorite.includes(teacher) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3 mt-4">
          <p className="font-semibold text-gray-500">
            Speaks:{" "}
            <span className="text-black">{teacher?.languages.join(", ")}</span>
          </p>
          <p className="font-semibold text-gray-500">
            Lesson Info:{" "}
            <span className="text-black">{teacher?.lesson_info}</span>
          </p>
          <p className="font-semibold text-gray-500">
            Conditions:{" "}
            <span className="text-black">{teacher?.conditions.join(", ")}</span>
          </p>
        </div>
        {readMore !== teacher.id && (
          <button
            onClick={() => setReadMore(teacher.id)}
            className={`border-b-2 cursor-pointer font-semibold ${
              theme === "dark" ? "hover:border-[#E4E8EB]" : "hover:border-white"
            }`}
          >
            Read More
          </button>
        )}
        {readMore === teacher.id && (
          <div className="flex flex-col gap-8">
            <p className="max-w-4xl pt-4">{teacher?.experience}</p>
            {teacher?.reviews.map((review) => (
              <div className="">
                <div className="flex items-center gap-3">
                  <p className="px-4 py-2 font-semibold text-lg rounded-full bg-[#F4C550]">
                    {review.reviewer_name.slice(0, 1)}
                  </p>
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-500">
                      {review.reviewer_name}
                    </p>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      <p className="font-semibold">
                        {review.reviewer_rating}.0
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-semibold mt-3">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-3 pt-8">
          {teacher?.levels.map((level, idx) => (
            <p
              key={idx}
              className="rounded-full border border-gray-400 font-semibold px-4 py-1"
            >
              {level}
            </p>
          ))}
        </div>
        {readMore === teacher.id && (
          <div className="flex items-center justify-between gap-5 mt-7">
            <button className="rounded-xl px-11 py-4 bg-[#F4C550] font-semibold text-lg cursor-pointer hover:bg-[#FFDC86] duration-200">
              Book trial lesson
            </button>
            <button
              onClick={() => setReadMore(null)}
              className={`border-b-2 cursor-pointer font-semibold ${
                theme === "dark"
                  ? "hover:border-[#E4E8EB]"
                  : "hover:border-white"
              }`}
            >
              Read Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherInfo;
