function Grocerycard({ foodData }) {
  return (
    <div className="flex-none text-center ">
      <a href={foodData?.action?.link}>
        <img
          className="
          w-24 sm:w-32 md:w-36 lg:w-40
          h-28 sm:h-36 md:h-44 lg:h-50 mx-auto
          "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
        />
      </a>

      <h2 className="text-[10px] sm:text-sm md:text-base font-semibold mt-1 sm:mt-2">
        {foodData?.action?.text}
      </h2>
    </div>
  );
}

export default Grocerycard;
