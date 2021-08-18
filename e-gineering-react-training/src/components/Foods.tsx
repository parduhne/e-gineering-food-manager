import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "../api/foodsApi";
import { Food } from "../types/food";
import Table from "./common/Table";
import { Button } from "@material-ui/core";
import Input from "./common/Input";
import Select from "./common/Select";

function ListFoods() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [addFoodForm, setAddFoodForm] = useState<boolean>(false);

  useEffect(() => {
    async function callGetFoods() {
      setFoods(await getFoods());
    }
    callGetFoods();
    // Using empty array for useEffect since we only want this to run once.
  }, []);

  async function onDeleteFood(id: string) {
    const jsonRes = await deleteFood(id);
    // sets foods to a new array of foods with the deleted food omitted
    setFoods(foods.filter((val) => val.id !== id));
  }

  return (
    <>
      <Table
        head={Object.keys(foods[0] ?? {})}
        rows={foods}
        onDelete={onDeleteFood}
      />
      <Button onClick={() => setAddFoodForm(true)}>Add New</Button>
      {addFoodForm && (
        <form>
          <Input id="name" type="text" label="Name" />
          <Input id="quantity" type="number" label="Quantity" />
          <Input id="minimum-quantity" type="number" label="Minimum Quantity" />
          <Select
            id="type"
            label="Type"
            placeholder="Select Type"
            selectOptions={[
              { label: "Vegetable", value: "vegetable" },
              { label: "Grain", value: "grain" },
              { label: "Fruit", value: "fruit" },
            ]}
          />
        </form>
      )}
    </>
  );
}

export default ListFoods;
