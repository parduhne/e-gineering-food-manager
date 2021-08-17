import { forEachChild, isTemplateSpan } from "typescript";

type Food = {
  name: string;
  quantity: number;
  reorderPoint: number;
  type: string;
};

const foods: Food[] = [
  { name: "Carrot", quantity: 5, reorderPoint: 1, type: "veggie" },
  { name: "Pumpkin", quantity: 6, reorderPoint: 0, type: "veggie" },
];

function App() {
  return (
    <>
      <h1>Pantry Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Min Qty</th>
            <th>Type</th>
          </tr>
        </thead>
        {foods.map((food: Food) => (
          <tr key={food.name}>
            {/* {Object.values(foods).map((item) => <td>{item}</td> )} */}
            <td>{food.name}</td>
            <td>{food.quantity}</td>
            <td>{food.reorderPoint}</td>
            <td>{food.type}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
