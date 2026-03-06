import RestInfo from "./RestInfo";
import { useState } from "react";

function MenuCard({ menuItems, foodselected, searchText }) {
  const [isOpen, setIsOpen] = useState(true);

  const isSearchMode = typeof searchText === "string";

  /* ---------------- CATEGORY (RECURSIVE) ---------------- */
  if ("categories" in menuItems) {
    return (
      <>
        {menuItems.categories.map((category) => (
          <MenuCard
            key={category.title}
            menuItems={category}
            foodselected={foodselected}
            searchText={searchText}
          />
        ))}
      </>
    );
  }

  /* ---------------- BUILD ITEMS LIST ---------------- */

  let filteredItems = menuItems?.itemCards || [];

  if (foodselected === "veg") {
    filteredItems = filteredItems.filter((food) => "isVeg" in food?.card?.info);
  }

  if (foodselected === "non-veg") {
    filteredItems = filteredItems.filter(
      (food) => !("isVeg" in food?.card?.info),
    );
  }

  if (foodselected && filteredItems.length === 0) return null;

  if (isSearchMode) {
    if (searchText.length < 2) return null;

    filteredItems = filteredItems.filter((food) =>
      food?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  if (isSearchMode && filteredItems.length === 0) return null;

  if (!isSearchMode && !isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            {menuItems.title}
          </p>

          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            onClick={() => setIsOpen(true)}
          >
            ⌄
          </button>
        </div>

        <div className="h-3 md:h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div className="w-full">
      {!isSearchMode && (
        <div className="flex justify-between items-center w-full">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            {menuItems.title}
          </p>

          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
      )}

      {/* Food Items */}
      <div className="flex flex-col gap-4">
        {filteredItems.map((item) => (
          <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
        ))}
      </div>

      {!isSearchMode && (
        <div className="h-3 md:h-5 bg-gray-200 mt-4 mb-4"></div>
      )}
    </div>
  );
}

export default MenuCard;
