import { forEachChild, isTemplateSpan } from "typescript";

type Food = {
  name: string;
  quantity: number;
}

const foods: Food[] = [
  {name: "Carrot", quantity: 5},
  {name: "Pumpkin", quantity: 6}
];

function App() {
  function renderFoods() {
    return foods.map((food: Food) => <li>{food.name} qty: {food.quantity}</li>)
  }
  return (
    <>
      <h1>Pantry Manager</h1>
      <ul>
        {renderFoods()}
      </ul>
    </>
  );
}

export default App;