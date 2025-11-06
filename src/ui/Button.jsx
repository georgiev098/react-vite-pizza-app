import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const className =
    "bg-amber-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-amber-300 transition-colors focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
