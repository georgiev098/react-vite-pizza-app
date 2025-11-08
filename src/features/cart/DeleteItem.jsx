import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteClick() {
    console.log(pizzaId);
    dispatch(removeItem(pizzaId));
  }
  return (
    <div>
      <Button onClick={handleDeleteClick} type="small">
        Delete
      </Button>
    </div>
  );
}
