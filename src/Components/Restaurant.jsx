import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://corsproxy.io/?";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      const response = await fetch(proxyServer + encodeURIComponent(swiggyAPI));
      const data = await response.json();

      const restaurants =
        data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestData(restaurants);
    }

    fetchData();
  }, []);

  if (RestData.length == 0) return <Shimmer />;

  return (
    <div
      className="grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-5 
    max-w-[80%] 
    mx-auto 
    mt-10 sm:mt-16 md:mt-20"
    >
      {RestData.slice(0, 12).map((restInfo) => (
        <RestCard key={restInfo.info.id} restInfo={restInfo} />
      ))}
    </div>
  );
}
