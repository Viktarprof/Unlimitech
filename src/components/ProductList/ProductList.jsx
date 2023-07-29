import React from "react";
import s from "./ProductList.module.css";
import { data } from "../../data/data";
import Products from "../Products/Products";

function ProductList() {
  return (
    <div className={s.test}>
      <p className={s.offerHeader}>SPRAWDŹ NASZE NOWOŚCI W OBNIŻONYCH CENACH</p>
      <div className={s.list}>
        {data.map((el) => (
          <Products {...el} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
