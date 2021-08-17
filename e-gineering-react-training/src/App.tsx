import { forEachChild, isTemplateSpan } from "typescript";
import { useEffect, useState } from "react";
import { Food } from "./types/food";
import { getFoods, deleteFood } from "./api/foodsApi";

function App() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function callGetFoods() {
      setFoods(await getFoods());
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  async function onDeleteFood(id: number) {
    const jsonRes = await deleteFood(id);
    // sets foods to a new array of foods with the deleted food omitted
    setFoods(foods.filter((val) => val.id !== id));
  }

  return (
    <>
      <h1>Pantry Manager</h1>
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
                <button onClick={async () => await onDeleteFood(food.id)}>
                  Delete
                </button>
              </td>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.minQuantity}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Add New</button>
    </>
  );
}

export default App;
