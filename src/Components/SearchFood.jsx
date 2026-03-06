import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

function SearchFood() {
  const { id } = useParams();
  const [searchText, setSearchText] = useState("");
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const regularCards =
        data?.data?.cards?.find(
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const menuSections = regularCards
        .map((item) => item?.card?.card)
        .filter(
          (card) => card?.title && card.title.toLowerCase() !== "recommended",
        );

      setMenuData(menuSections);
    }

    fetchData();
  }, [id]);

  return (
    <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mx-auto mt-10 sm:mt-16 md:mt-20">
      {/* SEARCH INPUT */}
      <input
        className="
        w-full 
        pl-4 sm:pl-6 md:pl-10
        py-2 sm:py-3 md:py-4
        text-sm sm:text-lg md:text-2xl
        bg-gray-200 
        rounded-lg sm:rounded-xl md:rounded-2xl 
        border 
        mb-6 sm:mb-8 md:mb-10
        "
        type="text"
        placeholder="Search for dishes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* SHOW ONLY AFTER 2 CHARACTERS */}
      {searchText.length >= 2 && (
        <div>
          {menuData.map((menu) => (
            <MenuCard
              key={menu?.title}
              menuItems={menu}
              foodselected={null}
              searchText={searchText}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchFood;
