import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div>
      <header className="bg-amber-500">
        <Link to="/">Mamma mia.</Link>
        <SearchOrder />
      </header>
    </div>
  );
}
