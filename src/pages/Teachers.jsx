import { useContext, useState } from "react";
import { LingoContext } from "../context/LingoContext";
import Filter from "../components/Filter";
import TeacherInfo from "../components/TeacherInfo";

const Teachers = () => {
  const { teachers, theme } = useContext(LingoContext);

  const [loadMore, setLoadMore] = useState(4);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedLevel, setSelectedLevel] = useState("A1 Beginner");
  const [selectedPrice, setSelectedPrice] = useState(30);
  const [sort, setSort] = useState("Low");

  const filteredList = teachers
    .filter(
      (teacher) =>
        teacher.languages.includes(selectedLanguage) &&
        teacher.levels.includes(selectedLevel) &&
        teacher.price_per_hour <= selectedPrice
    )
    .sort((a, b) =>
      sort === "Low"
        ? a.price_per_hour - b.price_per_hour
        : b.price_per_hour - a.price_per_hour
    );

  return (
    <div
      className={`min-h-[90vh] flex flex-col items-center py-20 ${
        theme === "dark" ? "bg-[#0F1214]" : "bg-[#F8F8F8]"
      }`}
    >
      <div className="">
        <Filter
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          sort={sort}
          setSort={setSort}
        />
      </div>
      {!filteredList.length ? (
        <h1 className="text-gray-500 text-3xl mt-20">
          Sorry, no teachers found!
        </h1>
      ) : (
        filteredList
          .slice(0, loadMore)
          .map((teacher) => <TeacherInfo key={teacher.id} teacher={teacher} />)
      )}
      {filteredList.length > loadMore && (
        <button
          onClick={() => setLoadMore(loadMore + 4)}
          className="rounded-xl px-11 py-4 bg-[#F4C550] font-semibold text-lg cursor-pointer hover:bg-[#FFDC86] duration-200 mt-15"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Teachers;
