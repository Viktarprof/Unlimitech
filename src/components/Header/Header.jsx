import React from 'react';
import s from './Header.module.css';
import Button from '../UI/Button/Button';

function Header({ headerData }) {
  return (
    <>
      {headerData.map((el) => (
        <div className={s.card} key={el.id}>
          <img width={600} src={el.image} alt={el.title}/>
          <Button styles='offerBtn' text={el.text}/>
        </div>
      ))}
    </>
  );
}

export default Header;
