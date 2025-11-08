import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";

export default function Menu() {
  const data = useLoaderData();
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
