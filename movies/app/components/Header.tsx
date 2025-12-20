import { Heart } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <nav className="py-4">
      <ul className="flex justify-between items-center">
        <li>
          <Logo width={50} height={50} />
        </li>
        <li>
          <div className="flex justify-between items-center gap-5">
            <button className="cursor-pointer">
              <Heart />
            </button>
            <span>
              <input
                className="border py-1 pl-2 box-border rounded-sm placeholder-gray-300 focus:placeholder-gray-500"
                type="text"
                name="movie-name"
                placeholder="search..."
              />
            </span>
            <span>
              <Button label="search"/>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
