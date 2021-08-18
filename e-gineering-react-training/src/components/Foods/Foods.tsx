import React, { useEffect, useState } from "react";
import { getFoods, deleteFood } from "../../api/foodsApi";
import { Food, NewFood } from "../../types/foodType";
import Table from "../common/Table/Table";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";

const emptyFood: NewFood = {
  name: "",
  quantity: 0,
  minQuantity: 0,
  type: "",
};

function ListFoods() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [newFood, setNewFood] = useState<NewFood>(emptyFood);
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

  function onNewFoodChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = event.target;
    setNewFood({ ...newFood, [id]: value });
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
          <Input
            id="name"
            type="text"
            label="Name"
            value={newFood.name}
            onChange={onNewFoodChange}
          />
          <Input
            id="quantity"
            type="number"
            label="Quantity"
            value={newFood.quantity}
            onChange={onNewFoodChange}
          />
          <Input
            id="minQuantity"
            type="number"
            label="Minimum Quantity"
            value={newFood.minQuantity}
            onChange={onNewFoodChange}
          />
          <Select
            id="type"
            label="Type"
            placeholder="Select Type"
            value={newFood.type}
            onChange={onNewFoodChange}
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
