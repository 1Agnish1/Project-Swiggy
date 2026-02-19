import {Link} from "react-router-dom"
export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
      <div className="max-w-[288px]  mx-auto mb-2 transform transition duration-200 hover:scale-95">
        <img
          className="w-72 h-44 object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
        ></img>
        <div className="w-[95%] mx-auto mt-3">
          <div className=" text-xl font-bold  ">{restInfo?.info?.name}</div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 fill-green-600"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03
      L22 9.24l-7.19-.61L12 2 9.19 8.63
      2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span className="text-lg">{restInfo?.info?.avgRating}</span>
            <span className="text-lg font-semibold">
              {restInfo?.info?.sla?.slaString}
            </span>
          </div>
          <div className="text-gray-600 text-xl mt-1 h-7  overflow-hidden">
            {restInfo?.info?.cuisines.join(" ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
