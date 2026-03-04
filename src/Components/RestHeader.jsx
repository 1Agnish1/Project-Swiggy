import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);
  return (
    <div className="bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <p className="text-orange-600 font-bold text-xl sm:text-2xl">Swiggy</p>
        <Link to="/Checkout">
          <p className="text-base sm:text-lg font-medium">
            Cart {`(${counter})`}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default RestHeader;
