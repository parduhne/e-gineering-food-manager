import { ListFoods } from "./ListFoods/ListFoods";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { Nav } from "./Nav";
import { FoodForm } from "./FoodForm";
import { QueryClientProvider, QueryClient } from "react-query";
import UserContextProvider, { UserContextType } from "./UserContext";
import { ReactQueryDevtools } from "react-query/devtools";

const user: UserContextType = {
  name: "Evan",
  email: "e@p.com",
  role: "admin",
  token: "1234",
};

export default function App() {
  const queryClient = new QueryClient();
  return (
    <UserContextProvider value={user}>
      <ReactQueryDevtools />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/food" exact>
            <FoodForm />
          </Route>
          <Route path="/food/:foodId">
            <FoodForm />
          </Route>
          <Route path="/" exact>
            <ListFoods />
          </Route>
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
