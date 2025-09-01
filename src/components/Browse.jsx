import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import Header from "./Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer2";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="pt-16 md:pt-20">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};
export default Browse;
