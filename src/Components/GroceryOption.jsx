import { GrocerGridCard } from "../Utils/Grocery";
import Grocerycard from "./Grocerycard";
function GroceryOption() {
  return (
   
    <div className="mt-20 w-[80%] container mx-auto">
        <h1 className="text-2xl font-bold">Shop Groceries on Istamart</h1>
      <div className=" container mx-auto flex flex-nowrap  overflow-x-auto wrap mt-5 gap-5">
        {GrocerGridCard.map((foodData) => (
          <Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>
        ))}
      </div>
      </div>
    
  );
}

export default GroceryOption