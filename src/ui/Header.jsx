import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between bg-amber-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
        <Link className="tracking-widest" to="/">
          Mamma mia.
        </Link>
        <SearchOrder />

        <Username />
      </header>
    </div>
  );
}
