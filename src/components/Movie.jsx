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
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={poster} alt="poster" />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content">
            <p>
              {year} <span className="right">{type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
