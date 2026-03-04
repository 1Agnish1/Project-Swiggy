import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/store";
import{ Provider } from "react-redux"
import Checkout from "./Components/Checkout";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route path="/restaurant" element={<Restaurant />}></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu />}
              ></Route>
              <Route
                path="/city/Delhi/:id/search"
                element={<SearchFood></SearchFood>}
              ></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
