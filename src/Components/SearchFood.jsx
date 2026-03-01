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
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards // here find() will return the first card that contains -> groupedCard?.cardGroupMap?.REGULAR?.cards
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];//if it doesn't found anything return an empty array

      // ✅ extract only menu sections
      const menuSections = regularCards
        .map((item) => item?.card?.card)
        .filter(
          (card) => card?.title && card.title.toLowerCase() !== "recommended",
        );// here filter() sees that wether a card has a title and also if the title is 'recommended' don't include it 

      setMenuData(menuSections);
    }

    fetchData();
  }, [id]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {/* SEARCH INPUT */}
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border mb-10 "
        type="text"
        placeholder="Search for dishes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* ✅ SHOW NOTHING UNTIL 2 CHARACTERS */}
      {searchText.length >= 2 && (  //conditional rendering
        <div >
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
