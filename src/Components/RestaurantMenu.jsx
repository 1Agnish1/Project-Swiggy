import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

function RestaurantMenu() {
  let { id } = useParams();

  const [selected, setSelected] = useState(null);
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards?.find(
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const filterData = tempData.filter((items) => items?.card?.card?.title);

      setRestData(filterData);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {/* Search Bar */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-16 mb-10">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-3 md:py-4 rounded-3xl bg-gray-200 text-lg md:text-2xl">
            Search for Dishes
          </p>
        </Link>
      </div>

      {/* Veg / Non Veg buttons */}
      <div className="w-[90%] md:w-[80%] mx-auto mb-10 flex flex-wrap gap-3">
        <button
          className={`text-sm md:text-xl py-2 px-5 md:px-8 border rounded-2xl 
          ${selected === "veg" ? "bg-green-600 text-white" : "bg-gray-300"}`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>

        <button
          className={`text-sm md:text-xl py-2 px-5 md:px-8 border rounded-2xl 
          ${selected === "non-veg" ? "bg-red-600 text-white" : "bg-gray-300"}`}
          onClick={() => setSelected(selected === "non-veg" ? null : "non-veg")}
        >
          Non veg
        </button>
      </div>

      {/* Menu Cards */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-6">
        {RestData.slice(1, 14).map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodselected={selected}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
