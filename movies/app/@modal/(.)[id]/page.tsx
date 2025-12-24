import MovieCard from "@/app/movies/MovieCard";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="min-h-screen mt-10">
      <MovieCard
        movie={movie}
        showButton={false}
        direction="row"
        imageWidth={780}
        imageHeight={780}
        showReleaseDate={true}
      />
    </div>
  );
}
