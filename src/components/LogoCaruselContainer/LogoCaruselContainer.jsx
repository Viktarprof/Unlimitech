import React from 'react';
import s from './LogoCaruseleContainer.module.css';
import { logoComponies } from '../../data/data';
import LogoCarusel from '../LogoCarusel/LogoCarusel';

function LogoCaruselContainer() {
  return (
    <div className={s.logoContainer}>
      <h4>NAJPOPULARNIEJSI PRODUCENCI</h4>
      <LogoCarusel logoComponies={logoComponies} />
    </div>
  );
}

export default LogoCaruselContainer;
