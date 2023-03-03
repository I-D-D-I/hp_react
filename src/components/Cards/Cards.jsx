import React from "react";
import s from "./Cards.module.css";
import filled from "./filled.svg";
import empty from "./empty.svg";
// import { data } from "./data.js";

export const Cards = ({
  image,
  nameHero,
  actor,
  gender,
  house,
  wandCore,
  alive,
  like,
  dislike,
  isLiked
}) => {
    return (
      <>
        <div className={s.services__item}>
          <img className={s.item__picture} srcSet={image} alt="Hero" />
          <div className={s.like__container}>
            <button
              onClick={() => (isLiked ? dislike(nameHero) : like(nameHero))}
            >
              {/* добавили кнопку, на нее событие клик, по которому если isLiked - true, фильтрует элементы без имени и оставляет массив сердец с именами */}
              <img
                className={s.like__img}
                src={isLiked ? filled : empty} //если isLiked - true, то ставит заполненную картинку, иначе пустую картинку
                alt="like"
              />
            </button>
          </div>
          <div className={s.item__about}>
            <p className={s.item__name}>{nameHero}</p>
            <p className={s.item__text}>Actor: {actor}</p>
            <p className={s.item__text}>Gender: {gender}</p>
            <p className={s.item__text}>House: {house}</p>
            <p className={s.item__text}>Wand core: {wandCore}</p>
            <p className={s.item__text}>Alive: {alive}</p>
          </div>
        </div>
      </>
    );
};
