import { Food } from "../types/food";

export async function getFoods(): Promise<Food[]> {
  const res = await fetch("http://localhost:3001/foods");
  if (!res.ok) throw new Error("call to get foods failed");
  return await res.json();
}

export async function deleteFood(id: number): Promise<void> {
  const res = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("call to get foods failed");
  return res.json();
}
