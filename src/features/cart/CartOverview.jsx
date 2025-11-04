import { Link } from "react-router-dom";

export default function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 text-sm uppercase px-4 py-4 md:text-base sm:px-6 ">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
