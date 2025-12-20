export default function Overview({
  overview,
  countOfWords,
}: {
  overview: string;
  countOfWords?: number;
}) {
  const splitWords = overview.split(" ").slice(0, countOfWords);
  if (!countOfWords) {
    return <p className="text-gray-700 text-sm mb-2">{overview}</p>;
  }
  return (
    <p className="text-gray-700 text-sm mb-2">
      {splitWords.join(" ").concat(" ...")}
    </p>
  );
}
