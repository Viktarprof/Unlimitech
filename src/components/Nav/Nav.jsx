import React from "react";
import s from "./Nav.module.css";
import Timer from "../Timer/Timer";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { BiSearch, BiUser } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import logo from "./media/logo.svg";
import heards from "./media/heards.png";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Nav() {
  const styleLogo = { color: "#0068FF", fontSize: "25px", cursor: "pointer" };
  const likedProducts = useSelector((state) => state.count.likedProducts);
  const totalAmount = useSelector((state) => state.count.totalAmount);

  return (
    <div className={s.navContainer}>
      <div className={s.timer}>
        <p>HAPPY HOURS TYLKO PRZEZ 24 GODZINY</p>
        <Timer />
      </div>
      <div className={`${s.btnContainer} wrapper`}>
        <div className={s.sotialLogo}>
          <FaFacebookSquare style={styleLogo} />
          <FaInstagramSquare style={styleLogo} />
        </div>
        <div className={s.logoNav}>
          <img src={logo} alt="Logo" />
          <div className={s.navigationButton}>
            <Button text="KOBIETY" styles="naviBtn" />
            <Button text="MĘŻCZYŹNI" styles="naviBtn" />
            <Button text="DZIECI" styles="naviBtn" />
            <Button text="WSZYSTKO DO -60%" styles="naviBtn" />
          </div>
        </div>
        <div className={s.userDashboard}>
          <BiSearch style={styleLogo} />
          <GoHeart style={styleLogo} />
          <BiUser style={styleLogo} />
          <LiaShoppingBagSolid style={styleLogo} />
          <p>
            {likedProducts} | {totalAmount.toFixed(2)} zl
          </p>
        </div>
      </div>
      <div className={s.offers}>
        <p className={s.offersText}>
          <img width={40} src={heards} alt={heards} />
          NOWA KOLEKCJA JUŻ ONLINE
          <img width={40} src={heards} alt={heards} />
          SPRAWDŹ UZUPEŁNIONE BESTSELLERY & MEGA RABATY NA WSZYSTKIE NOWOŚCI
        </p>
      </div>
    </div>
  );
}

export default Nav;
