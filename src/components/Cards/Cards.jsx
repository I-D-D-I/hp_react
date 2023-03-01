import React from 'react'
import s from './Cards.module.css'
// import { data } from "./data.js";

export const Cards = ({ image, nameHero, actor, gender, house, wandCore, alive }) => {
  return (
    // <div className={s.services__wrapper}>
    <div className={s.services__item}>
      <img className={s.item__picture} srcSet={image} alt="Hero" />
      <div className={s.item__about}>
        <p className={s.item__name}>{nameHero}</p>
        <p className={s.item__text}>Actor: {actor}</p>
        <p className={s.item__text}>Gender: {gender}</p>
        <p className={s.item__text}>House: {house}</p>
        <p className={s.item__text}>Wand core: {wandCore}</p>
        <p className={s.item__text}>Alive: {alive}</p>

        {/* <p className={s.item__name}>Hermione Granger</p>
          <p className={s.item__text}>Actor: Emma Watson</p>
          <p className={s.item__text}>Gender: female</p>
          <p className={s.item__text}>House: Gryffindor</p>
          <p className={s.item__text}>Wand core: dragon heartstring</p>
          <p className={s.item__text}>Alive: yes </p> */}
      </div>
    </div>
    // </div>
  );
};
