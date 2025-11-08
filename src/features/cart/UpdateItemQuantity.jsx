import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currQuantity }) {
  const dispatch = useDispatch();
  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button onClick={handleDecrease} type={"round"}>
        -
      </Button>
      <span className="text-sm font-bold gap-2">{currQuantity}</span>
      <Button onClick={handleIncrease} type={"round"}>
        +
      </Button>
    </div>
  );
}
