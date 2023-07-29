import "./App.css";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import LikedImages from "./components/LikedImages/LikedImages";
import LogoCaruselContainer from "./components/LogoCaruselContainer/LogoCaruselContainer";
import Nav from "./components/Nav/Nav";
import Offer from "./components/Offer/Offer";
import ProductList from "./components/ProductList/ProductList";
import Subscribe from "./components/Subscribe/Subscribe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <HeaderContainer />
      <LogoCaruselContainer />
      <Offer />
      <ProductList />
      <Subscribe />
    </>
  );
}

export default App;
