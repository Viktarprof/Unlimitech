import React from 'react'
import s from './Offer.module.css';
import '../../App.css';
import baner from './media/Baner.png'
import Button from '../UI/Button/Button';

function Offer() {
  return (
    <div className={s.baner}>
      <img width={1240} src={baner} alt='baner'/>
      <div className={s.textOffer}>
        <div className={s.textCollection}>
          <p>KOLEKCJA</p>
          <div className={s.text}>
            <h2>MĘSKA</h2>
            <h3>DO -60%</h3>
            <h5>TANIEJ</h5>
          </div>
        </div>
        <Button text='DOWIED SIĘ WIĘCEJ' styles='bannerBtn'/>

      </div>
    </div>
  )
}

export default Offer