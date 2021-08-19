import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "../api/foodsApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { useQuery } from "react-query";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  type: string;
};

export function ListFoods() {
  const { data: foods, isLoading } = useQuery("foods", getFoods);

  if (!foods || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <span>
      <ToastContainer />
      <h1>Pantry Manager</h1>

      <Link to="/food">Add Food</Link>

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
                      // const newFoods = foods.filter((f) => f.id !== food.id);
                      // setFoods(newFoods);
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
