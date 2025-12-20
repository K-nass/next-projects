export default function Genre({ label }: { label: string }) {
  return (
    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
      {label}
    </span>
  );
}
