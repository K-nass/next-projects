import Movies from "./movies/Movies";
import { Movie, TMDBResponse } from "./types/movie";

export default async function Home() {
  const [moviesRes, genreRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`
    ),
  ]);

  const { results, total_pages, page }: TMDBResponse = await moviesRes.json();
  const { genres } = await genreRes.json();
  const genreMap: { [key: number]: string } = {};
  genres.forEach((genre: { id: number; name: string }) => {
    genreMap[genre.id] = genre.name;
  });

  const moviesWithGenres: Movie[] = results.map((movie) => ({
    ...movie,
    genreNames: movie.genre_ids.map((id) => genreMap[id]),
  }));
  return (
    <Movies
      initialMovies={moviesWithGenres}
      page={page}
      totalPages={total_pages}
      genres={genres}
    />
  );
}
