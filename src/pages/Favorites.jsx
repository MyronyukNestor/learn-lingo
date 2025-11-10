import { useContext } from "react";
import { LingoContext } from "../context/LingoContext";
import TeacherInfo from "../components/TeacherInfo";
import { useNavigate } from "react-router";

const Favorites = () => {
  const { favorite, theme } = useContext(LingoContext);

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-[90vh] flex flex-col items-center pt-5 pb-20 ${
        theme === "dark" ? "bg-[#0F1214]" : "bg-[#F8F8F8]"
      }`}
    >
      {!favorite.length && (
        <div className="flex flex-col items-center m-auto gap-5">
          <h1 className="text-gray-500 text-2xl">
            You haven't added any teachers to favorites yet 💔
          </h1>
          <button
            onClick={() => navigate("/teachers")}
            className="rounded-xl px-8 py-3 bg-[#F4C550] font-semibold text-lg cursor-pointer hover:bg-[#FFDC86] duration-200"
          >
            Browse Teachers
          </button>
        </div>
      )}
      {favorite.map((teacher) => (
        <TeacherInfo key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default Favorites;
