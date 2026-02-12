import { useState } from "react";
import Header from "./Components/Header.jsx";
import FoodOption from "./Components/FoodOption.jsx";
import GroceryOption from "./Components/GroceryOption.jsx";
import DineOption from "./Components/DineOption.jsx";

function App() {
  return (
  <>
  <Header/>
  <FoodOption/>
  <GroceryOption/>
  <DineOption/>
  </>
  );
}

export default App;
