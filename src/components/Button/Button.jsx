import React from 'react'
import filled from '../Cards/filled.svg'
import s from './Button.module.css'

export const Button = () => {
  return (
    <button className={s.btn}>
      <img className={s.like__img} src={filled} alt="like" />
      <p className={s.like__text}>Show Liked</p>
    </button>
  );
}
