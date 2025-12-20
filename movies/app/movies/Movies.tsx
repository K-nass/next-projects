"use client";
import { useCallback, useState } from "react";
import Button from "../components/Button";
import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

export default function Movies({
  initialMovies,
  page,
  totalPages,
  genres,
}: {
  initialMovies: Movie[];
  page: number;
  totalPages: number;
  genres: { id: number; name: string }[];
}) {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(page);
  const [isLoading, setIsLoading] = useState(false);

  const genreMap: { [key: number]: string } = {};
  genres.forEach((genre: { id: number; name: string }) => {
    genreMap[genre.id] = genre.name;
  });

  const loadMoreMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const newMoviesRes = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&page=${currentPage + 1}`
      );
      const { results } = await newMoviesRes.json();
      const moviesWithGenres: Movie[] = results.map((movie: Movie) => ({
        ...movie,
        genreNames: movie.genre_ids.map((id: number) => genreMap[id]),
      }));
      setCurrentPage((prev) => prev + 1);
      setMovies((prev) => [...prev, ...moviesWithGenres]);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  }, [currentPage]);

  return (
    <div>
      <div className="grid w-full md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            showButton={true}
            direction="col"
            countOfWords={20}
          />
        ))}
      </div>
      {currentPage < totalPages && (
        <div className="text-center mt-20 mb-20">
          <Button
            label="load more"
            handleClick={loadMoreMovies}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}
