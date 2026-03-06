import { dineoutRestaurants } from "../Utils/Dinedata";
import DineCard from "./DineCard";

function DineOption() {
  return (
    <div className="max-w-[80%] mx-auto mt-10 sm:mt-14 md:mt-20 mb-10 sm:mb-14 md:mb-20">
      <p className="text-sm sm:text-xl md:text-2xl font-bold">
        Discover best restaurants on dineout
      </p>

      <div className="flex flex-nowrap overflow-x-auto mt-4 sm:mt-5 md:mt-6 gap-3 sm:gap-4 md:gap-5">
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData} />
        ))}
      </div>
    </div>
  );
}

export default DineOption;
