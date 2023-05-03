import "./movieTile.style.css";

const MovieTile = () => {
  return (
    <div className="movie-info">
      <img src="./images/thething.jpg" />
      <div className="rating">☀ 8.2</div>
      <h2 className="title-main">The Thing</h2>
      <button className="watch-movie">Watch Movie</button>
    </div>
  );
};

export default MovieTile;
