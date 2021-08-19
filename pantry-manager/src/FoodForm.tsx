import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveFood, getFood } from "./api/foodsApi";
import { Input } from "./shared/Input";
import { Select } from "./shared/Select";
import { useHistory, useParams } from "react-router-dom";
import { Food } from "./ListFoods/ListFoods";
import Button from "./shared/Button";

export type NewFood = {
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

export interface FoodFormProps {
  food?: Food;
}

export function FoodForm({ food }: FoodFormProps) {
  const [newFood, setNewFood] = useState<NewFood>(food ? food : emptyFood);
  const history = useHistory();
  const { foodId }: { foodId: string | undefined } = useParams();

  useEffect(() => {
    async function callGetFood() {
      // Using underscore to avoid naming conflict
      if (foodId) {
        const _food = await getFood(foodId);
        setNewFood(_food);
      }
    }
    callGetFood();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (foodId) {
        await saveFood({ ...newFood, id: parseInt(foodId) });
      } else {
        await saveFood(newFood);
      }
      toast.success("Food saved! 🦄");
      history.push("/"); // Redirect to home.
    } catch (error) {
      toast.error("Failed to add");
    }
  }

  // Implementing single onChange handler by convention.
  // id coorellates to the property in state.
  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, id } = event.target;
    // Create a copy of existing state, but change the name property to the new value
    setNewFood({
      ...newFood,
      [id]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{foodId ? "Edit Food" : "Add Food"}</h1>
      <Input onChange={onChange} id="name" label="Name" value={newFood.name} />
      <Input
        onChange={onChange}
        id="quantity"
        label="Quantity"
        type="number"
        value={newFood.quantity.toString()}
      />
      <Input
        onChange={onChange}
        id="minQuantity"
        label="Min Quantity"
        type="number"
        value={newFood.minQuantity.toString()}
      />
      <Select
        id="type"
        label="Type"
        onChange={onChange}
        placeholderOption="Select Type"
        value={newFood.type}
        options={[
          { label: "Vegetable", value: "Vegetable" },
          { label: "Grain", value: "Grain" },
          { label: "Fruit", value: "Fruit" },
        ]}
      />
      <Button type="submit">Save Food</Button>
    </form>
  );
}
