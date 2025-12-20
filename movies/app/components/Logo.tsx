import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width = 50,
  height = 50,
}: {
  width: number;
  height: number;
}) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="./logo.svg" width={width} height={height} alt="movies logo" />
      <span className="font-bold italic text-2xl text-blue-600 capitalize">
        cinema
      </span>
    </Link>
  );
}
