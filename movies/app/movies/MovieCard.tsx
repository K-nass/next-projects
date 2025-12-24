import Image from "next/image";
import Button from "../components/Button";
import { Movie } from "../types/movie";
import Genre from "../components/Genre";
import { Star } from "lucide-react";
import Link from "next/link";
import Overview from "../components/Overview";

export default function MovieCard({
  movie,
  imageWidth = 500,
  imageHeight = 500,
  showButton,
  direction,
  countOfWords,
  showReleaseDate = false,
}: {
  movie: Movie;
  imageWidth?: number;
  imageHeight?: number;
  showButton: boolean;
  countOfWords?: number;
  showReleaseDate?: boolean;
  direction: "row" | "col";
}) {
  return (
    <div
      className={`flex flex-${direction} bg-white rounded-lg shadow-md overflow-hidden`}
    >
      <Image
        className="object-contain"
        src={`https://image.tmdb.org/t/p/w${imageWidth}/${movie.backdrop_path}`}
        alt={`${movie.title} image`}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="p-4 flex flex-col gap-3.5">
        <h2 className="text-lg font-bold mb-2 text-blue-400 hover:text-blue-600">
          <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        {showReleaseDate && movie.release_date && (
          <p className="mb-2 capitalize">
            Release date:{" "}
            <span className="bg-gray-200 text-gray-800 italic px-2 py-1 rounded">
              {movie.release_date}
            </span>
          </p>
        )}
        <Overview overview={movie.overview} countOfWords={countOfWords} />
        <div className="flex flex-wrap gap-2 mb-2">
          {movie.genres
            ? movie.genres.map((genre) => (
                <Genre key={genre.id} label={genre.name} />
              ))
            : movie.genreNames.map((genre) => (
                <Genre key={genre} label={genre} />
              ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900 flex gap-1">
            {movie.vote_average.toFixed(1)}
            <span>
              <Star fill="#e17100" strokeWidth={0} />
            </span>
          </span>
          {showButton && (
            <Link
              className="bg-blue-600 py-1 px-3 font-bold text-white rounded-sm cursor-pointer hover:bg-blue-800 capitalize"
              href={`movie/${movie.id}`}
            >
              View details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
