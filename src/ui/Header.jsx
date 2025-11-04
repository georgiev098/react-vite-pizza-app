import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username"

export default function Header() {
  return (
    <div>
      <header className="bg-amber-500 uppercase">
        <Link className="tracking-widest" to="/">
          Mamma mia.
        </Link>
        <SearchOrder />

        <Username />
      </header>
    </div>
  );
}
