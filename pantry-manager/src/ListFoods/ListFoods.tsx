import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "../api/foodsApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FoodForm } from "../FoodForm";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function ListFoods() {
  const [foods, setFoods] = useState<Food[]>([]);
  // Long form of the above that avoids using array destructuring.
  // const foodStateArray = useState<Food[]>([]);
  // const foods = foodStateArray[0];
  // const setFoods = foodStateArray[1];

  useEffect(() => {
    async function callGetFoods() {
      // Using underscore to avoid naming conflict
      const _foods = await getFoods();
      setFoods(_foods);
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  return (
    <span>
      <ToastContainer />
      <h1>Pantry Manager</h1>

      <Link to="/food">Add Food</Link>

      {/* Exercise 1: Create a reusable Select and consume it below for Food Type 

        1. Vegetable
        2. Grain
        3. Fruit
      */}
      {foods.length ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Min Quantity</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.name}>
                <td>
                  <Button
                    onClick={async () => {
                      await deleteFood(food.id);
                      // Return a new array with the id that was just deleted omitted.
                      const newFoods = foods.filter((f) => f.id !== food.id);
                      setFoods(newFoods);
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Link to={`/food/${food.id}`}>{food.name}</Link>
                </td>
                <td
                  style={{
                    color: food.minQuantity > food.quantity ? "red" : "black",
                    fontWeight:
                      food.minQuantity > food.quantity ? "bold" : "normal",
                  }}
                >
                  {food.quantity}
                </td>
                <td>{food.minQuantity}</td>
                <td>{food.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Uh oh, no foods!</p>
      )}
    </span>
  );
}
