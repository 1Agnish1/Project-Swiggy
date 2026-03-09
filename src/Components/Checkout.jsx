import { useSelector, useDispatch } from "react-redux";
import { incrementItems, decrementItems } from "../Stored/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
  const dispatch = useDispatch();

  const price = items.reduce((total, item) => {
    const itemPrice = Math.floor((item.price || item.defaultPrice) / 100);
    return total + itemPrice * item.quantity;
  }, 0);

  function handleIncrementItems(item) {
    dispatch(incrementItems(item));
  }

  function handleDecrementItems(item) {
    dispatch(decrementItems(item));
  }

  return (
    <div>
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-16 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Checkout
        </h1>

        {items.map((value) => (
          <div
            key={value.id}
            className="flex flex-col md:flex-row md:items-center justify-between border-b py-4 gap-4"
          >
            {/* Image + Name */}
            <div className="flex items-center gap-4 md:w-[40%]">
              <img
                className="w-24 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 object-cover rounded-xl"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}
                alt={value.name}
              />

              <p className="text-sm sm:text-base font-medium line-clamp-2">
                {value.name}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex justify-between md:justify-end items-center w-full md:w-[40%] gap-6 text-sm sm:text-base">
              {/* Single price */}
              <div>
                ₹{Math.floor((value.price || value.defaultPrice) / 100)}
              </div>

              {/* Quantity Controller */}
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-200 px-3 py-1 rounded"
                  onClick={() => handleDecrementItems(value)}
                >
                  -
                </button>

                <span className="font-semibold">{value.quantity}</span>

                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => handleIncrementItems(value)}
                >
                  +
                </button>
              </div>

              {/* Total */}
              <div className="font-bold">
                ₹
                {Math.floor((value.price || value.defaultPrice) / 100) *
                  value.quantity}
              </div>
            </div>
          </div>
        ))}

        {/* Pay Section */}
        <div className="flex justify-between items-center p-4 sm:p-5 rounded-xl shadow-md mt-6 bg-amber-500 text-white">
          <div className="text-base sm:text-lg md:text-xl font-semibold">
            Pay
          </div>

          <div className="text-lg sm:text-xl md:text-2xl font-bold">
            ₹{price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
