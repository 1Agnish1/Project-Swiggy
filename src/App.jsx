
import Home from './Components/Home';
import Restaurant from './Components/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from './Components/RestaurantMenu';
import SearchFood from './Components/SearchFood';

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/restaurant" element={<Restaurant/>}></Route>
      <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
      <Route path="/city/Delhi/:id/search" element={<SearchFood></SearchFood>}></Route>

    </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
