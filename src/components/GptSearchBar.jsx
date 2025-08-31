import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="flex pt-[10%] pb-5 h-auto  bg-black/50   justify-center items-center">
      <form className=" w-1/2  justify-center gap-2 flex ">
        <input
          type="text"
          className="py-4 px-4 w-[60%]"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="bg-red-700 py-2 px-8 font-bold rounded-md text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
