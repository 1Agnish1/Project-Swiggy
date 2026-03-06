function Shimmer() {
  return (
    <div
      className="grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-5
      max-w-[90%] sm:max-w-[85%] md:max-w-[80%]
      mx-auto
      mt-10 sm:mt-16 md:mt-20"
    >
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-full mb-2">
            {/* Image */}
            <div className="w-full h-32 sm:h-36 md:h-40 rounded-xl bg-gray-300 animate-pulse"></div>

            {/* Text */}
            <div className="w-[95%] mx-automt-2 sm:mt-3 ">
              <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
              <div className="w-3/4 h-5 bg-gray-200 animate-pulse"></div>
              <div className="w-1/2 h-5 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;
