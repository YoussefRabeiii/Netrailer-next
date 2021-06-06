import { useEffect, useState } from "react";

import { formatGQL, compareByPopularity } from "@helpers";
import { minifiedWithGenreQuery, swiftClient } from "@graphQL";

import styles from "../../styles/Row.module.css";
const GenreRow = ({
  genreID,
  moviesLimit,
  seriesLimit,
  isPoster = false,
  hasMovies = false,
  hasSeries = false,
}) => {
  const [genre, setGenre] = useState({});

  useEffect(() => {
    const fetch = async (
      genreID,
      moviesLimit,
      seriesLimit,
      hasMovies,
      hasSeries
    ) => {
      // Get Movies/Series by Genre ID
      const { node: fetchGenre } = await swiftClient.request(
        minifiedWithGenreQuery(genreID, moviesLimit, seriesLimit)
      );

      // Format the data (DeStructure)
      const { id, name: genreName } = fetchGenre;

      const genreMovies = hasMovies
        ? await formatGQL(fetchGenre.movies.popular)
        : [];
      const genreSeries = hasSeries
        ? await formatGQL(fetchGenre.series.popular)
        : [];

      // Combine all of the Movies and Series
      const allGenre = [...genreMovies, ...genreSeries];

      // Sort the array by popularity
      const genreData = allGenre.sort(compareByPopularity);

      // console.table(genre);
      // console.log({
      //   id,
      //   genreData,
      //   genreName,
      // });

      setGenre({
        id,
        genreData,
        genreName,
      });

      return {
        id,
        genreData,
        genreName,
      };
    };

    fetch(genreID, moviesLimit, seriesLimit, hasMovies, hasSeries);
  }, []);

  const { id, genreName, genreData } = genre;

  return (
    <div>
      <h1>This the {genreName} Row</h1>
    </div>
  );
};

export default GenreRow;
