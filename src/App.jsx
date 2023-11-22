import "./App.css";
import { Banner } from "./components/Banner";
import { Cart } from "./components/Cart";
import { FoodMenu } from "./components/FoodMenu";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="main">
        <FoodMenu />
        <Cart />
      </div>
    </>
  );
}

export default App;
