import { GrocerGridCard } from "../Utils/Grocery";
import Grocerycard from "./Grocerycard";

function GroceryOption() {
  return (
    <div className="max-w-[80%] mx-auto container mt-15 ">
      <h1 className="text-sm sm:text-xl md:text-2xl font-bold">
        Shop Groceries on Instamart
      </h1>

      <div className="flex flex-nowrap gap-3 sm:gap-4 md:gap-5 overflow-x-auto mt-6 sm:mt-8 md:mt-10">
        {GrocerGridCard.map((foodData) => (
          <Grocerycard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}

export default GroceryOption;
