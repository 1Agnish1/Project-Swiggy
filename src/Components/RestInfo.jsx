import { useState } from "react";
import { addItems, incrementItems, decrementItems } from "../Stored/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function RestInfo({ restData }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);

  const element = items.find((item) => item.id === restData.id);
  const count = element ? element.quantity : 0;

  function handleAdditems() {
    dispatch(addItems(restData));
  }

  function handleIncrementItems() {
    dispatch(incrementItems(restData));
  }

  function handleDecrementItems() {
    dispatch(decrementItems(restData));
  }

  return (
    <>
      <div className="flex w-full justify-between gap-4 mb-2 pb-2">
        {/* LEFT CONTENT */}
        <div className="w-[60%]">
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>

          <p className="text-sm sm:text-lg md:text-xl">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>

          {restData?.ratings?.aggregatedRating?.rating && (
            <span className="text-green-700 text-sm sm:text-base">
              ({restData.ratings.aggregatedRating.rating})
            </span>
          )}

          {restData?.ratings?.aggregatedRating?.ratingCountV2 && (
            <span className="text-sm sm:text-base">
              ({restData.ratings.aggregatedRating.ratingCountV2})
            </span>
          )}

          <p className="text-sm sm:text-base text-gray-600 mt-1 right-10 line-clamp-3">
            {restData?.description}
          </p>
        </div>

        {/* IMAGE + BUTTON */}
        <div className="w-[40%] flex flex-col items-center">
          <div className="relative">
            <img
              className="w-40 sm:w-40 md:w-44 h-24 sm:h-28 md:h-32 object-cover rounded-2xl"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restData.imageId
              }
            />

            {count === 0 ? (
              <button
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 border px-4 py-1 rounded-lg shadow-md text-sm sm:text-base"
                onClick={handleAdditems}
              >
                ADD
              </button>
            ) : (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-3 bg-white border px-4 py-1 rounded-lg shadow-md text-green-600">
                <button onClick={handleDecrementItems}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementItems}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="mb-6 mt-2" />
    </>
  );
}

export default RestInfo;
