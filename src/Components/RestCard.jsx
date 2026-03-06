import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/" + restInfo?.info?.id}>
      <div className="w-full max-w-[288px] mx-auto mb-2 transform transition duration-200 sm:hover:scale-95">
        <img
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
        />

        <div className="w-[95%] mx-auto mt-2 sm:mt-3">
          <div className="text-sm sm:text-base md:text-lg font-bold line-clamp-1">
            {restInfo?.info?.name}
          </div>

          <div className="flex items-center gap-1 sm:gap-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 fill-green-600"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03
                L22 9.24l-7.19-.61L12 2 9.19 8.63
                2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>

            <span className="text-xs sm:text-sm md:text-base">
              {restInfo?.info?.avgRating}
            </span>

            <span className="text-xs sm:text-sm md:text-base font-semibold">
              {restInfo?.info?.sla?.slaString}
            </span>
          </div>

          <div className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-1 mt-1">
            {restInfo?.info?.cuisines.join(" ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
