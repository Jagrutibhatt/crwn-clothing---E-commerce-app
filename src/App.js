// import { Form } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Route/Home/Home.component";
import Navigation from "./Route/Navigation/Navigation.components";

const Shop = () => {
  return "Im the Shop";
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
