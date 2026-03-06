import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#ff5200] font-serif overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between items-center px-3 py-5 sm:mx-2">
        <img
          className="w-12 sm:w-20 md:w-32"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
        />

        <div className="text-white text-[6px] sm:text-xs md:text-sm font-bold flex items-center gap-2 sm:gap-3 md:gap-8">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            SwiggyCorporate
          </a>

          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            PartnerWithUs
          </a>

          <a
            className="border border-white py-1 px-1 sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg md:rounded-xl"
            target="_blank"
            href="https://www.swiggy.com/corporate/"
          >
            GetTheApp
          </a>

          <a
            className="border border-black bg-black py-1 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 rounded-lg md:rounded-xl"
            target="_blank"
            href="https://www.swiggy.com/corporate/"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-4 pb-6 relative">
        <img
          className="absolute top-0 left-0 
          w-16 sm:w-24 md:w-52 
          h-40 sm:h-48 md:h-104 
          object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />

        <img
          className="absolute top-0 right-0 
          w-16 sm:w-24 md:w-52 
          h-40 sm:h-48 md:h-104 
          object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />

        {/* Heading */}
        <div className="max-w-[70%] md:max-w-[60%] text-[16px]  sm:text-2xl md:text-5xl text-white font-bold container mx-auto text-center ">
          Order food and groceries. Discover best restaurants. Swiggy it!
        </div>

        {/* Search Section */}
        <div className="max-w-[80%] md:max-w-[70%] container mx-auto flex  md:flex-row gap-2 sm:gap-4 mt-8 text-sm md:text-xl ">
          <input
            className="bg-white w-[40%] md:w-[40%] px-2 py-1 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl"
            placeholder="Delhi, India"
          />

          <input
            className="bg-white w-[60%] md:w-[60%] px-2 py-1 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl"
            placeholder="Search for restaurant and items for more"
          />
        </div>
      </div>

      {/* Banner Section */}
      <div className="max-w-[80%] md:max-w-[70%] container mx-auto flex  justify-evenly items-center  pb-4">
        <Link to={"/restaurant"} className="w-1/3">
          <img
            className="w-full h-24 sm:h-44 md:h-80 object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
          />
        </Link>

        <a href="https://www.swiggy.com/instamart" className="w-1/3">
          <img
            className="w-full h-24 sm:h-44 md:h-80 object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
          />
        </a>

        <a href="https://www.swiggy.com/dineout" className="w-1/3">
          <img
            className="w-full h-24 sm:h-44 md:h-80 object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
