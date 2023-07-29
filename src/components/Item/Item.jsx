import React from 'react';
import s from './Item.module.css';
import Button from '../UI/Button/Button';

function Item({ images, title, closeImage, prevImg, nextImg }) {
  return (
    <div className={s.imgContainer}>
      <Button styles='prevNext' onClick={prevImg} text="Prev" />
      <img
        className={s.img}
        onClick={closeImage}
        width={400}
        src={images}
        alt={title}
      />
      <Button styles='prevNext' onClick={nextImg} text="Next" />
    </div>
  );
}

export default Item;
