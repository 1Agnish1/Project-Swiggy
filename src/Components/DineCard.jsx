function DineCard({ RestData }) {
  return (
    <div className="flex-none w-36 sm:w-64 md:w-72 lg:w-80">
      <a target="_blank" href={RestData.cta.link}>
        <div className="relative">
          <img
            className="w-full h-24 sm:h-36 md:h-40 lg:h-50 object-cover rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-linear-to-t from-black to-transparent"></div>

          {/* Restaurant Name */}
          <p className="absolute bottom-2 left-2 right-10 text-xs sm:text-sm md:text-base text-white z-10 font-semibold line-clamp-2">
            {RestData.info.name}
          </p>

          {/* Rating */}
          <p className="absolute bottom-2 right-2 text-xs sm:text-sm md:text-base text-white z-10 font-semibold">
            {RestData?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
}

export default DineCard;
