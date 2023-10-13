import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=edf73aa4&s=matrix`)
      .then((responce) => responce.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=edf73aa4&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((responce) => responce.json())
      .then((data) => setMovies(data.Search))
      .then(() => setLoading(false));
  };

  return (
    <main className="content container preload-content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}
export default Main;
