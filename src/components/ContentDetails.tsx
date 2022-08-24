import { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ReactPlayer from "react-player";
import NavBar from "./ui/NavBar";

const ContentDetails = () => {
  const { state, getContentVideo, getContentDetails } = useContext(AppContext);
  const { contentVideo, selectedContent, isLogged, detailsMovie } = state;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef: any = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/");
    if (selectedContent) {
      getContentVideo(selectedContent);
      getContentDetails(selectedContent);
    }
    // eslint-disable-next-line
  }, [selectedContent]);

  const handlePlay = () => {
    const video: any = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="text-center my-5">
      <NavBar />
      <h1 className="mb-0 marginText">{detailsMovie?.original_title}</h1>
      <h3 className="mb-5 mt-0 text-secondary">{detailsMovie?.title}</h3>
      <div className="d-flex justify-content-center">
        <div >
          {contentVideo?.length ? (
            <ReactPlayer
            className="col-10 m-auto"
              style={{ margin: "auto", width: '100px !important' }}
              url={`https://www.youtube.com/watch?v=${contentVideo?.[0]?.key}`}
            />
          ) : (
            <div>
              <video
                ref={videoRef}
                onClick={handlePlay}
                className="col-10 m-auto"
              >
                <source src="videos/planet.mp4" type="video/mp4" />
              </video>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handlePlay}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          )}
          <div className="m-3">
            {detailsMovie?.genres &&
              detailsMovie?.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="badge badge-pill badge-success p-2 m-1"
                >
                  {genre.name}
                </span>
              ))}
          </div>
          <p className="card-text col-10 text-center m-auto">
            {detailsMovie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
