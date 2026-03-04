import RestInfo from "./RestInfo";
import { useState } from "react";

function MenuCard({ menuItems, foodselected, searchText }) { //here the menuItems come one by one and the entire process happens with each menuItems one by one 
  const [isOpen, setIsOpen] = useState(true);
 
  // 🔍 Detect search mode safely
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

  // 🌱 Veg filter
  if (foodselected === "veg") {
    filteredItems = filteredItems.filter((food) => "isVeg" in food?.card?.info);
  }

  // 🍗 Non-veg filter
  if (foodselected === "non-veg") {
    filteredItems = filteredItems.filter(
      (food) => !("isVeg" in food?.card?.info),
    );
  }
  if (foodselected && filteredItems.length === 0) {
    return null;
  }

  // 🔍 Search filter (ONLY in search mode)
  if (isSearchMode) {
    if (searchText.length < 2) return null;

    filteredItems = filteredItems.filter((food) =>
      food?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  // ⛔ Hide empty sections in search
  if (isSearchMode && filteredItems.length === 0) {
    return null;
  }

  // ⛔ Collapsed in browse mode
  if (!isSearchMode && !isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(true)}
          >
            ⌄
          </button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  /* ---------------- RENDER ---------------- */
  return (
    <div className="w-full">
      {/* ❌ Hide title & toggle in search mode */}
      {!isSearchMode && (
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
      )}

      {/* ✅ ONLY MATCHING DISHES */}
      <div>
        {filteredItems.map((item) => (
          <RestInfo key={item?.card?.info?.id} restData={item?.card?.info} />
        ))}
      </div>

      {!isSearchMode && <div className="h-5 bg-gray-200 mt-2 mb-2"></div>}
    </div>
  );
}

export default MenuCard;
