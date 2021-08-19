import { Food } from "../ListFoods/ListFoods";
import { NewFood } from "../FoodForm";

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:3001";
export async function getFoods() {
  debugger;
  const response = await fetch(`${baseUrl}/foods`);
  if (!response.ok) throw new Error("Call to get foods failed");
  return response.json() as Promise<Food[]>;
}

export async function getFood(id: string) {
  const response = await fetch(`${baseUrl}/foods/${id}`);
  if (!response.ok) throw new Error("Call to get foods failed");
  return response.json() as Promise<Food>;
}

export async function deleteFood(id: number) {
  const response = await fetch(`${baseUrl}/foods/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Delete failed");
  return response.json();
}

export async function saveFood(food: Food | NewFood) {
  const url = "id" in food ? `${baseUrl}/foods/${food.id}` : `${baseUrl}/foods`;

  const response = await fetch(url, {
    method: "id" in food ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Call to save foods failed");
  return response.json() as Promise<Food>;
}
