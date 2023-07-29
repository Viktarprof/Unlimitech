import React, { useState } from "react";
import s from "./Products.module.css";
import { GoHeartFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import {
  incrementLike,
  decrementLike,
  incrementTotal,
  decrementTotal,
} from "../store/toolkitReduser/countSlice";
import Item from "../Item/Item";

function Products({ title, price, discount, images, model }) {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [changeImage, setChangeImage] = useState(0);

  const dispatch = useDispatch();

  const hendleActiveHeart = () => {
    setActive(!active);
    if (active) {
      dispatch(decrementLike(1));
      dispatch(decrementTotal(discountPrice));
    } else {
      dispatch(incrementLike(1));
      dispatch(incrementTotal(discountPrice));
    }
  };

  const handleImageHover = () => {
    setTimeout(
      () => setChangeImage((prevIndex) => (prevIndex === 0 ? 1 : 0)),
      400
    );
  };

  const prevImg = () => {
    setChangeImage((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  const nextImg = () => {
    setChangeImage((nextIndex) => (nextIndex === 1 ? 0 : 1));
  };

  const discountPrice = price - discount;

  const styleHeart = {
    color: active ? "red" : "rgb(140, 165, 154)",
    fontSize: "25px",
    fontWeight: 800,
  };

  const styleImage = {
    width: "220px",
    transition: "opacity 5s ease-in-out",
  };

  const handleImageShow = () => {
    setShow(true);
  };
  
  const closeImage = () => {
    setShow(false);
  };

  return (
    <>
      <div>
        <div className={s.card}>
          <div className={s.heart}>
            <GoHeartFill style={styleHeart} onClick={hendleActiveHeart} />
          </div>
          <img
            style={styleImage}
            src={images[changeImage]}
            alt={title}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageHover}
            onClick={handleImageShow}
          />

          <p className={s.discount}>-{discount}%</p>
          <p className={s.title}>{title}</p>
          <div className={s.price}>
            <p className={s.newPrece}>{discountPrice}zl</p>
            <p className={s.oldPrice}>{price}zl</p>
          </div>
          <p className={s.model}>{model}</p>
        </div>
      </div>

      {show && (
        <div className={s.item_container}>
          <Item
            prevImg={prevImg}
            nextImg={nextImg}
            closeImage={closeImage}
            images={images[changeImage]}
            title={title}
          />
        </div>
      )}
    </>
  );
}

export default Products;
