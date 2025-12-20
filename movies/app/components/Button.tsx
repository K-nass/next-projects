export default function Button({
  label,
  handleClick,
  isLoading,
}: {
  label: string;
  handleClick?: () => void;
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={handleClick}
      // disabled = {disabled}
      className="bg-blue-600 py-1 px-3 font-bold text-white rounded-sm cursor-pointer hover:bg-blue-800 capitalize"
    >
      {!isLoading ? label : "loading..."}
    </button>
  );
}
