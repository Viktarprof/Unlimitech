import React from 'react';
import s from './HeaderContainer.module.css'
import { headerData } from '../../data/data';
import Header from '../Header/Header';

function HeaderContainer() {
  return (
    <div className={s.headerContainer}>
      <Header headerData={headerData}/>
    </div>
  );
}

export default HeaderContainer;
