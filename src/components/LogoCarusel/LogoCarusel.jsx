import React, { useState } from "react";
import s from "./LogoCarusel.module.css";
import Button from "../UI/Button/Button";
import {RxTriangleRight, RxTriangleLeft} from 'react-icons/rx'

function LogoCarusel({ logoComponies }) {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if(scrollPosition === -900){
      setScrollPosition(0)
    } else{
    setScrollPosition((prevPosition) => prevPosition - 100)};
  };

  const handleScrollRight = () => {
    if(scrollPosition === 0){
      setScrollPosition(-900)
    }
    setScrollPosition((prevPosition) => prevPosition + 100);
  };

  const styleCarusel = {
    transform: `translateX(${scrollPosition}px)`,
  };

  return (
    <div className={s.track}>
      <Button 
        text={<RxTriangleLeft/>}
        styles="arrow" 
        onClick={handleScrollLeft} 
      />
      <div className={s.logoWindow}>
        {logoComponies.map((el) => (
          <img 
            key={el.id} 
            style={styleCarusel} 
            className={s.logoItem} 
            src={el.image} 
            alt={el.title} />
        ))}
      </div>
      <Button 
        text={<RxTriangleRight/>}
        styles="arrow" 
        onClick={handleScrollRight} 
      />
    </div>
  );
}

export default LogoCarusel;
