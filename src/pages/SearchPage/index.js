import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
=======
import { useLocation, useNavigate } from "react-router-dom";
>>>>>>> 7a12e90c891637d6914ebde6a2d9c32fe623e682
import axios from "../../api/axios";
import { useDebounce } from "../../hooks/useDebounce";
import "./SearchPage.css";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
<<<<<<< HEAD
  let query = useQuery();
  const searchTerm = query.get("q");
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debounceSearchTerm) {
      fetchSearchMovie(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
=======

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    console.log("searchTerm", searchTerm);
>>>>>>> 7a12e90c891637d6914ebde6a2d9c32fe623e682
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
<<<<<<< HEAD
            찾고자하는 검색어 "{debounceSearchTerm}" 에 맞는 영화가 없습니다.
=======
            찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가 없습니다.
>>>>>>> 7a12e90c891637d6914ebde6a2d9c32fe623e682
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
