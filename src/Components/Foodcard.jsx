function Foodcard({ foodData }) {
  return (
    <>
      <a href={foodData?.action?.link} className="w-40 shrink-0 ">
        <img
          className="
        w-24 sm:w-32 md:w-40 lg:w-44
        h-28 sm:h-36 md:h-44 lg:h-52
        object-cover
        "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
        />
      </a>
    </>
  );
}

export default Foodcard;
