import { imageGridCards } from "../Utils/FoodData";
import Foodcard from "./Foodcard";

function FoodOption() {
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-sm sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8 md:mt-10">
        Shop Groceries on Instamart
      </h1>

      <div className="grid grid-rows-2 grid-flow-col  sm:gap-4 md:gap-5 overflow-x-auto mt-6 sm:mt-8 md:mt-10">
        {imageGridCards.map((foodData) => (
          <Foodcard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}

export default FoodOption;
