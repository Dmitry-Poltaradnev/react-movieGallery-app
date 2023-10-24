export function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id}>
      <div className="card">
        <div className="card-image">
          <img src={poster} alt="poster" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>
            {year} <span className="right">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
