import DetailsVideo from "./DetailsVideo";
import Header from "./Header";

// import VideoTitle from "./VideoTitle";

const MovieDetails = () => {
  return (
    <div className="flex bg-black flex-col ">
      <div className="flex relative justify-start items-center">
        <img
          className="w-32 md:w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <DetailsVideo />;
    </div>
  );
};

export default MovieDetails;
